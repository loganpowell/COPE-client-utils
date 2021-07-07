import { __awaiter } from "tslib";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import { CRUD } from "../utils";
const proxyCreate = ({ name, node_id, type, content, createdAt, editors, id, owner }) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { createProxy } } = yield CRUD({
        query: mutations.createProxy,
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
    return createProxy;
});
const proxyRead = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { getProxy } } = yield CRUD({
        query: queries.getProxy,
        variables: { id }
    });
    return getProxy;
});
const proxyUpdate = ({ id, content, createdAt, editors, name, node_id, owner, type }) => __awaiter(void 0, void 0, void 0, function* () {
    const { content: _co, name: _na, createdAt: _cr, editors: _e, type: _t, owner: _o, node_id: _no } = yield proxyRead({ id });
    const { data: { updateProxy } } = yield CRUD({
        query: mutations.updateProxy,
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
    return updateProxy;
});
const proxyDelete = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { deleteProxy } } = yield CRUD({
        query: mutations.deleteProxy,
        variables: { input: { id } }
    });
    return deleteProxy;
});
const proxyConvert = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const { node_id, createdAt, type, name, owner, content, editors } = yield proxyDelete({ id });
    const { data: { createAsset } } = yield CRUD({
        query: mutations.createAsset,
        variables: {
            input: { id, node_id, createdAt, type, name, owner, content, editors }
        }
    });
    console.log("Proxy converted to Asset");
    return createAsset;
});
export const proxy = {
    create: proxyCreate,
    read: proxyRead,
    update: proxyUpdate,
    delete: proxyDelete,
    convert: proxyConvert
};
