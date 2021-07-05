import { __awaiter } from "tslib";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import { CRUD } from "../utils";
const assetCreate = ({ name, node_id, type, content, createdAt, editors, id, owner }) => __awaiter(void 0, void 0, void 0, function* () {
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
                owner
            }
        }
    });
    return createAsset;
});
const assetRead = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { getAsset } } = yield CRUD({
        query: queries.getAsset,
        variables: { id }
    });
    return getAsset;
});
const assetUpdate = ({ id, content, createdAt, editors, name, node_id, owner, type }) => __awaiter(void 0, void 0, void 0, function* () {
    const { content: _co, name: _na, createdAt: _cr, editors: _e, type: _t, owner: _o, node_id: _ni } = yield assetRead({ id });
    const { data: { updateAsset } } = yield CRUD({
        query: mutations.updateAsset,
        variables: {
            input: {
                id,
                content: content || _co,
                createdA: createdAt || _cr,
                editors: editors || _e,
                name: name || _na,
                node_id: node_id || _ni,
                owner: owner || _o,
                type: type || _t
            }
        }
    });
    return updateAsset;
});
const assetDelete = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { deleteAsset } } = yield CRUD({
        query: mutations.deleteAsset,
        variables: { input: { id } }
    });
    return deleteAsset;
});
const assetConvert = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const { node_id, createdAt, type, name, owner, content, editors } = yield assetDelete({ id });
    const { data: { createProxy } } = yield CRUD({
        query: mutations.createProxy,
        variables: {
            input: { id, node_id, createdAt, type, name, owner, content, editors }
        }
    });
    console.log("Asset converted to Proxy");
    return createProxy;
});
export const asset = {
    create: assetCreate,
    read: assetRead,
    update: assetUpdate,
    delete: assetDelete,
    convert: assetConvert
};
