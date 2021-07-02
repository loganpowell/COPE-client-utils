import { __awaiter } from "tslib";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import { CRUD } from "../utils";
export const nodeCreate = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const newNode = yield CRUD({
        query: mutations.createNode,
        variables: {
            input: args
        }
    });
    return newNode;
});
export const nodeRead = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const existingNode = yield CRUD({
        query: queries.getNode,
        variables: {
            input: args
        }
    });
    return existingNode;
});
export const nodeUpdate = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedNode = yield CRUD({
        query: mutations.updateNode,
        variables: {
            input: args
        }
    });
    return updatedNode;
});
export const nodeDelete = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedNode = yield CRUD({
        query: mutations.deleteNode,
        variables: {
            input: args
        }
    });
    return deletedNode;
});
