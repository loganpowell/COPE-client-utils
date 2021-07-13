import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api"

import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"

import { CRUD, gen_link_input } from "../utils"
import { LinkInput } from "../api"
import { node } from "./nodes"

const edgeCreate = async (
    { id, type, createdAt, owner, weight }: api.CreateEdgeInput,
    authMode?: GRAPHQL_AUTH_MODE,
) => {
    const { data: { createEdge } } = await CRUD({
        query: mutations.createEdge,
        variables: {
            input: {
                id,
                weight,
                type,
                createdAt,
                owner,
            },
        },
        authMode,
    })

    return createEdge
}

const edgeNodeCreate = async (
    { edge_id, node_id, id, owner }: api.CreateEdgeNodeInput,
    authMode?: GRAPHQL_AUTH_MODE,
) => {
    const { data: { createEdgeNode } } = await CRUD({
        query: mutations.createEdgeNode,
        variables: {
            input: {
                edge_id,
                node_id,
                id,
                owner,
            },
        },
        authMode,
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
* // =>     { id: 'bebc9d30-f844-4579-892d-e7b177c2a4e7', status: 'A', type: 'B' } 
* // =>   ], 
* // =>   edge: null, // reference = no new edge
* // =>   edge_nodes: [ 
* // =>      { edge_id: 'also a (edge) reference', node_id: 'this is a reference' }, 
* // =>      { edge_id: 'also a (edge) reference', node_id: 'bebc9d30-f844-4579-892d-e7b177c2a4e7' } 
* // =>   ] 
* // => } 
*/

//const genLink = async ({}: )

/**
 * @example response 
   { id: '942542de-9686-428e-ab33-de9d3bedb9af', 
     type: 'HAS_CHILD', 
     createdAt: '2021-07-05T21:15:00.042Z', 
     owner: 'loganp@tepper.cmu.edu', 
     weight: null, 
     updatedAt: '2021-07-05T21:15:00.042Z', 
     nodes:  
      { items:  
         [ { id: '2e7a0166-f90e-4d8f-846a-0482b69d32ed', 
             edge_id: '942542de-9686-428e-ab33-de9d3bedb9af', 
             node_id: 'f844eb36-0b70-45e5-9c64-2f0d6b7743e4', 
             owner: 'loganp@tepper.cmu.edu', 
             createdAt: '2021-07-05T21:15:00.129Z', 
             updatedAt: '2021-07-05T21:15:00.129Z', 
             editors: null }, 
           { id: '4acebdfe-5c66-4ccd-926b-1f02c68be363', 
             edge_id: '942542de-9686-428e-ab33-de9d3bedb9af', 
             node_id: 'longrandomstringthatsmyID1', 
             owner: 'loganp@tepper.cmu.edu', 
             createdAt: '2021-07-05T21:15:00.117Z', 
             updatedAt: '2021-07-05T21:15:00.117Z', 
             editors: null } ], 
        nextToken: null } } } 
 */
const edgeRead = async ({ id }: api.GetEdgeQueryVariables, authMode?: GRAPHQL_AUTH_MODE) => {
    const { data: { getEdge } } = await CRUD({
        query: queries.getEdge,
        variables: { id },
        authMode,
    })
    return getEdge
}

// @model (queries: null) == NO edgeNodeRead

const edgeUpdate = async (
    { id, createdAt, owner, type, weight }: api.UpdateEdgeInput,
    authMode?: GRAPHQL_AUTH_MODE,
) => {
    const { createdAt: _c, owner: _o, type: _t, weight: _w } = await edgeRead({ id })
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

const edgeNodeUpdate = async (
    { id, edge_id, node_id, owner }: api.UpdateEdgeNodeInput,
    authMode?: GRAPHQL_AUTH_MODE,
) => {
    // @model (queries: null) == NO edgeNodeRead
    const { data: { updateEdgeNode } } = await CRUD({
        query: mutations.updateEdgeNode,
        variables: {
            input: {
                id,
                edge_id,
                node_id,
                owner,
            },
        },
        authMode,
    })
    return updateEdgeNode
}

const edgeDelete = async ({ id }: api.DeleteEdgeInput, authMode?: GRAPHQL_AUTH_MODE) => {
    const { data: { deleteEdge } } = await CRUD({
        query: mutations.deleteEdge,
        variables: { input: { id } },
        authMode,
    })
    return deleteEdge
}

const edgeNodeDelete = async ({ id }: api.DeleteEdgeNodeInput, authMode?: GRAPHQL_AUTH_MODE) => {
    const { data: { deleteEdgeNode } } = await CRUD({
        query: mutations.deleteEdgeNode,
        variables: { input: { id } },
        authMode,
    })
    return deleteEdgeNode
}

const linkCreate = async ({ edge, nodes }: LinkInput, authMode?: GRAPHQL_AUTH_MODE) => {
    const { nodes: _nodes, edge: _edge, edge_nodes } = gen_link_input({
        edge,
        nodes,
    })

    console.log({ edge_nodes, _nodes, _edge })

    // prettier-ignore
    const NODES = await Promise.all( _nodes.map(n => !n ? null : node.create(n, authMode)))

    const EDGE = await edgeCreate(_edge, authMode)

    const EDGENODES = await Promise.all(edge_nodes.map(en => edgeNodeCreate(en, authMode)))

    //console.log({ newNodes, newEdge, newEdgeNodes })
    return { NODES, EDGE, EDGENODES }
}

// TODO
const linkDelete = async ({ id }: api.DeleteEdgeInput, authMode?: GRAPHQL_AUTH_MODE) => {
    // must delete edgeNodes before edge, else edges return
    // invalid `null`s
    const { nodes: { items } } = await edgeRead({ id }, authMode)

    console.log("edgeDelete:", { items })

    const deleted_edgeNodes = await Promise.all(
        items.map(({ id /*, edge_id, node_id */ }) => edgeNodeDelete({ id })),
    )

    const { nodes: { items: deleted_items } } = await edgeDelete({ id })

    return { deleted_edgeNodes, deleted_items }
}

export const edge = {
    create: linkCreate,
    read: edgeRead,
    delete: linkDelete,
}
