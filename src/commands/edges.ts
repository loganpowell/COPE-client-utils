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
            "edgeID": "testedge2",
            "nodeID": "testNode1",
            "owner": "logan@hyperlocals.com",
            "createdAt": "2021-07-17T17:25:24.543Z",
            "updatedAt": "2021-07-17T17:25:24.543Z"
          },
          {
            "id": "edgeNode6",
            "edgeID": "testedge2",
            "nodeID": "testNode3",
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
): Promise<api.Edge> => {
    const {
        data: { getEdge },
    } = await CRUD({
        query: queries.getEdge,
        variables: { id },
        authMode,
    })
    return getEdge
}

const edgeUpdate = async (
    { id, createdAt, owner, type, weight }: api.UpdateEdgeInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
): Promise<api.Edge> => {
    const asIs = await edgeRead({ id })
    const { createdAt: _c, owner: _o, type: _t, weight: _w } = asIs

    const no_change = new EquivMap([
        [{ createdAt: _c, owner: _o, type: _t, weight: _w }, true],
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
    { id = uuid(), type = api.EdgeType.HAS_CHILD, weight = 0, from_nodeID, to_nodeID },
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
                id: "${id + '|' + from_nodeID}", 
                edgeID: "${id}", 
                nodeID: "${from_nodeID}"
            }) { id } 
            edgeNodeTo: createEdgeNode(input: {
                 id: "${id + '|' + to_nodeID}", 
                 edgeID: "${id}", 
                 nodeID: "${to_nodeID}"
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
    { edgeID, nodeID_old, nodeID_new },
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    const {
        data: { getEdge },
    } = await CRUD({
        query: queries.getEdge,
        variables: { id: edgeID },
        authMode,
    })
    if (!getEdge) {
        console.warn("No Edge found with this id:", edgeID)
        return
    }
    const {
        id,
        owner,
        type,
        createdAt,
        weight,
        nodes: { items },
    }: api.Edge = getEdge

    if (!items.length) {
        console.warn("No EdgeNodes found for this Edge:", id)
        return
    }
    /*
     [ { id: 'f00a541c-db0b-45cb-8085-9212d6cc36f3',
       type: 'HAS_PART',
       createdAt: '2021-08-05T21:30:21.398Z',
       owner: 'logan@hyperlocals.com',
       weight: 0,
       updatedAt: '2021-08-05T21:30:21.398Z',
       nodes: 1,
       node: [Object] } ] }
       */
    const [
        { id: from, owner: o_from, edgeID: e_from, nodeID: n_from },
        { id: to, owner: o_to, edgeID: e_to, nodeID: n_to },
    ] = items.sort(({ createdAt: ca1 }, { createdAt: ca2 }) => (ca1 < ca2 ? -1 : ca1 > ca2 ? 1 : 0))

    // if edge ID input matches one of the edge IDs of the EdgeNodes, that's the one to update

    const batch = /* GraphQL */ `
        mutation {
            edgeNodeFrom: updateEdgeNode(input: {
                id: "${from}"
                edgeID: "${e_from}"
                nodeID: "${n_from === nodeID_old ? nodeID_new : n_from}"
                owner: "${o_from}"
            }) {
                id
                edgeID
                nodeID
                owner
                createdAt
                updatedAt
            }
            edgeNodeTo: updateEdgeNode(input: {
                id: "${to}"
                edgeID: "${e_to}"
                nodeID: "${n_to === nodeID_old ? nodeID_new : n_to}"
                owner: "${o_to}"
            }) {
                id
                edgeID
                nodeID
                owner
                createdAt
                updatedAt
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

type DeletedLink = {
    edge: {
        deleteEdge: api.Edge
    }
    edgeNodeFrom: {
        deleteEdgeNode: api.EdgeNode
    }
    edgeNodeTo: {
        deleteEdgeNode: api.EdgeNode
    }
}
const linkDelete = async (
    { id },
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
): Promise<DeletedLink> => {
    const {
        data: { getEdge },
    } = await CRUD({
        query: queries.getEdge,
        variables: { id },
        authMode,
    })
    if (!getEdge) {
        console.warn("No Edge found with this id:", id)
        return
    }
    const {
        nodes: { items },
    } = getEdge
    if (!items.length) {
        console.warn("No items found for this Edge:", id)
        return
    }
    const [from, to] = items.map(({ id }) => id)
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
