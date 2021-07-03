import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"

import { CRUD } from "../utils"

export const edgeCreate = async ({ id, type, createdAt, owner, weight }: api.CreateEdgeInput) => {
    const newEdge = await CRUD({
        query: mutations.createEdge,
        variables: {
            input: {
                id,
                weight,
                type,
                createdAt,
                owner
            }
        }
    })

    return newEdge
}

export const edgeNodeCreate = async ({ edge_id, node_id, id, owner }: api.CreateEdgeNodeInput) => {
    const newEdgeNode = await CRUD({
        query: mutations.createEdgeNode,
        variables: {
            input: {
                edge_id,
                node_id,
                id,
                owner
            }
        }
    })
    return newEdgeNode
}
/*
* @example
* gen_link_input({
*    nodes : [ { id: "this is a reference" }, { id: "alias", status: "A", type: "B" } ],
*    edge  : { id: "also a (edge) reference" }
* })
* // => { nodes: [ 
* // =>     null, 
* // =>     { id: 'bebc9d30-f844-4579-892d-e7b177c2a4e7', status: 'A', type: 'B' } 
* // =>   ], 
* // =>   edge: null, // reference = no new edge
* // =>   edge_nodes: [ 
* // =>      { edge_id: 'also a (edge) reference', node_id: 'this is a reference' }, 
* // =>      { edge_id: 'also a (edge) reference', node_id: 'bebc9d30-f844-4579-892d-e7b177c2a4e7' } 
* // =>   ] 
* // => } 
*/

//export const genLink = async ({}: )

export const edgeRead = async ({ id }: api.GetEdgeQueryVariables) => {
    const existingEdge = await CRUD({
        query: queries.getEdge,
        variables: id
    })
    return existingEdge
}

// @model (queries: null) == NO edgeNodeRead

export const edgeUpdate = async ({ id, createdAt, owner, type, weight }: api.UpdateEdgeInput) => {
    const updatedEdge = await CRUD({
        query: mutations.updateEdge,
        variables: {
            input: {
                id,
                createdAt,
                owner,
                type,
                weight
            }
        }
    })
    return updatedEdge
}

export const edgeNodeUpdate = async ({ id, edge_id, node_id, owner }: api.UpdateEdgeNodeInput) => {
    const updatedEdgeNode = await CRUD({
        query: mutations.updateEdgeNode,
        variables: {
            input: {
                id,
                edge_id,
                node_id,
                owner
            }
        }
    })
    return updatedEdgeNode
}

export const edgeDelete = async ({ id }: api.DeleteEdgeInput) => {
    const deletedEdge = await CRUD({
        query: mutations.deleteEdge,
        variables: id
    })
    return deletedEdge
}

export const edgeNodeDelete = async ({ id }: api.DeleteEdgeNodeInput) => {
    const deletedEdgeNode = await CRUD({
        query: mutations.deleteEdgeNode,
        variables: id
    })
    return deletedEdgeNode
}
