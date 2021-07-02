import { __awaiter } from "tslib";
import * as mutations from "../graphql/mutations";
import { CRUD } from "../utils";
export const createNode = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const newNode = yield CRUD({
        query: mutations.createNode,
        variables: {
            input: args
        }
    });
    return newNode;
});
