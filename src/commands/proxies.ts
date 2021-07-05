import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"

import { CRUD } from "../utils"

const proxyCreate = async ({ name, node_id, type, content, createdAt, editors, id, owner }: api.CreateProxyInput) => {
    const { data: { createProxy } } = await CRUD({
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
    return createProxy
}

const proxyRead = async ({ id }: api.GetProxyQueryVariables) => {
    const { data: { getProxy } } = await CRUD({
        query: queries.getProxy,
        variables: { id }
    })

    return getProxy
}

const proxyUpdate = async ({ id, content, createdAt, editors, name, node_id, owner, type }: api.UpdateProxyInput) => {
    const {
        content: _co,
        name: _na,
        createdAt: _cr,
        editors: _e,
        type: _t,
        owner: _o,
        node_id: _ni
    } = await proxyRead({ id })
    const { data: { updateProxy } } = await CRUD({
        query: mutations.updateProxy,
        variables: {
            input: {
                id,
                content: content || _co,
                createdA: createdAt || _cr,
                editors: editors || _e,
                name: name || _na,
                node_id: node_id || _ni,
                owner: owner || _o,
                type: type || _t
            }
        }
    })

    return updateProxy
}

const proxyDelete = async ({ id }: api.DeleteProxyInput) => {
    const { data: { deleteProxy } } = await CRUD({
        query: mutations.deleteProxy,
        variables: { input: { id } }
    })

    return deleteProxy
}

const proxyConvert = async ({ id }: api.GetProxyQueryVariables) => {
    const { node_id, createdAt, type, name, owner, content, editors } = await proxyDelete({ id })

    const { data: { createAsset } } = await CRUD({
        query: mutations.createAsset,
        variables: {
            input: { id, node_id, createdAt, type, name, owner, content, editors }
        }
    })
    console.log("Proxy converted to Asset")
    return createAsset
}

export const proxy = {
    create: proxyCreate,
    read: proxyRead,
    update: proxyUpdate,
    delete: proxyDelete,
    convert: proxyConvert
}
