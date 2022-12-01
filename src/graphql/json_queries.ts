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

export const getAsset = ({ id }: { id: string }) => ({
    getAsset: {
        __args: {
            id,
        },
        ...assetFields,
    },
})

export const listAssets = ({
    filter,
    limit,
    nextToken,
}: {
    filter?: API.ModelAssetFilterInput
    limit?: number
    nextToken?: string
} = {}) => ({
    listAssets: {
        ...((filter || limit || nextToken) && {
            __args: {
                ...(filter && { filter: enumerator(filter) }),
                ...(limit && { limit }),
                ...(nextToken && { nextToken }),
            },
        }),
        items: assetFields,
        nextToken: true,
    },
})

export const assetsByNode = ({
    nodeID,
    sortDirection,
    filter,
    limit,
    nextToken,
}: {
    nodeID: string
    sortDirection?: API.ModelSortDirection
    filter?: API.ModelAssetFilterInput
    limit?: number
    nextToken?: string
}) => ({
    assetsByNode: {
        __args: {
            nodeID,
            ...(sortDirection && { sortDirection: enumerator(sortDirection) }),
            ...(filter && { filter: enumerator(filter) }),
            ...(limit && { limit }),
            ...(nextToken && { nextToken }),
        },
        items: assetFields,
        nextToken: true,
    },
})

export const assetsByType = ({
    type,
    createdAt,
    sortDirection,
    filter,
    limit,
    nextToken,
}: {
    type: API.AssetType
    createdAt?: API.ModelStringKeyConditionInput
    sortDirection?: API.ModelSortDirection
    filter?: API.ModelAssetFilterInput
    limit?: number
    nextToken?: string
}) => ({
    assetsByType: {
        __args: {
            type: new EnumType(type),
            ...(createdAt && { createdAt }),
            ...(sortDirection && { sortDirection: enumerator(sortDirection) }),
            ...(filter && { filter }),
            ...(limit && { limit }),
            ...(nextToken && { nextToken }),
        },
        items: assetFields,
        nextToken: true,
    },
})

export const assetsByOwnerType = ({
    owner,
    typeCreatedAt,
    sortDirection,
    filter,
    limit,
    nextToken,
}: {
    owner: string
    typeCreatedAt: API.ModelAssetAssets_by_owner_typeCompositeKeyConditionInput
    sortDirection: API.ModelSortDirection
    filter: API.ModelAssetFilterInput
    limit: number
    nextToken: string
}) => {
    return {
        assetsByOwnerType: {
            __args: {
                owner,
                ...(typeCreatedAt && { typeCreatedAt: enumerator(typeCreatedAt) }),
                ...(sortDirection && { sortDirection: enumerator(sortDirection) }),
                ...(filter && { filter: enumerator(filter) }),
                ...(limit && { limit }),
                ...(nextToken && { nextToken }),
            },
            items: assetFields,
            nextToken: true,
        },
    }
}

//
//       e                                d8   888~-_
//      d8b      d88~\  d88~\  e88~~8e  _d88__ 888   \  888-~\
//     /Y88b    C888   C888   d888  88b  888   888    | 888
//    /  Y88b    Y88b   Y88b  8888__888  888   888   /  888
//   /____Y88b    888D   888D Y888    ,  888   888_-~   888
//  /      Y88b \_88P  \_88P   "88___/   "88_/ 888      888
//
//

export const getAssetPr = ({ id }: { id: string }) => ({
    getAssetPr: {
        __args: {
            id,
        },
        ...assetFields,
    },
})

export const listAssetPrs = ({
    filter,
    limit,
    nextToken,
}: {
    filter?: API.ModelAssetPrFilterInput
    limit?: number
    nextToken?: string
} = {}) => ({
    listAssetPrs: {
        ...((filter || limit || nextToken) && {
            __args: {
                ...(filter && { filter: enumerator(filter) }),
                ...(limit && { limit }),
                ...(nextToken && { nextToken }),
            },
        }),
        items: assetFields,
        nextToken: true,
    },
})

export const assetsPrByNode = ({
    nodeID,
    sortDirection,
    filter,
    limit,
    nextToken,
}: {
    nodeID: string
    sortDirection?: API.ModelSortDirection
    filter?: API.ModelAssetPrFilterInput
    limit?: number
    nextToken?: string
}) => ({
    assetsPrByNode: {
        __args: {
            nodeID,
            ...(sortDirection && { sortDirection: enumerator(sortDirection) }),
            ...(filter && { filter: enumerator(filter) }),
            ...(limit && { limit }),
            ...(nextToken && { nextToken }),
        },
        items: assetFields,
        nextToken: true,
    },
})

export const assetsPrByType = ({
    type,
    createdAt,
    sortDirection,
    filter,
    limit,
    nextToken,
}: {
    type: API.AssetType
    createdAt?: API.ModelStringKeyConditionInput
    sortDirection?: API.ModelSortDirection
    filter?: API.ModelAssetPrFilterInput
    limit?: number
    nextToken?: string
}) => ({
    assetsPrByType: {
        __args: {
            type: new EnumType(type),
            ...(createdAt && { createdAt }),
            ...(sortDirection && { sortDirection: enumerator(sortDirection) }),
            ...(filter && { filter: enumerator(filter) }),
            ...(limit && { limit }),
            ...(nextToken && { nextToken }),
        },
        items: assetFields,
        nextToken: true,
    },
})

export const assetsPrByOwnerType = ({
    owner,
    typeCreatedAt,
    sortDirection,
    filter,
    limit,
    nextToken,
}: {
    owner: string
    typeCreatedAt: API.ModelAssetPrAssetsPr_by_owner_typeCompositeKeyConditionInput
    sortDirection: API.ModelSortDirection
    filter: API.ModelAssetPrFilterInput
    limit: number
    nextToken: string
}) => {
    return {
        assetsPrByOwnerType: {
            __args: {
                owner,
                ...(typeCreatedAt && { typeCreatedAt: enumerator(typeCreatedAt) }),
                ...(sortDirection && { sortDirection: enumerator(sortDirection) }),
                ...(filter && { filter: enumerator(filter) }),
                ...(limit && { limit }),
                ...(nextToken && { nextToken }),
            },
            items: assetFields,
            nextToken: true,
        },
    }
}

//
//  888b    |                888
//  |Y88b   |  e88~-_   e88~\888  e88~~8e
//  | Y88b  | d888   i d888  888 d888  88b
//  |  Y88b | 8888   | 8888  888 8888__888
//  |   Y88b| Y888   ' Y888  888 Y888    ,
//  |    Y888  "88_-~   "88_/888  "88___/
//
//
export const getNode = ({ id }: { id: string }) => ({
    getNode: {
        __args: {
            id,
        },
        ...nodeFields,
        edges: {
            items: edgeNodeFields,
            nextToken: true,
        },
    },
})

export const listNodes = ({
    filter,
    limit,
    nextToken,
}: {
    filter?: API.ModelNodeFilterInput
    limit?: number
    nextToken?: string
} = {}) => ({
    listNodes: {
        ...((filter || limit || nextToken) && {
            __args: {
                ...(filter && { filter: enumerator(filter) }),
                ...(limit && { limit }),
                ...(nextToken && { nextToken }),
            },
        }),
        items: {
            ...nodeFields,
            edges: {
                items: edgeNodeFields,
                nextToken: true,
            },
        },
        nextToken: true,
    },
})

export const nodesByStatusType = ({
    status,
    typeCreatedAt,
    sortDirection,
    filter,
    limit,
    nextToken,
}: {
    status: API.NodeStatus
    typeCreatedAt?: API.ModelNodeNodes_by_status_type_createdAtCompositeKeyConditionInput
    sortDirection?: API.ModelSortDirection
    filter?: API.ModelNodeFilterInput
    limit?: number
    nextToken?: string
}) => ({
    nodesByStatusType: {
        __args: {
            status: new EnumType(status),
            ...(typeCreatedAt && { typeCreatedAt: enumerator(typeCreatedAt) }),
            ...(sortDirection && { sortDirection: enumerator(sortDirection) }),
            ...(filter && { filter: enumerator(filter) }),
            ...(limit && { limit }),
            ...(nextToken && { nextToken }),
        },
        items: {
            ...nodeFields,
            //edges: {
            //    items: edgeNodeFields,
            //    nextToken: true,
            //},
        },
        nextToken: true,
    },
})

export const nodesByOwnerStatus = ({
    owner,
    statusCreatedAt,
    sortDirection,
    filter,
    limit,
    nextToken,
}: {
    owner: string
    statusCreatedAt?: API.ModelNodeNodes_by_owner_status_createdAtCompositeKeyConditionInput
    sortDirection?: API.ModelSortDirection
    filter?: API.ModelNodeFilterInput
    limit?: number
    nextToken?: string
}) => ({
    nodesByOwnerStatus: {
        __args: {
            owner,
            ...(statusCreatedAt && { statusCreatedAt: enumerator(statusCreatedAt) }),
            ...(sortDirection && { sortDirection: enumerator(sortDirection) }),
            ...(filter && { filter: enumerator(filter) }),
            ...(limit && { limit }),
            ...(nextToken && { nextToken }),
        },
        items: {
            ...nodeFields,
            edges: {
                items: edgeNodeFields,
                nextToken: true,
            },
        },
        nextToken: true,
    },
})

export const nodesByOwnerType = ({
    owner,
    typeCreatedAt,
    sortDirection,
    filter,
    limit,
    nextToken,
}: {
    owner: string
    typeCreatedAt?: API.ModelNodeNodes_by_owner_type_createdAtCompositeKeyConditionInput
    sortDirection?: API.ModelSortDirection
    filter?: API.ModelNodeFilterInput
    limit?: number
    nextToken?: string
}) => ({
    nodesByOwnerType: {
        __args: {
            owner,
            ...(typeCreatedAt && { typeCreatedAt: enumerator(typeCreatedAt) }),
            ...(sortDirection && { sortDirection: enumerator(sortDirection) }),
            ...(filter && { filter: enumerator(filter) }),
            ...(limit && { limit }),
            ...(nextToken && { nextToken }),
        },
        items: {
            ...nodeFields,
            edges: {
                items: edgeNodeFields,
                nextToken: true,
            },
        },
        nextToken: true,
    },
})

//
//  888~~        888       /
//  888___  e88~\888 e88~88e  e88~~8e
//  888    d888  888 888 888 d888  88b
//  888    8888  888 "88_88" 8888__888
//  888    Y888  888  /      Y888    ,
//  888___  "88_/888 Cb       "88___/
//                    Y8""8D
//

export const getEdge = ({ id }: { id: string }) => ({
    getEdge: {
        __args: {
            id,
        },
        ...edgeFields,
    },
})

export const listEdges = ({
    filter,
    limit,
    nextToken,
}: {
    filter?: API.ModelAssetFilterInput
    limit?: number
    nextToken?: string
} = {}) => ({
    listEdges: {
        ...((filter || limit || nextToken) && {
            __args: {
                ...(filter && { filter: enumerator(filter) }),
                ...(limit && { limit }),
                ...(nextToken && { nextToken }),
            },
        }),
        items: edgeFields,
        nextToken: true,
    },
})

export const edgesByType = ({
    type,
    createdAt,
    sortDirection,
    filter,
    limit,
    nextToken,
}: {
    type: API.AssetType
    createdAt?: API.ModelStringKeyConditionInput
    sortDirection?: API.ModelSortDirection
    filter?: API.ModelAssetPrFilterInput
    limit?: number
    nextToken?: string
}) => ({
    edgesByType: {
        __args: {
            type: new EnumType(type),
            ...(createdAt && { createdAt }),
            ...(sortDirection && { sortDirection: enumerator(sortDirection) }),
            ...(filter && { filter: enumerator(filter) }),
            ...(limit && { limit }),
            ...(nextToken && { nextToken }),
        },
        items: edgeFields,
        nextToken: true,
    },
})
