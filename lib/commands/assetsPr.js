import { __awaiter } from "tslib";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { EquivMap } from "@thi.ng/associative";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import { CRUD } from "../utils";
const assetPrCreate = ({ name, node_id, type, content, createdAt, editors, id, owner, index }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { createAssetPr } } = yield CRUD({
        query: mutations.createAssetPr,
        variables: {
            input: {
                name,
                node_id,
                type,
                content,
                createdAt,
                editors,
                id,
                owner,
                index,
            },
        },
        authMode,
    });
    return createAssetPr;
});
const assetPrRead = ({ id }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { getAssetPr } } = yield CRUD({
        query: queries.getAssetPr,
        variables: { id },
        authMode,
    });
    return getAssetPr;
});
const assetPrUpdate = ({ id, content, createdAt, editors, name, node_id, owner, type, index }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const asIs = yield assetPrRead({ id });
    const { content: _co, name: _na, createdAt: _cr, editors: _e, type: _t, owner: _o, node_id: _no, index: _i, } = asIs;
    const no_change = new EquivMap([
        [
            {
                content: _co,
                name: _na,
                createdAt: _cr,
                editors: _e,
                type: _t,
                owner: _o,
                node_id: _no,
                index: _i,
            },
            true,
        ],
    ]).get({ content, createdAt, editors, name, node_id, owner, type, index });
    if (no_change)
        return asIs;
    const { data: { updateAssetPr } } = yield CRUD({
        query: mutations.updateAssetPr,
        variables: {
            input: {
                id,
                content: content || _co,
                createdA: createdAt || _cr,
                editors: editors || _e,
                name: name || _na,
                node_id: node_id || _no,
                owner: owner || _o,
                type: type || _t,
                index: index === 0 ? index : index || _i,
            },
        },
        authMode,
    });
    return updateAssetPr;
});
const assetPrDelete = ({ id }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { deleteAssetPr } } = yield CRUD({
        query: mutations.deleteAssetPr,
        variables: { input: { id } },
        authMode,
    });
    return deleteAssetPr;
});
const assetPrConvert = ({ id }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const { node_id, createdAt, type, name, owner, content, editors, index } = yield assetPrDelete({
        id,
    });
    const { data: { createAsset } } = yield CRUD({
        query: mutations.createAsset,
        variables: {
            input: { id, node_id, createdAt, type, name, owner, content, editors, index },
        },
        authMode,
    });
    console.log("AssetPr converted to Asset");
    return createAsset;
});
export const assetPr = {
    create: assetPrCreate,
    read: assetPrRead,
    update: assetPrUpdate,
    delete: assetPrDelete,
    convert: assetPrConvert,
};
