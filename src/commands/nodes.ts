import { EquivMap } from "@thi.ng/associative"
import { isArray } from "@thi.ng/checks"
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api"

import { graphql, API as api } from "../graphql"
import { ListNodesInput } from "../api"
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

/*
{
  "data": {
    "getNode": {
      "type": "A_PAGE",
      "id": "MockCourseModule02",
      "edges": {
        "items": [
          {
            "edge": {
              "id": "abcad4b3-53a7-4ade-a129-ab7e2f5416b7",
              "type": "HAS_PART",
              "createdAt": "2021-07-27T15:14:05.373Z",
              "owner": "tommynguyen0512@gmail.com",
              "weight": 0,
              "updatedAt": "2021-07-27T15:14:05.373Z",
              "nodes": {
                "items": [
                  {
                    "node": {
                      "id": "MockCourseModule02",
                      "status": "DRAFT",
                      "type": "A_PAGE",
                      "createdAt": "2021-07-27T15:12:06.834Z",
                      "updatedAt": "2021-07-27T15:12:06.834Z",
                      "owner": "tommynguyen0512@gmail.com",
                      "assets": {
                        "items": [
                          {
                            "id": "c29c4c84-c28d-49c9-be13-9a8712a3ec53",
                            "name": "Video1",
                            
  */
interface GetNodeOptionsQueryVariables {
    id: string,
    edgeType?: api.EdgeType
} 

export const getConnectedNodesByNodeID = async ({ id, edgeType }: GetNodeOptionsQueryVariables, authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => {
    const { data: { getNode } } = await CRUD({
        query: custom.getNodesWithEdges,
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

//   console.log({ others })
   return edgeType ? others.filter(({ type }) => type === edgeType ) : others
}
/**
 * "When updating any part of the composite sort key for
 * @key 'Nodes_by_type_status_createdAt', you must provide
 * all fields for the key."
 *
 * Makes two API calls:
 * 1. for reading the existing node by ID
 * 2. 1st call supplies any required and missing variables
 *    to the updateNode mutation (2nd call)
 */
const nodeUpdate = async (
    { id, type, status, owner, createdAt }: api.UpdateNodeInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    const asIs = await nodeRead({ id })
    const { status: _s, type: _t, createdAt: _c, owner: _o } = asIs

    // check to see if update matches existing node
    const no_change = new EquivMap([
        [{status: _s, type: _t, createdAt: _c, owner: _o}, true]
    ]).get({type, status, owner, createdAt })

    if (no_change) return asIs

    const { data: { updateNode } } = await CRUD({
        query: mutations.updateNode,
        variables: {
            input: {
                id,
                type: type || _t,
                status: status || _s,
                owner: owner || _o,
                createdAt: createdAt || _c,
            },
        },
        authMode,
    })

    return updateNode
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
        data?.listNodes?.items || data

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
