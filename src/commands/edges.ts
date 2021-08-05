import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api"
import { EquivMap } from "@thi.ng/associative"
import { v4 as uuid } from "uuid"
import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
//import { getEdgesByNodeID } from "../graphql/custom"
import * as api from "../graphql/API"

import { CRUD } from "../utils"

/**
 * @example response 
{
  "data": {
    "getEdge": {
      "id": "testedge2",
      "type": "HAS_CHILD",
      "createdAt": "2021-07-17T17:25:24.477Z",
      "owner": "logan@hyperlocals.com",
      "weight": null,
      "updatedAt": "2021-07-17T17:25:24.477Z",
      "nodes": {
        "items": [
          {
            "id": "edgeNode5",
            "edge_id": "testedge2",
            "node_id": "testNode1",
            "owner": "logan@hyperlocals.com",
            "createdAt": "2021-07-17T17:25:24.543Z",
            "updatedAt": "2021-07-17T17:25:24.543Z"
          },
          {
            "id": "edgeNode6",
            "edge_id": "testedge2",
            "node_id": "testNode3",
            "owner": "logan@hyperlocals.com",
            "createdAt": "2021-07-17T17:25:24.549Z",
            "updatedAt": "2021-07-17T17:25:24.549Z"
          }
        ],
        "nextToken": null
      }
    }
  }
}
 */
const edgeRead = async (
    { id }: api.GetEdgeQueryVariables,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    const { data: { getEdge } } = await CRUD({
        query: queries.getEdge,
        variables: { id },
        authMode,
    })
    return getEdge
}

const edgeUpdate = async (
    { id, createdAt, owner, type, weight }: api.UpdateEdgeInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    const asIs = await edgeRead({ id })
    const { createdAt: _c, owner: _o, type: _t, weight: _w } = asIs

    const no_change = new EquivMap([
        [ { createdAt: _c, owner: _o, type: _t, weight: _w }, true ],
    ]).get({ createdAt, owner, type, weight })

    if (no_change) return asIs

    const { data: updateEdge } = await CRUD({
        query: mutations.updateEdge,
        variables: {
            input: {
                id,
                createdAt: createdAt || _c,
                owner: owner || _o,
                type: type || _t,
                weight: weight || _w,
            },
        },
        authMode,
    })
    return updateEdge
}

const linkCreate = async (
    { id = uuid(), type = api.EdgeType.HAS_CHILD, weight = 0, from_node_id, to_node_id },
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    // prettier-ignore
    const batch = /* GraphQL */ `
        mutation{
            edge: createEdge(input: { 
                id: "${id}", 
                type: ${type}, 
                weight: ${weight} 
            }) { id }
            edgeNodeFrom: createEdgeNode(input: { 
                id: "${id + '|' + from_node_id}", 
                edge_id: "${id}", 
                node_id: "${from_node_id}"
            }) { id } 
            edgeNodeTo: createEdgeNode(input: {
                 id: "${id + '|' + to_node_id}", 
                 edge_id: "${id}", 
                 node_id: "${to_node_id}"
            }) { id }
        }
    `

    const results = await CRUD({
        query: batch,
        variables: {},
        authMode,
    })

    return results
}

const relinkToNewNodeID = async (
    { edge_id, node_id },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    const { data: { getEdge } } = await CRUD({
        query: queries.getEdge,
        variables: { id: edge_id },
        authMode,
    })
    if (!getEdge) {
        console.warn("No Edge found with this id:", edge_id)
        return
    }
    const { id, owner, type, createdAt, weight, nodes: { items } } = getEdge

    if (!items.length) {
        console.warn("No EdgeNodes found for this Edge:", id)
        return
    }
    const [ { id: from, owner: o_from }, { id: to, owner: o_to } ] = items.map(({ id, owner }) => ({
        id,
        owner,
    }))
    const batch = /* GraphQL */ `
        mutation {
            edgeNodeFrom: updateEdgeNode(input: {
                id: "${from}"
                edge_id: "${edge_id}"
                node_id: "${node_id}"
                owner: "${o_from}"
            }) {
                id
                edge_id
                node_id
                owner
                createdAt
                updatedAt
                node {
                    id
                    status
                    type
                    createdAt
                    updatedAt
                    owner
                    assets {
                        nextToken
                    }
                    assetsPr {
                        nextToken
                    }
                    edges {
                        nextToken
                    }
                }
                edge {
                    id
                    type
                    createdAt
                    owner
                    weight
                    updatedAt
                    nodes {
                        nextToken
                    }
                }
            }
            edgeNodeTo: updateEdgeNode(input: {
                id: "${to}"
                edge_id: "${to}"
                node_id: "${node_id}"
                owner: "${o_to}"
            }) {
                id
                edge_id
                node_id
                owner
                createdAt
                updatedAt
                node {
                    id
                    status
                    type
                    createdAt
                    updatedAt
                    owner
                    assets {
                        nextToken
                    }
                    assetsPr {
                        nextToken
                    }
                    edges {
                        nextToken
                    }
                }
                edge {
                    id
                    type
                    createdAt
                    owner
                    weight
                    updatedAt
                    nodes {
                        nextToken
                    }
                }
            }
        }
    `
    const results = await CRUD({
        query: batch,
        variables: {},
        authMode,
    })

    return results
}
const linkDelete = async (
    { id },
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    const { data: { getEdge } } = await CRUD({
        query: queries.getEdge,
        variables: { id },
        authMode,
    })
    if (!getEdge) {
        console.warn("No Edge found with this id:", id)
        return
    }
    const { nodes: { items } } = getEdge
    if (!items.length) {
        console.warn("No items found for this Edge:", id)
        return
    }
    const [ from, to ] = items.map(({ id }) => id)
    const mutation = /* GraphQL */ `
        mutation {
            edge: deleteEdge(input: { 
                id: "${id}"
            }) { id }
            edgeNodeFrom: deleteEdgeNode(input: { 
                id: "${from}"
            }) { id } 
            edgeNodeTo: deleteEdgeNode(input: {
                 id: "${to}"
            }) { id }
        }
    `

    const results = await CRUD({
        query: mutation,
        variables: {},
        authMode,
    })

    return results
}
export const edge = {
    create: linkCreate,
    read: edgeRead,
    update: edgeUpdate,
    delete: linkDelete,
    relink: relinkToNewNodeID,
}
