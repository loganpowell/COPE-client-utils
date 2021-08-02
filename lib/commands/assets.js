import { __awaiter } from "tslib";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { EquivMap } from "@thi.ng/associative";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import { removeObject, storeObject, isFile } from "./storage";
import { CRUD } from "../utils";
const assetCreate = ({ name, node_id, type, content, createdAt, editors, id, owner, index, }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    if (isFile({ type, content })) {
        return yield storeObject({
            content,
            name,
            node_id,
            type,
            createdAt,
            editors,
            id,
            index,
            owner,
        });
    }
    const { data: { createAsset } } = yield CRUD({
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
    });
    return createAsset;
});
const assetRead = ({ id }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { getAsset } } = yield CRUD({
        query: queries.getAsset,
        variables: { id },
        authMode,
    });
    return getAsset;
});
const assetUpdate = ({ id, content, createdAt, editors, name, node_id, owner, type, index }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const asIs = yield assetRead({ id });
    const { content: _co, name: _na, createdAt: _cr, editors: _e, type: _t, owner: _o, node_id: _no, index: _i, } = asIs;
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
    ]).get({ content, createdAt, editors, name, node_id, owner, type, index });
    if (no_change)
        return asIs;
    if (isFile({ type, content }) && _co.length) {
        yield removeObject(_co);
        return yield storeObject({
            id,
            content,
            createdAt: createdAt || _cr,
            editors: editors || _e,
            name: name || _na,
            node_id: node_id || _no,
            owner: owner || _o,
            type: type || _t,
            index: index === 0 ? 0 : index || _i,
        });
    }
    const { data: { updateAsset } } = yield CRUD({
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
    });
    return updateAsset;
});
const assetDelete = ({ id }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { deleteAsset } } = yield CRUD({
        query: mutations.deleteAsset,
        variables: { input: { id } },
        authMode,
    });
    const { type, content } = deleteAsset;
    const [cat] = type.split("_");
    if (cat === "F" && content.length) {
        const removed = yield removeObject(content);
    }
    return deleteAsset;
});
const assetConvert = ({ id }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const { node_id, createdAt, type, name, owner, content, editors, index } = yield assetDelete({
        id,
    });
    const { data: { createAssetPr } } = yield CRUD({
        query: mutations.createAssetPr,
        variables: {
            input: { id, node_id, createdAt, type, name, owner, content, editors, index },
        },
        authMode,
    });
    console.log("Asset converted to AssetPr");
    return createAssetPr;
});
export const asset = {
    create: assetCreate,
    read: assetRead,
    update: assetUpdate,
    delete: assetDelete,
    convert: assetConvert,
};
