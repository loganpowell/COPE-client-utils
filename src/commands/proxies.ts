import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"

import { CRUD } from "../utils"

export const createProxy = async (args: api.CreateProxyInput) => {
    const newProxy = await CRUD({
        query: mutations.createProxy,
        variables: {
            input: args
        }
    })
}

export const proxyRead = async (args: api.GetProxyQueryVariables) => {
    const existingProxy = await CRUD({
        query: queries.getProxy,
        variables: {
            input: args
        }
    })

    return existingProxy
}

export const proxyUpdate = async (args: api.UpdateProxyInput) => {
    const updatedProxy = await CRUD({
        query: mutations.updateProxy,
        variables: {
            input: args
        }
    })

    return updatedProxy
}

export const proxyDelete = async (args: api.DeleteProxyInput) => {
    const deletedProxy = await CRUD({
        query: mutations.deleteProxy,
        variables: {
            input: args
        }
    })

    return deletedProxy
}
