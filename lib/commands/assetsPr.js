import { __awaiter } from "tslib";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { EquivMap } from "@thi.ng/associative";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import { removeObject, storeObject, isFile } from "./storage";
import { CRUD } from "../utils";
const assetPrCreate = ({ name, node_id, type, content, createdAt, editors, id, owner, index, }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
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
    const { data: { createAssetPr }, } = yield CRUD({
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
    });
    return createAssetPr;
});
const assetPrRead = ({ id }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { getAssetPr }, } = yield CRUD({
        query: queries.getAssetPr,
        variables: { id },
        authMode,
    });
    return getAssetPr;
});
const assetPrUpdate = ({ id, content, createdAt, editors, name, node_id, owner, type, index }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const asIs = yield assetPrRead({ id });
    if (!asIs) {
        console.log("No AssetPr found with this ID:", id);
        return;
    }
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
    if (isFile({ type: type || _t, content: content || _co }) && _co.length) {
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
    const { data: { updateAssetPr }, } = yield CRUD({
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
    });
    return updateAssetPr;
});
const assetPrDelete = ({ id }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { deleteAssetPr }, } = yield CRUD({
        query: mutations.deleteAssetPr,
        variables: { input: { id } },
        authMode,
    });
    const { type, content } = deleteAssetPr;
    const [cat] = type.split("_");
    if (cat === "F" && content.length) {
        const removed = yield removeObject(content);
    }
    return deleteAssetPr;
});
const assetPrConvert = ({ id }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const { node_id, createdAt, type, name, owner, content, editors, index } = yield CRUD({
        query: mutations.deleteAssetPr,
        variables: {
            input: {
                id,
            },
        },
        authMode,
    });
    const { data: { createAsset }, } = yield CRUD({
        query: mutations.createAsset,
        variables: {
            input: { id, node_id, createdAt, type, name, owner, content, editors, index },
        },
        authMode,
    });
    console.log("Asset converted to AssetPr:", id);
    return createAsset;
});
export const assetPr = {
    create: assetPrCreate,
    read: assetPrRead,
    update: assetPrUpdate,
    delete: assetPrDelete,
    convert: assetPrConvert,
};
