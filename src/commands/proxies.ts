import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"

import { CRUD } from "../utils"

const proxyCreate = async ({ name, node_id, type, content, createdAt, editors, id, owner }: api.CreateProxyInput) => {
    const newProxy = await CRUD({
        query: mutations.createProxy,
        variables: {
            input: {
                name,
                node_id,
                type,
                content,
                createdAt,
                editors,
                id,
                owner
            }
        }
    })
    return newProxy
}

const proxyRead = async ({ id }: api.GetProxyQueryVariables) => {
    const existingProxy = await CRUD({
        query: queries.getProxy,
        variables: id
    })

    return existingProxy
}

const proxyUpdate = async ({ id, content, createdAt, editors, name, node_id, owner, type }: api.UpdateProxyInput) => {
    const updatedProxy = await CRUD({
        query: mutations.updateProxy,
        variables: {
            input: {
                id,
                content,
                createdAt,
                editors,
                name,
                node_id,
                owner,
                type
            }
        }
    })

    return updatedProxy
}

const proxyDelete = async ({ id }: api.DeleteProxyInput) => {
    const deletedProxy = await CRUD({
        query: mutations.deleteProxy,
        variables: id
    })

    return deletedProxy
}

export const proxy = {
    create: proxyCreate,
    read: proxyRead,
    update: proxyUpdate,
    delete: proxyDelete
}
