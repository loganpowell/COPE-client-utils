import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"

import { CRUD } from "../utils"

export const nodeCreate = async (args: api.CreateNodeInput) => {
    const newNode = await CRUD({
        query: mutations.createNode,
        variables: {
            input: args
        }
    })

    return newNode
}

export const nodeRead = async (args: api.GetNodeQueryVariables) => {
    const existingNode = await CRUD({
        query: queries.getNode,
        variables: {
            input: args
        }
    })

    return existingNode
}

export const nodeUpdate = async (args: api.UpdateNodeInput) => {
    const updatedNode = await CRUD({
        query: mutations.updateNode,
        variables: {
            input: args
        }
    })

    return updatedNode
}

export const nodeDelete = async (args: api.DeleteNodeInput) => {
    const deletedNode = await CRUD({
        query: mutations.deleteNode,
        variables: {
            input: args
        }
    })

    return deletedNode
}
