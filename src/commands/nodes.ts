import { EquivMap } from "@thi.ng/associative"
import { isArray } from "@thi.ng/checks"
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api"

import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"
import { ListNodesInput } from "../api"

import { CRUD } from "../utils"

const nodeCreate = async (
    { id, status, type, createdAt, owner, updatedAt }: api.CreateNodeInput,
    authMode?: GRAPHQL_AUTH_MODE,
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

const nodeRead = async ({ id }: api.GetNodeQueryVariables, authMode?: GRAPHQL_AUTH_MODE) => {
    const { data: { getNode } } = await CRUD({
        query: queries.getNode,
        variables: { id },
        authMode,
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
const nodeUpdate = async (
    { id, type, status, owner, createdAt, updatedAt }: api.UpdateNodeInput,
    authMode?: GRAPHQL_AUTH_MODE,
) => {
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
                updatedAt,
            },
        },
        authMode,
    })

    return updateNode
}

const nodeDelete = async ({ id }: api.DeleteNodeInput, authMode?: GRAPHQL_AUTH_MODE) => {
    const { data: { deleteNode } } = await CRUD({
        query: mutations.deleteNode,
        variables: { input: { id } },
        authMode,
    })

    return deleteNode
}

const list = async (
    { filter, limit, nextToken, owner, sortDirection, status, createdAt, type }: ListNodesInput,
    authMode?: GRAPHQL_AUTH_MODE,
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

    const response = data.nodesByOwnerStatus
        ? data.nodesByOwnerStatus.items
        : data.nodesByStatusType
          ? data.nodesByStatusType.items
          : data.listNodes ? data.listNodes.items : data

    return response
}

export const node = {
    create: nodeCreate,
    read: nodeRead,
    update: nodeUpdate,
    delete: nodeDelete,
    list,
}
