import { __awaiter } from "tslib";
import { Auth } from "@aws-amplify/auth";
import { Amplify } from "@aws-amplify/core";
import config from "../aws-exports";
export const init = Amplify.configure(Object.assign(Object.assign({}, config), { graphql_headers: () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const token = (yield Auth.currentSession()).getIdToken().getJwtToken();
            return { Authorization: token };
        }
        catch (e) {
            console.error(e);
            return {};
        }
    }) }));
