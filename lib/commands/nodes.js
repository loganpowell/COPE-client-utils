import { __awaiter } from "tslib";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import { CRUD } from "../utils";
const nodeCreate = ({ id, status, type, createdAt, owner, updatedAt }) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { createNode } } = yield CRUD({
        query: mutations.createNode,
        variables: {
            input: {
                id,
                status,
                type,
                createdAt,
                owner,
                updatedAt
            }
        }
    });
    return createNode;
});
const nodeRead = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { getNode } } = yield CRUD({
        query: queries.getNode,
        variables: { id }
    });
    return getNode;
});
const nodeUpdate = ({ id, type, status, owner, createdAt, updatedAt }) => __awaiter(void 0, void 0, void 0, function* () {
    const { status: _s, type: _t, createdAt: _c, owner: _o } = yield nodeRead({ id });
    const { data: { updateNode } } = yield CRUD({
        query: mutations.updateNode,
        variables: {
            input: {
                id,
                type: type || _t,
                status: status || _s,
                owner: owner || _o,
                createdAt: createdAt || _c,
                updatedAt
            }
        }
    });
    return updateNode;
});
const nodeDelete = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { deleteNode } } = yield CRUD({
        query: mutations.deleteNode,
        variables: { input: { id } }
    });
    return deleteNode;
});
export const node = {
    create: nodeCreate,
    read: nodeRead,
    update: nodeUpdate,
    delete: nodeDelete
};
