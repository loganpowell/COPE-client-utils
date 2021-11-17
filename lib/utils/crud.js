import { __awaiter } from "tslib";
import { API, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
export const CRUD = ({ query, variables, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS, }) => __awaiter(void 0, void 0, void 0, function* () {
    let res;
    try {
        res = yield API.graphql({
            query,
            variables,
            authMode,
        });
    }
    catch (e) {
        console.warn("Graphql Error for query: \n", query);
        console.warn("... called with these variables: \n", JSON.stringify(variables, null, 4));
        console.warn(JSON.stringify(e, null, 4));
    }
    return res;
});
