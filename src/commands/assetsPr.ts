import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api"
import { EquivMap } from "@thi.ng/associative"
import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"
import { removeObject, storeObject, CreateFileAssetInput, isFile } from "./storage"
import { CRUD } from "../utils"

const assetPrCreate = async (
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
    }: api.CreateAssetPrInput | CreateFileAssetInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
): Promise<api.Asset | api.AssetPr> => {
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
    const {
        data: { createAssetPr },
    } = await CRUD({
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
): Promise<api.AssetPr> => {
    const {
        data: { getAssetPr },
    } = await CRUD({
        query: queries.getAssetPr,
        variables: { id },
        authMode,
    })

    return getAssetPr
}

/**
 * TODO: if (typeof content !== "string") ||(typeof content !== "number") && type.split("_")[0] === "F" -> store object
 */
const assetPrUpdate = async (
    { id, content, createdAt, editors, name, node_id, owner, type, index }: api.UpdateAssetPrInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
): Promise<api.Asset | api.AssetPr> => {
    const asIs = await assetPrRead({ id })
    if (!asIs) {
        console.log("No AssetPr found with this ID:", id)
        return
    }
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
    // FIXME: check on new or old type?
    if (isFile({ type: type || _t, content: content || _co }) && _co.length) {
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

    const {
        data: { updateAssetPr },
    } = await CRUD({
        query: mutations.updateAssetPr,
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

    return updateAssetPr
}

const assetPrDelete = async (
    { id }: api.DeleteAssetPrInput,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
): Promise<api.AssetPr> => {
    const {
        data: { deleteAssetPr },
    } = await CRUD({
        query: mutations.deleteAssetPr,
        variables: { input: { id } },
        authMode,
    })
    const { type, content } = deleteAssetPr
    const [cat] = type.split("_")
    if (cat === "F" && content.length) {
        const removed = await removeObject(content)
        //console.log("removed S3 Object:\n", { removed, content })
    }
    return deleteAssetPr
}

const assetPrConvert = async (
    { id }: api.GetAssetPrQueryVariables,
    authMode: GRAPHQL_AUTH_MODE = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
): Promise<api.AssetPr> => {
    const { node_id, createdAt, type, name, owner, content, editors, index } = await assetPrDelete({
        id,
    })

    const {
        data: { createAssetPr },
    } = await CRUD({
        query: mutations.createAssetPr,
        variables: {
            input: { id, node_id, createdAt, type, name, owner, content, editors, index },
        },
        authMode,
    })
    console.log("AssetPr converted to AssetPr:", id)

    return createAssetPr
}

export const assetPr = {
    create: assetPrCreate,
    read: assetPrRead,
    update: assetPrUpdate,
    delete: assetPrDelete,
    convert: assetPrConvert,
}
