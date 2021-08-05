import { EquivMap } from "@thi.ng/associative"
import { isArray } from "@thi.ng/checks"
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api"

import { graphql, API as api } from "../graphql"
import { ListNodesInput } from "../api"
import { edge, assetPr, asset } from "../commands"
const { mutations, queries, custom } = graphql


import { CRUD } from "../utils"

const nodeCreate = async (
    { id, status, type, createdAt, owner, updatedAt }: api.CreateNodeInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    const { data: { createNode } } = await CRUD({
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
) => {
    const { data: { getNode } } = await CRUD({
        query: queries.getNode,
        variables: { id },
        authMode,
    })

    return getNode
}

interface GetNodeOptionsQueryVariables {
    id: string,
    edgeType?: api.EdgeType
} 

export const getConnectedNodesByNodeID = async ({ id, edgeType }: GetNodeOptionsQueryVariables, authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => {
    const { data: { getNode } } = await CRUD({
        query: custom.getEdgesByNodeID,
        variables: { id },
        authMode
    })

    //console.log({ getNode })
   const others = getNode?.edges?.items.reduce((a, c) => {
       const { edge } = c
    //   console.log({ edge })
       const not_me = edge?.nodes?.items.filter(({ node }) => node.id !== id )
       return a.concat({...edge, nodes: 1, node: not_me[0]?.node })
   }, [])

   console.log({ others })
   return edgeType ? others.filter(({ type }) => type === edgeType ) : others
}

type UpdateNodeWithNewIdInput = {
    id: string
    new_id?: string
    status?: api.NodeStatus | null
    type?: api.NodeType | null
    createdAt?: string | null
    updatedAt?: string | null
    owner?: string | null
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
    { id, new_id, type, status, owner, createdAt }: UpdateNodeWithNewIdInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    // if the id changes asIs is undefined
    // change everything but id
    // could be the wrong id was input -> error
    // could be the id has changed -> update
    if( !new_id ) {
        const asIs = await nodeRead({ id })
        if( !asIs ) {
            console.warn("No Node found for this id:", id)
            return
        }
        const { id: _i,  type: _t, status: _s,  owner: _o,createdAt: _c, } = asIs

        // check to see if update matches existing node
        const no_change = new EquivMap([
            [{ type: _t, status: _s, owner: _o, createdAt: _c }, true]
        ]).get({type, status, owner, createdAt})

        if (no_change) return asIs

        const { data: { updateNode } } = await CRUD({
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
    const edges = await getConnectedNodesByNodeID({ id })
    const new_edges = await Promise.all(edges.map(async ({edge}) => {
        const { id: edge_id } = edge
        const updatedEdge = await edge.relink({
            edge_id, 
            node_id: id
        })
        console.log({ updatedEdge })
        return ({ createNode, updatedEdge })
    }))
    //const new_assets = await assets
    const { data: { deleteNode } } = await CRUD({
        query: mutations.deleteNode,
        variables: {
            input: { id },
        },
        authMode,
    })
    console.log({ deleteNode })
    const {  data: { createNode } } = await CRUD({
        query: mutations.createNode,
        variables: {
            input: {
                id: new_id,
                type,
                status,
                createdAt,
            }
        }
    })
    const { assets, assetsPr } = createNode
    const op = assets?.items.length ? asset : assetPr
    const ass = assets?.items.length ? assets : assetsPr
    const todos = await Promise.all(ass.items.map(async ({ id, }) => {
        return await op.update({ id, node_id: new_id })
    }))
    console.log({ new_edges, createNode, todos })
    return new_edges
}

const nodeDelete = async (
    { id }: api.DeleteNodeInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    const { data: { deleteNode } } = await CRUD({
        query: mutations.deleteNode,
        variables: { input: { id } },
        authMode,
    })

    return deleteNode
}

const list = async (
    { filter, limit, nextToken, owner, sortDirection, status, createdAt, type }: ListNodesInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    const variables = { filter, limit, nextToken, owner, sortDirection, status, createdAt, type }

    const cleaned = Object.entries(variables).reduce((a, [ k, v ]) => {
        if (!v) return a
        return { ...a, [k]: v }
    }, {})

    const composite_keys = [ "owner", "type", "createdAt", "status" ]

    const pruned = Object.entries(cleaned).reduce((a, [ k, v ]) => {
        const matches_this_key = x => x === k
        if (composite_keys.some(matches_this_key)) return a
        return { ...a, [k]: v }
    }, {})

    const list_only = Object.entries(pruned).reduce((a, [ k, v ]) => {
        if (k === "sortDirection") return a
        return { ...a, [k]: v }
    }, {})

    const Q = {
        ST: queries.nodesByStatusType,
        OS: queries.nodesByOwnerStatus,
        LN: queries.listNodes,
    }

    const CA = isArray(createdAt) ? createdAt : [ null, null ]

    const V = {
        X: cleaned,
        SO: { owner, statusCreatedAt: { beginsWith: { status } }, ...pruned },
        ST: { status, typeCreatedAt: { beginsWith: { type } }, ...pruned },
        STC: { status, typeCreatedAt: { beginsWith: { type, createdAt } }, ...pruned },
        SOC: { owner, statusCreatedAt: { beginsWith: { status, createdAt } }, ...pruned },
        STCB: {
            status,
            typeCreatedAt: { between: [ { type, createdAt: CA[0] }, { type, createdAt: CA[1] } ] },
            ...pruned,
        },
        SOCB: {
            owner,
            statusCreatedAt: {
                between: [ { status, createdAt: CA[0] }, { status, createdAt: CA[1] } ],
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
        [ list_only,                            { query: Q.LN, variables: V.X } ],
        [ { type, ...pruned },                  { error: "must provide `status` with `type`" } ],
        [ { type, owner, ...pruned },           { error: "currently unsupported query: `owner` with `type`" } ],
        [ { status, ...pruned },                { query: Q.ST, variables: V.X } ],
        [ { status, type, ...pruned },          { query: Q.ST, variables: V.ST } ], 
        [ { status, createdAt, ...pruned },     { error: err_msg("type", "status")} ],
        [ { type, createdAt, ...pruned },       { error: err_msg("status", "type")} ],
        [ { owner, createdAt, ...pruned },      { error: err_msg("status", "owner")} ],
        [ { owner, ...pruned },                 { query: Q.OS, variables: V.X } ],
        [ { status, owner, ...pruned },         { query: Q.OS, variables: V.SO } ],
        [ { status, type, ...CAA, ...pruned  }, { query: Q.ST, variables: V.STCB } ],
        [ { status, owner, ...CAA, ...pruned }, { query: Q.OS, variables: V.SOCB } ],
        [ { status, type, ...CAR, ...pruned  }, { query: Q.ST, variables: V.STC } ],
        [ { status, owner, ...CAR, ...pruned }, { query: Q.OS, variables: V.SOC } ]
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
