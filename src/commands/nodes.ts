import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"

import { CRUD } from "../utils"

export const nodeCreate = async ({ id, status, type, createdAt, owner, updatedAt }: api.CreateNodeInput) => {
    const newNode = await CRUD({
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

    return newNode
}

export const nodeRead = async ({ id }: api.GetNodeQueryVariables) => {
    const existingNode = await CRUD({
        query: queries.getNode,
        variables: id
    })

    return existingNode
}

export const nodeUpdate = async ({ id, type, status, owner, createdAt, updatedAt }: api.UpdateNodeInput) => {
    const updatedNode = await CRUD({
        query: mutations.updateNode,
        variables: {
            input: {
                id,
                type,
                status,
                owner,
                createdAt,
                updatedAt
            }
        }
    })

    return updatedNode
}

export const nodeDelete = async ({ id }: api.DeleteNodeInput) => {
    const deletedNode = await CRUD({
        query: mutations.deleteNode,
        variables: id
    })

    return deletedNode
}
