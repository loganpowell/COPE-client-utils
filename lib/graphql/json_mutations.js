import { __rest } from "tslib";
import { assetFields, nodeFields, edgeNodeFields, edgeFields } from "./json_API";
import { enumerator } from "../utils";
export const createAsset = ({ input, condition, }) => {
    return {
        createAsset: Object.assign({ __args: Object.assign({ input: enumerator(input) }, (condition && { condition: enumerator(condition) })) }, assetFields),
    };
};
export const updateAsset = ({ input, condition, }) => {
    return {
        updateAsset: Object.assign({ __args: Object.assign({ input: enumerator(input) }, (condition && { condition: enumerator(condition) })) }, assetFields),
    };
};
export const deleteAsset = ({ input, condition, }) => ({
    deleteAsset: Object.assign({ __args: Object.assign({ input }, (condition && { condition: enumerator(condition) })) }, assetFields),
});
export const createAssetPr = ({ input, condition, }) => {
    return {
        createAssetPr: Object.assign({ __args: Object.assign({ input: enumerator(input) }, (condition && { condition: enumerator(condition) })) }, assetFields),
    };
};
export const updateAssetPr = ({ input, condition, }) => {
    return {
        updateAssetPr: Object.assign({ __args: Object.assign({ input: enumerator(input) }, (condition && { condition: enumerator(condition) })) }, assetFields),
    };
};
export const deleteAssetPr = ({ input, condition, }) => ({
    deleteAssetPr: Object.assign({ __args: Object.assign({ input }, (condition && { condition: enumerator(condition) })) }, assetFields),
});
export const createNode = ({ input, condition, }) => {
    const { status, type } = input, rest = __rest(input, ["status", "type"]);
    return {
        createNode: Object.assign({ __args: Object.assign({ input: enumerator(input) }, (condition && { condition: enumerator(condition) })) }, nodeFields),
    };
};
export const updateNode = ({ input, condition, }) => {
    const { status, type } = input, rest = __rest(input, ["status", "type"]);
    return {
        updateNode: Object.assign({ __args: Object.assign({ input: enumerator(input) }, (condition && { condition: enumerator(condition) })) }, nodeFields),
    };
};
export const deleteNode = ({ input, condition, }) => ({
    deleteNode: Object.assign({ __args: Object.assign({ input }, (condition && { condition: enumerator(condition) })) }, nodeFields),
});
export const createEdge = ({ input, condition, }) => {
    return {
        createEdge: Object.assign({ __args: Object.assign({ input: enumerator(input) }, (condition && { condition: enumerator(condition) })) }, edgeFields),
    };
};
export const updateEdge = ({ input, condition, }) => {
    return {
        updateEdge: Object.assign({ __args: Object.assign({ input: enumerator(input) }, (condition && { condition: enumerator(condition) })) }, edgeFields),
    };
};
export const deleteEdge = ({ input, condition, }) => ({
    deleteEdge: Object.assign({ __args: Object.assign({ input }, (condition && { condition: enumerator(condition) })) }, edgeFields),
});
export const createEdgeNode = ({ input, condition, }) => ({
    createEdgeNode: Object.assign({ __args: Object.assign({ input }, (condition && { condition: enumerator(condition) })) }, edgeNodeFields),
});
export const updateEdgeNode = ({ input, condition, }) => ({
    updateEdgeNode: Object.assign({ __args: Object.assign({ input }, (condition && { condition: enumerator(condition) })) }, edgeNodeFields),
});
export const deleteEdgeNode = ({ input, condition, }) => ({
    deleteEdgeNode: Object.assign({ __args: Object.assign({ input }, (condition && { condition: enumerator(condition) })) }, edgeNodeFields),
});
