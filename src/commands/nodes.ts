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
    const { filter, limit, nextToken, owner, sortDirection, status, createdAt, type } = variables

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

    //console.log({ cleaned, pruned, list_only })

    const Q = {
        ST: queries.nodesByStatusType,
        OS: queries.nodesByOwnerStatus,
        LN: queries.listNodes
    }

    const V = {
        X: cleaned,
        SO: { owner, statusCreatedAt: { beginsWith: { status } }, ...pruned },
        ST: { status, typeCreatedAt: { beginsWith: { type } }, ...pruned },
        STC: { status, typeCreatedAt: { beginsWith: { type, createdAt } }, ...pruned },
        SOC: { owner, statusCreatedAt: { beginsWith: { status, createdAt } }, ...pruned }
    }

    const err_msg = (needs, has) => `Must provide \`${needs}\` when using \`${has}\` with \`createdAt\``
    // prettier-ignore
    const match = new EquivMap([
        [ list_only,                               { query: Q.LN, variables: V.X } ],
        [ { status, ...pruned },                   { query: Q.ST, variables: V.X } ],
        [ { status, type, ...pruned },             { query: Q.ST, variables: V.ST } ], 
        [ { status, createdAt, ...pruned },        { error: err_msg("type", "status")} ],
        [ { owner, createdAt, ...pruned },         { error: err_msg("status", "owner")} ],
        [ { status, type, createdAt, ...pruned  }, { query: Q.ST, variables: V.STC } ],
        [ { owner, ...pruned },                    { query: Q.OS, variables: V.X } ],
        [ { status, owner, ...pruned },            { query: Q.OS, variables: V.SO } ],
        [ { status, owner, createdAt, ...pruned }, { query: Q.OS, variables: V.SOC } ]
        // @ts-ignore
    ]).get(cleaned)

    //console.log({ match })
    if (match.error) {
        console.error(match.error)
        return
    }
    // @ts-ignore
    const { data } = await CRUD(match)

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
