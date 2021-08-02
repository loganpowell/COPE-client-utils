import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api"
import { EquivMap } from "@thi.ng/associative"
import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"
import { removeObject, storeObject, CreateFileAssetInput, isFile } from "./storage"
import { CRUD } from "../utils"

const assetCreate = async (
    {
        name,
        node_id,
        type,
        content,
        createdAt,
        editors,
        id,
        owner,
        index,
    }: api.CreateAssetInput | CreateFileAssetInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    if (isFile({ type, content })) {
        // file upload if content isn't empty or a string
        return await storeObject({
            content,
            name,
            node_id,
            type,
            createdAt,
            editors,
            id,
            index,
            owner,
        })
    }
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

/**
 * TODO: if (typeof content !== "string") ||(typeof content !== "number") && type.split("_")[0] === "F" -> store object
 */
const assetUpdate = async (
    { id, content, createdAt, editors, name, node_id, owner, type, index }: api.UpdateAssetInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) => {
    const asIs = await assetRead({ id })
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
    if (isFile({ type, content }) && _co.length) {
        // if _co.length -> new File replacing old URL
        await removeObject(_co)
        return await storeObject({
            id,
            content,
            createdAt: createdAt || _cr,
            editors: editors || _e,
            name: name || _na,
            node_id: node_id || _no,
            owner: owner || _o,
            type: type || _t,
            index: index === 0 ? 0 : index || _i,
        })
        // remove old object
        // create new Object
    }

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
                index: index === 0 ? index : index || _i,
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
    const { type, content } = deleteAsset
    const [ cat ] = type.split("_")
    if (cat === "F" && content.length) {
        const removed = await removeObject(content)
        //console.log("removed S3 Object:\n", { removed, content })
    }
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
    console.log("Asset converted to AssetPr:", id)

    return createAssetPr
}

export const asset = {
    create: assetCreate,
    read: assetRead,
    update: assetUpdate,
    delete: assetDelete,
    convert: assetConvert,
}
