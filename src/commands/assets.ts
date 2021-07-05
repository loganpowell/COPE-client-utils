import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"

import { CRUD } from "../utils"

const assetCreate = async ({ name, node_id, type, content, createdAt, editors, id, owner }: api.CreateAssetInput) => {
    const { data: { createAsset } } = await CRUD({
        query: mutations.createAsset,
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
    return createAsset
}

const assetRead = async ({ id }: api.GetAssetQueryVariables) => {
    const { data: { getAsset } } = await CRUD({
        query: queries.getAsset,
        variables: { id }
    })

    return getAsset
}

const assetUpdate = async ({ id, content, createdAt, editors, name, node_id, owner, type }: api.UpdateAssetInput) => {
    const {
        content: _co,
        name: _na,
        createdAt: _cr,
        editors: _e,
        type: _t,
        owner: _o,
        node_id: _ni
    } = await assetRead({ id })
    const { data: { updateAsset } } = await CRUD({
        query: mutations.updateAsset,
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

    return updateAsset
}

const assetDelete = async ({ id }: api.DeleteAssetInput) => {
    const { data: { deleteAsset } } = await CRUD({
        query: mutations.deleteAsset,
        variables: { input: { id } }
    })

    return deleteAsset
}

const assetConvert = async ({ id }: api.GetAssetQueryVariables) => {
    const { node_id, createdAt, type, name, owner, content, editors } = await assetDelete({ id })

    const { data: { createProxy } } = await CRUD({
        query: mutations.createProxy,
        variables: {
            input: { id, node_id, createdAt, type, name, owner, content, editors }
        }
    })
    console.log("Asset converted to Proxy")

    return createProxy
}

export const asset = {
    create: assetCreate,
    read: assetRead,
    update: assetUpdate,
    delete: assetDelete,
    convert: assetConvert
}
