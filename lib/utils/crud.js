import { __awaiter } from "tslib";
import { API, GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
export const CRUD = ({ query, variables }) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield API.graphql({
        query,
        variables,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    })
        .catch(e => console.warn("GraphQL CRUD Error:", JSON.stringify(e, null, 4)));
    return res;
});
export const read = ({ query, variables }) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield API.graphql({
        query,
        variables
    })
        .catch(e => console.warn("GraphQL Read Error:", JSON.stringify(e, null, 4)));
});
