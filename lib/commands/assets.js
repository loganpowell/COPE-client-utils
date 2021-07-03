import { __awaiter } from "tslib";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import { CRUD } from "../utils";
export const assetCreate = ({ name, node_id, type, content, createdAt, editors, id, owner }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield CRUD({
        query: mutations.createAsset,
        variables: {
            input: {
                name,
                node_id,
                type,
                content,
                createdAt,
                editors,
                id,
                owner
            }
        }
    });
});
export const assetRead = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield CRUD({
        query: queries.getAsset,
        variables: id
    });
});
export const assetUpdate = ({ id, content, createdAt, editors, name, node_id, owner, type }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield CRUD({
        query: mutations.updateAsset,
        variables: {
            input: {
                id,
                content,
                createdAt,
                editors,
                name,
                node_id,
                owner,
                type
            }
        }
    });
});
export const assetDelete = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    return yield CRUD({
        query: mutations.deleteAsset,
        variables: id
    });
});
