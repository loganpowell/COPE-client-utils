import { __awaiter } from "tslib"
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api"
import { EquivMap } from "@thi.ng/associative"
import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import { removeObject, storeObject, isFile } from "./storage"
import { CRUD } from "../utils"
const assetCreate = (
    { name, nodeID, type, content, createdAt, editors, id, owner, index },
    authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) =>
    __awaiter(void 0, void 0, void 0, function* () {
        if (isFile({ type, content })) {
            // file upload if content isn't empty or a string
            return yield storeObject({
                content,
                name,
                nodeID,
                type,
                createdAt,
                editors,
                id,
                index,
                owner,
            })
        }
        const {
            data: { createAsset },
        } = yield CRUD({
            query: mutations.createAsset,
            variables: {
                input: {
                    name,
                    nodeID,
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
    })
const assetRead = ({ id }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) =>
    __awaiter(void 0, void 0, void 0, function* () {
        const {
            data: { getAsset },
        } = yield CRUD({
            query: queries.getAsset,
            variables: { id },
            authMode,
        })
        return getAsset
    })
/**
 * TODO: if (typeof content !== "string") ||(typeof content !== "number") && type.split("_")[0] === "F" -> store object
 */
const assetUpdate = (
    { id, content, createdAt, editors, name, nodeID, owner, type, index },
    authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
) =>
    __awaiter(void 0, void 0, void 0, function* () {
        const asIs = yield assetRead({ id })
        if (!asIs) {
            console.log("No Asset found with this ID:", id)
            return
        }
        const {
            content: _co,
            name: _na,
            createdAt: _cr,
            editors: _e,
            type: _t,
            owner: _o,
            nodeID: _no,
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
                    nodeID: _no,
                    index: _i,
                },
                true,
            ],
        ]).get({ content, createdAt, editors, name, nodeID, owner, type, index })
        if (no_change) return asIs
        // FIXME: check on new or old type?
        if (isFile({ type: type || _t, content: content || _co }) && _co.length) {
            // if _co.length -> new File replacing old URL
            yield removeObject(_co)
            return yield storeObject({
                id,
                content,
                createdAt: createdAt || _cr,
                editors: editors || _e,
                name: name || _na,
                nodeID: nodeID || _no,
                owner: owner || _o,
                type: type || _t,
                index: index === 0 ? 0 : index || _i,
            })
            // remove old object
            // create new Object
        }
        const {
            data: { updateAsset },
        } = yield CRUD({
            query: mutations.updateAsset,
            variables: {
                input: {
                    id,
                    content: content || _co,
                    createdAt: createdAt || _cr,
                    editors: editors || _e,
                    name: name || _na,
                    nodeID: nodeID || _no,
                    owner: owner || _o,
                    type: type || _t,
                    index: index === 0 ? index : index || _i,
                },
            },
            authMode,
        })
        return updateAsset
    })
const assetDelete = ({ id }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) =>
    __awaiter(void 0, void 0, void 0, function* () {
        const {
            data: { deleteAsset },
        } = yield CRUD({
            query: mutations.deleteAsset,
            variables: { input: { id } },
            authMode,
        })
        const { type, content } = deleteAsset
        const [cat] = type.split("_")
        if (cat === "F" && content.length) {
            const removed = yield removeObject(content)
            //console.log("removed S3 Object:\n", { removed, content })
        }
        return deleteAsset
    })
const assetConvert = ({ id }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) =>
    __awaiter(void 0, void 0, void 0, function* () {
        const { nodeID, createdAt, type, name, owner, content, editors, index } = yield CRUD({
            query: mutations.deleteAsset,
            variables: {
                input: {
                    id,
                },
            },
            authMode,
        })
        const {
            data: { createAssetPr },
        } = yield CRUD({
            query: mutations.createAssetPr,
            variables: {
                input: { id, nodeID, createdAt, type, name, owner, content, editors, index },
            },
            authMode,
        })
        console.log("Asset converted to AssetPr:", id)
        return createAssetPr
    })
export const asset = {
    create: assetCreate,
    read: assetRead,
    update: assetUpdate,
    delete: assetDelete,
    convert: assetConvert,
}
