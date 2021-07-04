import { __awaiter } from "tslib";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import { CRUD } from "../utils";
const assetCreate = ({ name, node_id, type, content, createdAt, editors, id, owner }) => __awaiter(void 0, void 0, void 0, function* () {
    const newAsset = yield CRUD({
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
    return newAsset;
});
const assetRead = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const existingAsset = yield CRUD({
        query: queries.getAsset,
        variables: id
    });
    return existingAsset;
});
const assetUpdate = ({ id, content, createdAt, editors, name, node_id, owner, type }) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedAsset = yield CRUD({
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
    return updatedAsset;
});
const assetDelete = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedAsset = yield CRUD({
        query: mutations.deleteAsset,
        variables: id
    });
    return deletedAsset;
});
export const asset = {
    create: assetCreate,
    read: assetRead,
    update: assetUpdate,
    delete: assetDelete
};
