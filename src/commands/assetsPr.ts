import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api"
import { EquivMap } from "@thi.ng/associative"
import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"

import { CRUD } from "../utils"

const assetPrCreate = async (
    { name, node_id, type, content, createdAt, editors, id, owner, index }: api.CreateAssetPrInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
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
                owner,
                index,
            },
        },
        authMode,
    })
    return createAssetPr
}

const assetPrRead = async (
    { id }: api.GetAssetPrQueryVariables,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    const { data: { getAssetPr } } = await CRUD({
        query: queries.getAssetPr,
        variables: { id },
        authMode,
    })

    return getAssetPr
}

const assetPrUpdate = async (
    { id, content, createdAt, editors, name, node_id, owner, type, index }: api.UpdateAssetPrInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    const asIs = await assetPrRead({ id })
    const {
        content: _co,
        name: _na,
        createdAt: _cr,
        editors: _e,
        type: _t,
        owner: _o,
        node_id: _no,
        index: _i,
    } = asIs

    const no_change = new EquivMap([
        [
            {
                content: _co,
                name: _na,
                createdAt: _cr,
                editors: _e,
                type: _t,
                owner: _o,
                node_id: _no,
                index: _i,
            },
            true,
        ],
    ]).get({ content, createdAt, editors, name, node_id, owner, type, index })

    if (no_change) return asIs
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
                type: type || _t,
                index: index === 0 ? index : index || _i,
            },
        },
        authMode,
    })

    return updateAssetPr
}

const assetPrDelete = async (
    { id }: api.DeleteAssetPrInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    const { data: { deleteAssetPr } } = await CRUD({
        query: mutations.deleteAssetPr,
        variables: { input: { id } },
        authMode,
    })

    return deleteAssetPr
}

const assetPrConvert = async (
    { id }: api.GetAssetPrQueryVariables,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    const { node_id, createdAt, type, name, owner, content, editors, index } = await assetPrDelete({
        id,
    })

    const { data: { createAsset } } = await CRUD({
        query: mutations.createAsset,
        variables: {
            input: { id, node_id, createdAt, type, name, owner, content, editors, index },
        },
        authMode,
    })
    console.log("AssetPr converted to Asset:", id)

    return createAsset
}

export const assetPr = {
    create: assetPrCreate,
    read: assetPrRead,
    update: assetPrUpdate,
    delete: assetPrDelete,
    convert: assetPrConvert,
}
