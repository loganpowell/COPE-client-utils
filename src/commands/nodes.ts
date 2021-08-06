import { EquivMap } from "@thi.ng/associative"
import { isArray } from "@thi.ng/checks"
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api"

import { graphql, API as api } from "../graphql"
import { ListNodesInput, Resource, ResourceOps, ResourceConnection } from "../api"
import { edge, assetPr, asset } from "../commands"
const { mutations, queries, custom } = graphql

import { CRUD, shortUUID, url_compat } from "../utils"

const nodeCreate = async (
    { id, status, type, createdAt, owner, updatedAt }: api.CreateNodeInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
): Promise<api.Node> => {
    const {
        data: { createNode },
    } = await CRUD({
        query: mutations.createNode,
        variables: {
            input: {
                id,
                status,
                type,
                createdAt,
                owner,
                updatedAt,
            },
        },
        authMode,
    })

    return createNode
}

const nodeRead = async (
    { id }: api.GetNodeQueryVariables,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
): Promise<api.Node> => {
    const {
        data: { getNode },
    } = await CRUD({
        query: queries.getNode,
        variables: { id },
        authMode,
    })

    return getNode
}

interface GetNodeOptionsQueryVariables {
    id: string
    edgeType?: api.EdgeType
}

export const getConnectedNodesByNodeID = async (
    { id, edgeType }: GetNodeOptionsQueryVariables,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
): Promise<Array<api.Edge>> => {
    const {
        data: { getNode },
    } = await CRUD({
        query: custom.getEdgesByNodeID,
        variables: { id },
        authMode,
    })

    //console.log("getNode:", JSON.stringify(getNode, null, 2))
    /*
    { getNode: 
       { id: 'is-this-your-special-bush!~Ed9OrHh17Y98',
         status: 'DRAFT',
         type: 'A_GEM',
         createdAt: '2021-08-06T18:38:00.399Z',
         updatedAt: '2021-08-06T18:43:17.423Z',
         owner: 'logan@hyperlocals.com',
         assets: { items: [Object] },
         assetsPr: { items: [] },
         edges: { items: [Object] } } }
     */
    const node: api.Node = getNode
    const all = node?.edges?.items.reduce((acc, { edge }: api.EdgeNode) => {
        //console.log("edge:", JSON.stringify(edge, null, 2))
        const not_me = edge?.nodes?.items.filter(({ node }) => node.id !== id)
        if (!not_me.length) return acc
        return acc.concat({ ...edge, nodes: 1, node: not_me[0]?.node })
    }, [])

    //console.log({ all })
    return edgeType ? all.filter(({ type }: api.Edge) => type === edgeType) : all
}

const getAssetsAndOp = ({
    assets,
    assetsPr,
}: {
    assets: api.ModelAssetConnection
    assetsPr: api.ModelAssetPrConnection
}) => {
    const op: ResourceOps = assets?.items.length ? asset : assetPr
    const _assets: ResourceConnection = assets?.items.length ? assets : assetsPr
    return { _assets, op }
}
/**
 * "When updating any part of the composite sort key for
 * @key 'Nodes_by_type_status_createdAt', you must provide
 * all fields for the key
 *
 * Makes one->two API calls:
 * 1. for reading the existing node by ID
 * if no change -> return: elseif change:
 * 2. 1st call supplies any required and missing variables
 *    to the updateNode mutation (2nd call)
 */
const nodeUpdate = async (
    { id, type, status, owner, createdAt }: api.UpdateNodeInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
): Promise<api.Node> => {
    // if the id changes asIs is undefined
    // change everything but id
    // could be the wrong id was input -> error
    // could be the id has changed -> update
    const asIs: api.Node = await nodeRead({ id })
    if (!asIs) {
        console.warn("No Node found for this id:", id)
        return
    }
    const { id: _i, type: _t, status: _s, owner: _o, createdAt: _c, assets, assetsPr } = asIs

    const { _assets, op } = getAssetsAndOp({ assets, assetsPr })

    // @ts-ignore
    const title_asset = _assets?.items.filter(({ type }) => type === api.AssetType.T_OG_TITLE)[0]

    //console.log({ _assets, title_asset })
    // check to see if update matches existing node
    //const is_hashed = title_asset.content.split("~")[1]
    const title = title_asset.content
    const stub = url_compat(title)
    //console.log({ stub, _i_frendly: _i.split("~")[0] })
    if (title_asset && stub !== _i.split("~")[0]) {
        console.log("changing Node IDs for all connections to: ", id)
        // FIXME: convert into a single batch Graphql Query string
        // TODO: check on batch operation count limit for Appsync/Amplify
        // SEE utils/batch.ts
        const friendly = shortUUID(title)
        // title hasn't yet been integrated into node_id
        // UPDATE ASSETS
        const updated_assets = await Promise.all(
            _assets?.items.map(
                async ({ id, content, createdAt, editors, index, name, type, owner }: Resource) =>
                    await op.update({
                        id,
                        content,
                        createdAt,
                        editors,
                        index,
                        name,
                        node_id: friendly,
                        type,
                        owner,
                    }),
            ),
        )
        //console.log({ updated_assets })
        // UPDATE EDGES
        const edges = await getConnectedNodesByNodeID({ id: _i })
        const updated_edges =
            (edges &&
                (await Promise.all(
                    edges.map(async ({ id: edge_id }: api.Edge) => {
                        const updatedEdge = await edge.relink({
                            edge_id,
                            node_id: friendly,
                        })
                        return updatedEdge
                    }),
                ))) ||
            null
        console.log("updated Edges:", JSON.stringify(updated_edges, null, 2))
        // CREATE NEW NODE
        const {
            data: { createNode },
        } = await CRUD({
            query: mutations.createNode,
            variables: {
                input: {
                    id: friendly,
                    type: type || _t,
                    status: status || _s,
                    createdAt: createdAt || _c,
                },
            },
        })
        // DELETE OLD NODE
        //console.log({ createNode })
        const {
            data: { deleteNode },
        } = await CRUD({
            query: mutations.deleteNode,
            variables: {
                input: { id: _i },
            },
            authMode,
        })
        //console.log({ deleteNode })
        return createNode
    }
    const no_change = new EquivMap([
        [{ type: _t, status: _s, owner: _o, createdAt: _c }, true],
    ]).get({ type, status, owner, createdAt })

    if (no_change) return asIs

    const {
        data: { updateNode },
    } = await CRUD({
        query: mutations.updateNode,
        variables: {
            input: {
                id: id || _i,
                type: type || _t,
                status: status || _s,
                owner: owner || _o,
                createdAt: createdAt || _c,
            },
        },
        authMode,
    })
    console.log({ updateNode })
    return updateNode
}

const nodeDelete = async (
    { id }: api.DeleteNodeInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
): Promise<api.Node> => {
    const {
        data: { getNode },
    } = await CRUD({
        query: custom.getEdgesByNodeID,
        variables: { id },
        authMode,
    })

    // FIXME: convert into a single batch Graphql Query string
    // TODO: check on batch operation count limit for Appsync/Amplify

    const { assets, assetsPr, edges }: api.Node = getNode
    // clean up connections
    const deletedEdges = await Promise.all(
        edges?.items.map(async ({ id }: api.EdgeNode) => await edge.delete({ id })),
    )
    console.log({ deletedEdges })
    // clean up assets
    const { _assets, op } = getAssetsAndOp({ assets, assetsPr })

    // FIXME: when converting to GraphQL batch, 🔥 must delete any `F_` assets with code (s3) 🔥
    const deletedAssets = await Promise.all(
        _assets?.items.map(async ({ id }: Resource) => await op.delete({ id })),
    )
    console.log({ deletedAssets })
    const {
        data: { deleteNode },
    } = await CRUD({
        query: mutations.deleteNode,
        variables: { input: { id } },
        authMode,
    })

    return deleteNode
}

const list = async (
    {
        filter,
        limit = 50,
        nextToken,
        sortDirection,
        owner,
        status,
        createdAt,
        type,
    }: ListNodesInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
): Promise<Array<api.Node>> => {
    const variables = { filter, limit, nextToken, owner, sortDirection, status, createdAt, type }

    const cleaned = Object.entries(variables).reduce((a, [k, v]) => {
        if (!v) return a
        return { ...a, [k]: v }
    }, {})

    const composite_keys = ["owner", "type", "createdAt", "status"]

    const pruned = Object.entries(cleaned).reduce((a, [k, v]) => {
        const matches_this_key = x => x === k
        if (composite_keys.some(matches_this_key)) return a
        return { ...a, [k]: v }
    }, {})

    const list_only = Object.entries(pruned).reduce((a, [k, v]) => {
        if (k === "sortDirection") return a
        return { ...a, [k]: v }
    }, {})

    const Q = {
        ST: queries.nodesByStatusType,
        OS: queries.nodesByOwnerStatus,
        LN: queries.listNodes,
    }

    const CA = isArray(createdAt) ? createdAt : [null, null]

    const V = {
        ListNodes: cleaned,
        OwnerStatus: {
            owner,
            statusCreatedAt: { beginsWith: { status } },
            ...pruned,
        },
        StatusType: {
            status,
            typeCreatedAt: { beginsWith: { type } },
            ...pruned,
        },
        StatusTypeCreatedAt: {
            status,
            typeCreatedAt: { beginsWith: { type, createdAt } },
            ...pruned,
        },
        StatusOwnerCreatedAt: {
            owner,
            statusCreatedAt: { beginsWith: { status, createdAt } },
            ...pruned,
        },
        StatusTypeCreatedBetween: {
            status,
            typeCreatedAt: {
                between: [
                    { type, createdAt: CA[0] },
                    { type, createdAt: CA[1] },
                ],
            },
            ...pruned,
        },
        StatusOwnerCreatedBetween: {
            owner,
            statusCreatedAt: {
                between: [
                    { status, createdAt: CA[0] },
                    { status, createdAt: CA[1] },
                ],
            },
            ...pruned,
        },
    }

    const CAA = isArray(createdAt) ? { createdAt } : { createdAt: undefined }
    const CAR = !isArray(createdAt) ? { createdAt } : { createdAt: undefined }

    const err_msg = (needs, has) =>
        `Must provide \`${needs}\` when using \`${has}\` with \`createdAt\``
    // prettier-ignore
    const match = new EquivMap([
        [ list_only,                            { query: Q.LN, variables: V.ListNodes } ],
        [ { type, ...pruned },                  { error: "must provide `status` with `type`" } ],
        [ { type, owner, ...pruned },           { error: "currently unsupported query: `owner` with `type`" } ],
        [ { status, ...pruned },                { query: Q.ST, variables: V.ListNodes } ],
        [ { status, type, ...pruned },          { query: Q.ST, variables: V.StatusType } ], 
        [ { status, createdAt, ...pruned },     { error: err_msg("type", "status")} ],
        [ { type, createdAt, ...pruned },       { error: err_msg("status", "type")} ],
        [ { owner, createdAt, ...pruned },      { error: err_msg("status", "owner")} ],
        [ { owner, ...pruned },                 { query: Q.OS, variables: V.ListNodes } ],
        [ { status, owner, ...pruned },         { query: Q.OS, variables: V.OwnerStatus } ],
        [ { status, type, ...CAA, ...pruned  }, { query: Q.ST, variables: V.StatusTypeCreatedBetween } ],
        [ { status, owner, ...CAA, ...pruned }, { query: Q.OS, variables: V.StatusOwnerCreatedBetween } ],
        [ { status, type, ...CAR, ...pruned  }, { query: Q.ST, variables: V.StatusTypeCreatedAt } ],
        [ { status, owner, ...CAR, ...pruned }, { query: Q.OS, variables: V.StatusOwnerCreatedAt } ]
    ]).get(cleaned) || { error: "no match for arguments provided to node.list(arguments)" }

    //console.log("entries:", JSON.stringify([ ...EM.keys() ], null, 4))

    //console.log({ match, list_only, cleaned })

    if (match.error) throw new Error(match.error)

    // @ts-ignore
    const { data } = await CRUD({ ...match, authMode })

    const response =
        data?.nodesByOwnerStatus?.items ||
        data?.nodesByStatusType?.items ||
        data?.listNodes?.items ||
        data

    return response
}

export const node = {
    create: nodeCreate,
    read: nodeRead,
    update: nodeUpdate,
    delete: nodeDelete,
    connections: getConnectedNodesByNodeID,
    list,
}
