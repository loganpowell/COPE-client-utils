import { __awaiter } from "tslib";
import { Auth } from "@aws-amplify/auth";
import { Amplify } from "@aws-amplify/core";
import { defAtom } from "@thi.ng/atom";
export const $global$ = defAtom({ config: {} });
export const configureWith = aws_exports => {
    const new_config = Object.assign(Object.assign({}, aws_exports), { 
        // fix for ownerField resolution provided by:
        // https://github.com/aws-amplify/amplify-cli/issues/3794#issuecomment-606757449
        graphql_headers: () => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const token = (yield Auth.currentSession()).getIdToken().getJwtToken();
                return { Authorization: token };
            }
            catch (e) {
                console.error(e);
                return {};
            }
        }) });
    Amplify.configure(new_config);
    $global$.resetIn(["config"], new_config);
};
