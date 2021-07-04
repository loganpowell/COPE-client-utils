import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"

import { CRUD } from "../utils"

const nodeCreate = async ({ id, status, type, createdAt, owner, updatedAt }: api.CreateNodeInput) => {
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

const nodeRead = async ({ id }: api.GetNodeQueryVariables) => {
    const existingNode = await CRUD({
        query: queries.getNode,
        variables: id
    })

    return existingNode
}

const nodeUpdate = async ({ id, type, status, owner, createdAt, updatedAt }: api.UpdateNodeInput) => {
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

const nodeDelete = async ({ id }: api.DeleteNodeInput) => {
    const deletedNode = await CRUD({
        query: mutations.deleteNode,
        variables: id
    })

    return deletedNode
}

export const node = {
    create: nodeCreate,
    read: nodeRead,
    update: nodeUpdate,
    delete: nodeDelete
}
