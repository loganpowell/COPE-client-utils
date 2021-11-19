import { __rest } from "tslib";
import { EnumType } from "json-to-graphql-query";
import { assetFields, nodeFields, edgeNodeFields, edgeFields } from "./json_API";
export const createAsset = ({ input, condition, }) => {
    const { type } = input, rest = __rest(input, ["type"]);
    return {
        createAsset: Object.assign({ __args: Object.assign({ input: Object.assign({ type: new EnumType(type) }, rest) }, (condition && { condition })) }, assetFields),
    };
};
export const updateAsset = ({ input, condition, }) => {
    const { type } = input, rest = __rest(input, ["type"]);
    return {
        updateAsset: Object.assign({ __args: Object.assign({ input: Object.assign(Object.assign({}, (type && { type: new EnumType(type) })), rest) }, (condition && { condition })) }, assetFields),
    };
};
export const deleteAsset = ({ input, condition, }) => ({
    deleteAsset: Object.assign({ __args: Object.assign({ input }, (condition && { condition })) }, assetFields),
});
export const createAssetPr = ({ input, condition, }) => {
    const { type } = input, rest = __rest(input, ["type"]);
    return {
        createAssetPr: Object.assign({ __args: Object.assign({ input: Object.assign({ type: new EnumType(type) }, rest) }, (condition && { condition })) }, assetFields),
    };
};
export const updateAssetPr = ({ input, condition, }) => {
    const { type } = input, rest = __rest(input, ["type"]);
    return {
        updateAssetPr: Object.assign({ __args: Object.assign({ input: Object.assign(Object.assign({}, (type && { type: new EnumType(type) })), rest) }, (condition && { condition })) }, assetFields),
    };
};
export const deleteAssetPr = ({ input, condition, }) => ({
    deleteAssetPr: Object.assign({ __args: Object.assign({ input }, (condition && { condition })) }, assetFields),
});
export const createNode = ({ input, condition, }) => {
    const { status, type } = input, rest = __rest(input, ["status", "type"]);
    return {
        createNode: Object.assign({ __args: Object.assign({ input: Object.assign(Object.assign(Object.assign({}, (status && { status: new EnumType(status) })), (type && { type: new EnumType(type) })), rest) }, (condition && { condition })) }, nodeFields),
    };
};
export const updateNode = ({ input, condition, }) => {
    const { status, type } = input, rest = __rest(input, ["status", "type"]);
    return {
        updateNode: Object.assign({ __args: Object.assign({ input: Object.assign(Object.assign(Object.assign({}, (status && { status: new EnumType(status) })), (type && { type: new EnumType(type) })), rest) }, (condition && { condition })) }, nodeFields),
    };
};
export const deleteNode = ({ input, condition, }) => ({
    deleteNode: Object.assign({ __args: Object.assign({ input }, (condition && { condition })) }, nodeFields),
});
export const createEdge = ({ input, condition, }) => {
    const { type } = input, rest = __rest(input, ["type"]);
    return {
        createEdge: Object.assign({ __args: Object.assign({ input: Object.assign(Object.assign({}, (type && { type: new EnumType(type) })), rest) }, (condition && { condition })) }, edgeFields),
    };
};
export const updateEdge = ({ input, condition, }) => {
    const { type } = input, rest = __rest(input, ["type"]);
    return {
        updateEdge: Object.assign({ __args: Object.assign({ input: Object.assign(Object.assign({}, (type && { type: new EnumType(type) })), rest) }, (condition && { condition })) }, edgeFields),
    };
};
export const deleteEdge = ({ input, condition, }) => ({
    deleteEdge: Object.assign({ __args: Object.assign({ input }, (condition && { condition })) }, edgeFields),
});
export const createEdgeNode = ({ input, condition, }) => ({
    createEdgeNode: Object.assign({ __args: Object.assign({ input }, (condition && { condition })) }, edgeNodeFields),
});
export const updateEdgeNode = ({ input, condition, }) => ({
    updateEdgeNode: Object.assign({ __args: Object.assign({ input }, (condition && { condition })) }, edgeNodeFields),
});
export const deleteEdgeNode = ({ input, condition, }) => ({
    deleteEdgeNode: Object.assign({ __args: Object.assign({ input }, (condition && { condition })) }, edgeNodeFields),
});
