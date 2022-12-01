import { assetFields, nodeFields, edgeNodeFields, edgeFields } from "./json_API";
import { enumerator } from "../utils";
//
//       e                                d8
//      d8b      d88~\  d88~\  e88~~8e  _d88__
//     /Y88b    C888   C888   d888  88b  888
//    /  Y88b    Y88b   Y88b  8888__888  888
//   /____Y88b    888D   888D Y888    ,  888
//  /      Y88b \_88P  \_88P   "88___/   "88_/
//
//
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
//
//       e                                d8   888~-_
//      d8b      d88~\  d88~\  e88~~8e  _d88__ 888   \  888-~\
//     /Y88b    C888   C888   d888  88b  888   888    | 888
//    /  Y88b    Y88b   Y88b  8888__888  888   888   /  888
//   /____Y88b    888D   888D Y888    ,  888   888_-~   888
//  /      Y88b \_88P  \_88P   "88___/   "88_/ 888      888
//
//
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
//
//  888b    |                888
//  |Y88b   |  e88~-_   e88~\888  e88~~8e
//  | Y88b  | d888   i d888  888 d888  88b
//  |  Y88b | 8888   | 8888  888 8888__888
//  |   Y88b| Y888   ' Y888  888 Y888    ,
//  |    Y888  "88_-~   "88_/888  "88___/
//
//
export const createNode = ({ input, condition, }) => ({
    createNode: Object.assign({ __args: Object.assign({ input: enumerator(input) }, (condition && { condition: enumerator(condition) })) }, nodeFields),
});
export const updateNode = ({ input, condition, }) => ({
    updateNode: Object.assign({ __args: Object.assign({ input: enumerator(input) }, (condition && { condition: enumerator(condition) })) }, nodeFields),
});
export const deleteNode = ({ input, condition, }) => ({
    deleteNode: Object.assign({ __args: Object.assign({ input }, (condition && { condition: enumerator(condition) })) }, nodeFields),
});
//
//                  888       /
//   e88~~8e   e88~\888 e88~88e  e88~~8e
//  d888  88b d888  888 888 888 d888  88b
//  8888__888 8888  888 "88_88" 8888__888
//  Y888    , Y888  888  /      Y888    ,
//   "88___/   "88_/888 Cb       "88___/
//                       Y8""8D
//
export const createEdge = ({ input, condition, }) => ({
    createEdge: Object.assign({ __args: Object.assign({ input: enumerator(input) }, (condition && { condition: enumerator(condition) })) }, edgeFields),
});
export const updateEdge = ({ input, condition, }) => ({
    updateEdge: Object.assign({ __args: Object.assign({ input: enumerator(input) }, (condition && { condition: enumerator(condition) })) }, edgeFields),
});
export const deleteEdge = ({ input, condition, }) => ({
    deleteEdge: Object.assign({ __args: Object.assign({ input }, (condition && { condition: enumerator(condition) })) }, edgeFields),
});
//
//                  888       /           888b    |                888
//   e88~~8e   e88~\888 e88~88e  e88~~8e  |Y88b   |  e88~-_   e88~\888  e88~~8e
//  d888  88b d888  888 888 888 d888  88b | Y88b  | d888   i d888  888 d888  88b
//  8888__888 8888  888 "88_88" 8888__888 |  Y88b | 8888   | 8888  888 8888__888
//  Y888    , Y888  888  /      Y888    , |   Y88b| Y888   ' Y888  888 Y888    ,
//   "88___/   "88_/888 Cb       "88___/  |    Y888  "88_-~   "88_/888  "88___/
//                       Y8""8D
//
export const createEdgeNode = ({ input, condition, }) => ({
    createEdgeNode: Object.assign({ __args: Object.assign({ input }, (condition && { condition: enumerator(condition) })) }, edgeNodeFields),
});
export const updateEdgeNode = ({ input, condition, }) => ({
    updateEdgeNode: Object.assign({ __args: Object.assign({ input }, (condition && { condition: enumerator(condition) })) }, edgeNodeFields),
});
export const deleteEdgeNode = ({ input, condition, }) => ({
    deleteEdgeNode: Object.assign({ __args: Object.assign({ input }, (condition && { condition: enumerator(condition) })) }, edgeNodeFields),
});
