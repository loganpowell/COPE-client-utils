import { __awaiter } from "tslib";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import { CRUD } from "../utils";
const assetCreate = ({ name, node_id, type, content, createdAt, editors, id, owner }, authMode) => __awaiter(void 0, void 0, void 0, function* () {
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
            },
        },
        authMode,
    });
    return createAsset;
});
const assetRead = ({ id }, authMode) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { getAsset } } = yield CRUD({
        query: queries.getAsset,
        variables: { id },
        authMode,
    });
    return getAsset;
});
const assetUpdate = ({ id, content, createdAt, editors, name, node_id, owner, type }, authMode) => __awaiter(void 0, void 0, void 0, function* () {
    const { content: _co, name: _na, createdAt: _cr, editors: _e, type: _t, owner: _o, node_id: _no, } = yield assetRead({ id });
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
            },
        },
        authMode,
    });
    return updateAsset;
});
const assetDelete = ({ id }, authMode) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { deleteAsset } } = yield CRUD({
        query: mutations.deleteAsset,
        variables: { input: { id } },
        authMode,
    });
    return deleteAsset;
});
const assetConvert = ({ id }, authMode) => __awaiter(void 0, void 0, void 0, function* () {
    const { node_id, createdAt, type, name, owner, content, editors } = yield assetDelete({ id });
    const { data: { createAssetPr } } = yield CRUD({
        query: mutations.createAssetPr,
        variables: {
            input: { id, node_id, createdAt, type, name, owner, content, editors },
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
