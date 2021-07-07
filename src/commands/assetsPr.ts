import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"

import { CRUD } from "../utils"

const assetPrCreate = async ({
    name,
    node_id,
    type,
    content,
    createdAt,
    editors,
    id,
    owner
}: api.CreateAssetPrInput) => {
    const { data: { createAssetPr } } = await CRUD({
        query: mutations.createAssetPr,
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
    return createAssetPr
}

const assetPrRead = async ({ id }: api.GetAssetPrQueryVariables) => {
    const { data: { getAssetPr } } = await CRUD({
        query: queries.getAssetPr,
        variables: { id }
    })

    return getAssetPr
}

const assetPrUpdate = async ({
    id,
    content,
    createdAt,
    editors,
    name,
    node_id,
    owner,
    type
}: api.UpdateAssetPrInput) => {
    const {
        content: _co,
        name: _na,
        createdAt: _cr,
        editors: _e,
        type: _t,
        owner: _o,
        node_id: _no
    } = await assetPrRead({ id })
    const { data: { updateAssetPr } } = await CRUD({
        query: mutations.updateAssetPr,
        variables: {
            input: {
                id,
                content: content || _co,
                createdA: createdAt || _cr,
                editors: editors || _e,
                name: name || _na,
                node_id: node_id || _no,
                owner: owner || _o,
                type: type || _t
            }
        }
    })

    return updateAssetPr
}

const assetPrDelete = async ({ id }: api.DeleteAssetPrInput) => {
    const { data: { deleteAssetPr } } = await CRUD({
        query: mutations.deleteAssetPr,
        variables: { input: { id } }
    })

    return deleteAssetPr
}

const assetPrConvert = async ({ id }: api.GetAssetPrQueryVariables) => {
    const { node_id, createdAt, type, name, owner, content, editors } = await assetPrDelete({ id })

    const { data: { createAsset } } = await CRUD({
        query: mutations.createAsset,
        variables: {
            input: { id, node_id, createdAt, type, name, owner, content, editors }
        }
    })
    console.log("AssetPr converted to Asset")
    return createAsset
}

export const assetPr = {
    create: assetPrCreate,
    read: assetPrRead,
    update: assetPrUpdate,
    delete: assetPrDelete,
    convert: assetPrConvert
}
