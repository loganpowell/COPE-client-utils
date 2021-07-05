import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"

import { CRUD, gen_link_input } from "../utils"
import { LinkInput } from "../api"
import { node } from "./nodes"

const edgeCreate = async ({ id, type, createdAt, owner, weight }: api.CreateEdgeInput) => {
    const { data: { createEdge } } = await CRUD({
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

    return createEdge
}

const edgeNodeCreate = async ({ edge_id, node_id, id, owner }: api.CreateEdgeNodeInput) => {
    const { data: { createEdgeNode } } = await CRUD({
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
    return createEdgeNode
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

//const genLink = async ({}: )

const edgeRead = async ({ id }: api.GetEdgeQueryVariables) => {
    const { data: { getEdge } } = await CRUD({
        query: queries.getEdge,
        variables: { id }
    })
    return getEdge
}

// @model (queries: null) == NO edgeNodeRead

const edgeUpdate = async ({ id, createdAt, owner, type, weight }: api.UpdateEdgeInput) => {
    const { createdAt: _c, owner: _o, type: _t, weight: _w } = await edgeRead({ id })
    const { data: updateEdge } = await CRUD({
        query: mutations.updateEdge,
        variables: {
            input: {
                id,
                createdAt: createdAt || _c,
                owner: owner || _o,
                type: type || _t,
                weight: weight || _w
            }
        }
    })
    return updateEdge
}

const edgeNodeUpdate = async ({ id, edge_id, node_id, owner }: api.UpdateEdgeNodeInput) => {
    // @model (queries: null) == NO edgeNodeRead
    const { data: { updateEdgeNode } } = await CRUD({
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
    return updateEdgeNode
}

const edgeDelete = async ({ id }: api.DeleteEdgeInput) => {
    const { data: { deleteEdge } } = await CRUD({
        query: mutations.deleteEdge,
        variables: { input: { id } }
    })
    return deleteEdge
}

const edgeNodeDelete = async ({ id }: api.DeleteEdgeNodeInput) => {
    const { data: { deleteEdgeNode } } = await CRUD({
        query: mutations.deleteEdgeNode,
        variables: { input: { id } }
    })
    return deleteEdgeNode
}

const linkCreate = async ({ edge, nodes }: LinkInput) => {
    const { nodes: _nodes, edge: _edge, edge_nodes } = gen_link_input({
        edge,
        nodes
    })

    console.log({ edge_nodes, _nodes, _edge })

    const NODES = await Promise.all(_nodes.map(n => (!n ? null : node.create(n))))

    const EDGES = await edgeCreate(_edge)

    const EDGENODES = await Promise.all(edge_nodes.map(en => edgeNodeCreate(en)))

    //console.log({ newNodes, newEdge, newEdgeNodes })
    return { NODES, EDGES, EDGENODES }
}

// TODO
const linkUpdate = async ({ edge, nodes }: LinkInput) => {
    const { nodes: _nodes, edge: _edge, edge_nodes } = gen_link_input({
        edge,
        nodes
    })

    console.log({ edge_nodes, _nodes, _edge })

    const NODES = await Promise.all(_nodes.map(n => (!n ? null : node.create(n))))

    // @ts-ignore
    const EDGES = await edgeUpdate(_edge)
    // @ts-ignore
    const EDGENODES = await Promise.all(edge_nodes.map(en => edgeNodeUpdate(en)))

    //console.log({ newNodes, newEdge, newEdgeNodes })
    return { NODES, EDGES, EDGENODES }
}

export const edge = {
    create: linkCreate
}
