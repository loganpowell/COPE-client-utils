import { __awaiter } from "tslib";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import { CRUD } from "../utils";
const proxyCreate = ({ name, node_id, type, content, createdAt, editors, id, owner }) => __awaiter(void 0, void 0, void 0, function* () {
    const newProxy = yield CRUD({
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
    return newProxy;
});
const proxyRead = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const existingProxy = yield CRUD({
        query: queries.getProxy,
        variables: id
    });
    return existingProxy;
});
const proxyUpdate = ({ id, content, createdAt, editors, name, node_id, owner, type }) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProxy = yield CRUD({
        query: mutations.updateProxy,
        variables: {
            input: {
                id,
                content,
                createdAt,
                editors,
                name,
                node_id,
                owner,
                type
            }
        }
    });
    return updatedProxy;
});
const proxyDelete = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedProxy = yield CRUD({
        query: mutations.deleteProxy,
        variables: id
    });
    return deletedProxy;
});
export const proxy = {
    create: proxyCreate,
    read: proxyRead,
    update: proxyUpdate,
    delete: proxyDelete
};
