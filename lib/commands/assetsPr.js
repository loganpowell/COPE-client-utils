import { __awaiter } from "tslib";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import { CRUD } from "../utils";
const assetPrCreate = ({ name, node_id, type, content, createdAt, editors, id, owner }) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { createAssetPr } } = yield CRUD({
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
    });
    return createAssetPr;
});
const assetPrRead = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { getAssetPr } } = yield CRUD({
        query: queries.getAssetPr,
        variables: { id }
    });
    return getAssetPr;
});
const assetPrUpdate = ({ id, content, createdAt, editors, name, node_id, owner, type }) => __awaiter(void 0, void 0, void 0, function* () {
    const { content: _co, name: _na, createdAt: _cr, editors: _e, type: _t, owner: _o, node_id: _no } = yield assetPrRead({ id });
    const { data: { updateAssetPr } } = yield CRUD({
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
    });
    return updateAssetPr;
});
const assetPrDelete = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { deleteAssetPr } } = yield CRUD({
        query: mutations.deleteAssetPr,
        variables: { input: { id } }
    });
    return deleteAssetPr;
});
const assetPrConvert = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const { node_id, createdAt, type, name, owner, content, editors } = yield assetPrDelete({ id });
    const { data: { createAsset } } = yield CRUD({
        query: mutations.createAsset,
        variables: {
            input: { id, node_id, createdAt, type, name, owner, content, editors }
        }
    });
    console.log("AssetPr converted to Asset");
    return createAsset;
});
export const assetPr = {
    create: assetPrCreate,
    read: assetPrRead,
    update: assetPrUpdate,
    delete: assetPrDelete,
    convert: assetPrConvert
};
