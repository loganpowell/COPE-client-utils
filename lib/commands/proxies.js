import { __awaiter } from "tslib";
import { CRUD } from "../utils";
import * as mutations from "../graphql/mutations";
export const proxyCreate = (args) => __awaiter(void 0, void 0, void 0, function* () {
    const newProxy = yield CRUD({
        query: mutations.createProxy,
        variables: {
            input: args
        }
    });
});
