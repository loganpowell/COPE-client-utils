import { __awaiter } from "tslib";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import { CRUD } from "../utils";
export const createProxy = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const newProxy = yield CRUD({
        query: mutations.createProxy,
        variables: {
            input: args
        }
    });
});
export const proxyRead = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const existingProxy = yield CRUD({
        query: queries.getProxy,
        variables: {
            input: args
        }
    });
    return existingProxy;
});
export const proxyUpdate = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedProxy = yield CRUD({
        query: mutations.updateProxy,
        variables: {
            input: args
        }
    });
    return updatedProxy;
});
export const proxyDelete = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedProxy = yield CRUD({
        query: mutations.deleteProxy,
        variables: {
            input: args
        }
    });
    return deletedProxy;
});
