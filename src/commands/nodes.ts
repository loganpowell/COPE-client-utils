import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"
import { ListNodesInput } from "../api"
import { EquivMap } from "@thi.ng/associative"

import { CRUD } from "../utils"

const nodeCreate = async ({ id, status, type, createdAt, owner, updatedAt }: api.CreateNodeInput) => {
    const { data: { createNode } } = await CRUD({
        query: mutations.createNode,
        variables: {
            input: {
                id,
                status,
                type,
                createdAt,
                owner,
                updatedAt
            }
        }
    })

    return createNode
}

const nodeRead = async ({ id }: api.GetNodeQueryVariables) => {
    const { data: { getNode } } = await CRUD({
        query: queries.getNode,
        variables: { id }
    })

    return getNode
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
const nodeUpdate = async ({ id, type, status, owner, createdAt, updatedAt }: api.UpdateNodeInput) => {
    const { status: _s, type: _t, createdAt: _c, owner: _o } = await nodeRead({ id })
    const { data: { updateNode } } = await CRUD({
        query: mutations.updateNode,
        variables: {
            input: {
                id,
                type: type || _t,
                status: status || _s,
                owner: owner || _o,
                createdAt: createdAt || _c,
                updatedAt
            }
        }
    })

    return updateNode
}

const nodeDelete = async ({ id }: api.DeleteNodeInput) => {
    const { data: { deleteNode } } = await CRUD({
        query: mutations.deleteNode,
        variables: { input: { id } }
    })

    return deleteNode
}

const list = async (variables: ListNodesInput) => {
    //const { filter, limit, nextToken, owner, sortDirection, status, statusCreatedAt, type, typeCreatedAt } = variables
    const { filter, limit, nextToken, owner, sort, status, createdAt, type } = variables

    const cleaned = Object.entries(variables).reduce((a, [ k, v ]) => {
        if (!v) return a
        return { ...a, [k]: v }
    }, {})

    console.log("pre:", { variables, cleaned })

    const Q = {
        ST: queries.nodesByStatusType,
        OS: queries.nodesByOwnerStatus
    }
    // prettier-ignore
    const match = new EquivMap([
        [ { status },                               { query: Q.ST, variables: cleaned } ],
        [ { status, type },                         { query: Q.ST, variables: cleaned } ],
        [ { status, type, createdAt },              { query: Q.ST, variables: {
            status, typeCreatedAt: { /* TODO */ }
        } } ],

        //[ { status, type, createdAt }           , "STATUS TYPE CREATEDAT" ],
        //[ { status, type, createdAt, condition }, "STATUS TYPE CREATEDAT CONDITION" ],
        //[ { status, createdAt, condition }      , "STATUS CREATEDAT CONDITION" ],
        //[ { status, createdAt }                 , "STATUS CREATEDAT" ],
        //[ { type, createdAt, condition }        , "TYPE CREATEDAT CONDITION" ],
        //[ { type, createdAt }                   , "TYPE CREATEDAT" ]
        // @ts-ignore
    ]).get(cleaned)

    return { match }

    const { data } = await CRUD(match)
    // example: { gt: { createdAt: "2021-07-05T21:14:59.953Z", type: A_GEM } }

    //const { beginsWith, between, eq, ge, gt, le, lt }: ConditionInput = condition

    //const nodes = await CRUD({
    //    query: queries.nodesByStatusType,
    //    variables: { typeCreatedAt: vars, status }
    //})

    return data
}

const nodesByStatusType = async ({ status, typeCreatedAt }: api.NodesByStatusTypeQueryVariables) => {
    // example: { gt: { createdAt: "2021-07-05T21:14:59.953Z", type: A_GEM } }
    const { beginsWith, between, eq, ge, gt, le, lt } = typeCreatedAt

    const nodes = await CRUD({
        query: queries.nodesByStatusType,
        variables: { typeCreatedAt, status }
    })
    return { nodes }
}

export const node = {
    create: nodeCreate,
    read: nodeRead,
    update: nodeUpdate,
    delete: nodeDelete,
    list
}
