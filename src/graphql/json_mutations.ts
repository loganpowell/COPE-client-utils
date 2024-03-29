import { EnumType } from "json-to-graphql-query"
import * as API from "./API"
import { assetFields, nodeFields, edgeNodeFields, edgeFields } from "./json_API"
import { enumerator } from "../utils"
//
//       e                                d8
//      d8b      d88~\  d88~\  e88~~8e  _d88__
//     /Y88b    C888   C888   d888  88b  888
//    /  Y88b    Y88b   Y88b  8888__888  888
//   /____Y88b    888D   888D Y888    ,  888
//  /      Y88b \_88P  \_88P   "88___/   "88_/
//
//

export const createAsset = ({
    input,
    condition,
}: {
    input: API.CreateAssetInput
    condition?: API.ModelAssetConditionInput
}) => {
    return {
        createAsset: {
            __args: {
                input: enumerator(input),
                ...(condition && { condition: enumerator(condition) }),
            },
            ...assetFields,
        },
    }
}

export const updateAsset = ({
    input,
    condition,
}: {
    input: API.UpdateAssetInput
    condition?: API.ModelAssetConditionInput
}) => {
    return {
        updateAsset: {
            __args: {
                input: enumerator(input),
                ...(condition && { condition: enumerator(condition) }),
            },
            ...assetFields,
        },
    }
}

export const deleteAsset = ({
    input,
    condition,
}: {
    input: API.DeleteAssetInput
    condition?: API.ModelAssetConditionInput
}) => ({
    deleteAsset: {
        __args: {
            input,
            ...(condition && { condition: enumerator(condition) }),
        },
        ...assetFields,
    },
})

//
//       e                                d8   888~-_
//      d8b      d88~\  d88~\  e88~~8e  _d88__ 888   \  888-~\
//     /Y88b    C888   C888   d888  88b  888   888    | 888
//    /  Y88b    Y88b   Y88b  8888__888  888   888   /  888
//   /____Y88b    888D   888D Y888    ,  888   888_-~   888
//  /      Y88b \_88P  \_88P   "88___/   "88_/ 888      888
//
//

export const createAssetPr = ({
    input,
    condition,
}: {
    input: API.CreateAssetPrInput
    condition?: API.ModelAssetPrConditionInput
}) => {
    return {
        createAssetPr: {
            __args: {
                input: enumerator(input),
                ...(condition && { condition: enumerator(condition) }),
            },
            ...assetFields,
        },
    }
}

export const updateAssetPr = ({
    input,
    condition,
}: {
    input: API.UpdateAssetPrInput
    condition?: API.ModelAssetPrConditionInput
}) => {
    return {
        updateAssetPr: {
            __args: {
                input: enumerator(input),
                ...(condition && { condition: enumerator(condition) }),
            },
            ...assetFields,
        },
    }
}

export const deleteAssetPr = ({
    input,
    condition,
}: {
    input: API.DeleteAssetPrInput
    condition?: API.ModelAssetPrConditionInput
}) => ({
    deleteAssetPr: {
        __args: {
            input,
            ...(condition && { condition: enumerator(condition) }),
        },
        ...assetFields,
    },
})
//
//  888b    |                888
//  |Y88b   |  e88~-_   e88~\888  e88~~8e
//  | Y88b  | d888   i d888  888 d888  88b
//  |  Y88b | 8888   | 8888  888 8888__888
//  |   Y88b| Y888   ' Y888  888 Y888    ,
//  |    Y888  "88_-~   "88_/888  "88___/
//
//

export const createNode = ({
    input,
    condition,
}: {
    input: API.CreateNodeInput
    condition?: API.ModelNodeConditionInput
}) => ({
    createNode: {
        __args: {
            input: enumerator(input),
            ...(condition && { condition: enumerator(condition) }),
        },
        ...nodeFields,
        //edges: {
        //    items: edgeNodeFields,
        //    nextToken: true,
        //},
    },
})

export const updateNode = ({
    input,
    condition,
}: {
    input: API.UpdateNodeInput
    condition?: API.ModelNodeConditionInput
}) => ({
    updateNode: {
        __args: {
            input: enumerator(input),
            ...(condition && { condition: enumerator(condition) }),
        },
        ...nodeFields,
        //edges: {
        //    items: edgeNodeFields,
        //    nextToken: true,
        //},
    },
})

export const deleteNode = ({
    input,
    condition,
}: {
    input: API.DeleteNodeInput
    condition?: API.ModelNodeConditionInput
}) => ({
    deleteNode: {
        __args: {
            input,
            ...(condition && { condition: enumerator(condition) }),
        },
        ...nodeFields,
        //edges: {
        //    items: edgeNodeFields,
        //    nextToken: true,
        //},
    },
})

//
//                  888       /
//   e88~~8e   e88~\888 e88~88e  e88~~8e
//  d888  88b d888  888 888 888 d888  88b
//  8888__888 8888  888 "88_88" 8888__888
//  Y888    , Y888  888  /      Y888    ,
//   "88___/   "88_/888 Cb       "88___/
//                       Y8""8D
//

export const createEdge = ({
    input,
    condition,
}: {
    input: API.CreateEdgeInput
    condition?: API.ModelEdgeConditionInput
}) => ({
    createEdge: {
        __args: {
            input: enumerator(input),
            ...(condition && { condition: enumerator(condition) }),
        },
        ...edgeFields,
    },
})

export const updateEdge = ({
    input,
    condition,
}: {
    input: API.UpdateEdgeInput
    condition?: API.ModelEdgeConditionInput
}) => ({
    updateEdge: {
        __args: {
            input: enumerator(input),
            ...(condition && { condition: enumerator(condition) }),
        },
        ...edgeFields,
    },
})

export const deleteEdge = ({
    input,
    condition,
}: {
    input: API.DeleteEdgeInput
    condition?: API.ModelEdgeConditionInput
}) => ({
    deleteEdge: {
        __args: {
            input,
            ...(condition && { condition: enumerator(condition) }),
        },
        ...edgeFields,
    },
})

//
//                  888       /           888b    |                888
//   e88~~8e   e88~\888 e88~88e  e88~~8e  |Y88b   |  e88~-_   e88~\888  e88~~8e
//  d888  88b d888  888 888 888 d888  88b | Y88b  | d888   i d888  888 d888  88b
//  8888__888 8888  888 "88_88" 8888__888 |  Y88b | 8888   | 8888  888 8888__888
//  Y888    , Y888  888  /      Y888    , |   Y88b| Y888   ' Y888  888 Y888    ,
//   "88___/   "88_/888 Cb       "88___/  |    Y888  "88_-~   "88_/888  "88___/
//                       Y8""8D
//

export const createEdgeNode = ({
    input,
    condition,
}: {
    input: API.CreateEdgeNodeInput
    condition?: API.ModelEdgeNodeConditionInput
}) => ({
    createEdgeNode: {
        __args: {
            input,
            ...(condition && { condition: enumerator(condition) }),
        },
        ...edgeNodeFields,
    },
})

export const updateEdgeNode = ({
    input,
    condition,
}: {
    input: API.UpdateEdgeNodeInput
    condition?: API.ModelEdgeNodeConditionInput
}) => ({
    updateEdgeNode: {
        __args: {
            input,
            ...(condition && { condition: enumerator(condition) }),
        },
        ...edgeNodeFields,
    },
})

export const deleteEdgeNode = ({
    input,
    condition,
}: {
    input: API.DeleteEdgeNodeInput
    condition?: API.ModelEdgeNodeConditionInput
}) => ({
    deleteEdgeNode: {
        __args: {
            input,
            ...(condition && { condition: enumerator(condition) }),
        },
        ...edgeNodeFields,
    },
})
