import { __awaiter } from "tslib";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import { CRUD } from "../utils";
const nodeCreate = ({ id, status, type, createdAt, owner, updatedAt }) => __awaiter(void 0, void 0, void 0, function* () {
    const newNode = yield CRUD({
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
    return newNode;
});
const nodeRead = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const existingNode = yield CRUD({
        query: queries.getNode,
        variables: id
    });
    return existingNode;
});
const nodeUpdate = ({ id, type, status, owner, createdAt, updatedAt }) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedNode = yield CRUD({
        query: mutations.updateNode,
        variables: {
            input: {
                id,
                type,
                status,
                owner,
                createdAt,
                updatedAt
            }
        }
    });
    return updatedNode;
});
const nodeDelete = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedNode = yield CRUD({
        query: mutations.deleteNode,
        variables: id
    });
    return deletedNode;
});
export const node = {
    create: nodeCreate,
    read: nodeRead,
    update: nodeUpdate,
    delete: nodeDelete
};
