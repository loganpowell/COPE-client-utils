import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api"

import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"

import { CRUD } from "../utils"

const assetCreate = async (
    { name, node_id, type, content, createdAt, editors, id, owner, index }: api.CreateAssetInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
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
                owner,
                index,
            },
        },
        authMode,
    })
    return createAsset
}

const assetRead = async (
    { id }: api.GetAssetQueryVariables,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    const { data: { getAsset } } = await CRUD({
        query: queries.getAsset,
        variables: { id },
        authMode,
    })

    return getAsset
}

const assetUpdate = async (
    { id, content, createdAt, editors, name, node_id, owner, type, index }: api.UpdateAssetInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    const {
        content: _co,
        name: _na,
        createdAt: _cr,
        editors: _e,
        type: _t,
        owner: _o,
        node_id: _no,
        index: _i,
    } = await assetRead({ id })
    const { data: { updateAsset } } = await CRUD({
        query: mutations.updateAsset,
        variables: {
            input: {
                id,
                content: content || _co,
                createdAt: createdAt || _cr,
                editors: editors || _e,
                name: name || _na,
                node_id: node_id || _no,
                owner: owner || _o,
                type: type || _t,
                index: index || _i,
            },
        },
        authMode,
    })

    return updateAsset
}

const assetDelete = async (
    { id }: api.DeleteAssetInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    const { data: { deleteAsset } } = await CRUD({
        query: mutations.deleteAsset,
        variables: { input: { id } },
        authMode,
    })

    return deleteAsset
}

const assetConvert = async (
    { id }: api.GetAssetQueryVariables,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    const { node_id, createdAt, type, name, owner, content, editors, index } = await assetDelete({
        id,
    })

    const { data: { createAssetPr } } = await CRUD({
        query: mutations.createAssetPr,
        variables: {
            input: { id, node_id, createdAt, type, name, owner, content, editors, index },
        },
        authMode,
    })
    console.log("Asset converted to AssetPr")

    return createAssetPr
}

export const asset = {
    create: assetCreate,
    read: assetRead,
    update: assetUpdate,
    delete: assetDelete,
    convert: assetConvert,
}
