import { EnumType } from "json-to-graphql-query"
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
export const getAsset = ({ id }) => ({
    getAsset: Object.assign(
        {
            __args: {
                id,
            },
        },
        assetFields,
    ),
})
export const listAssets = ({ filter, limit, nextToken } = {}) => ({
    listAssets: Object.assign(
        Object.assign(
            {},
            (filter || limit || nextToken) && {
                __args: Object.assign(
                    Object.assign(
                        Object.assign({}, filter && { filter: enumerator(filter) }),
                        limit && { limit },
                    ),
                    nextToken && { nextToken },
                ),
            },
        ),
        { items: assetFields, nextToken: true },
    ),
})
export const assetsByNode = ({ nodeID, sortDirection, filter, limit, nextToken }) => ({
    assetsByNode: {
        __args: Object.assign(
            Object.assign(
                Object.assign(
                    Object.assign(
                        { nodeID },
                        sortDirection && { sortDirection: enumerator(sortDirection) },
                    ),
                    filter && { filter: enumerator(filter) },
                ),
                limit && { limit },
            ),
            nextToken && { nextToken },
        ),
        items: assetFields,
        nextToken: true,
    },
})
export const assetsByType = ({ type, createdAt, sortDirection, filter, limit, nextToken }) => ({
    assetsByType: {
        __args: Object.assign(
            Object.assign(
                Object.assign(
                    Object.assign(
                        Object.assign({ type: new EnumType(type) }, createdAt && { createdAt }),
                        sortDirection && { sortDirection: enumerator(sortDirection) },
                    ),
                    filter && { filter },
                ),
                limit && { limit },
            ),
            nextToken && { nextToken },
        ),
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
}) => {
    return {
        assetsByOwnerType: {
            __args: Object.assign(
                Object.assign(
                    Object.assign(
                        Object.assign(
                            Object.assign(
                                { owner },
                                typeCreatedAt && { typeCreatedAt: enumerator(typeCreatedAt) },
                            ),
                            sortDirection && { sortDirection: enumerator(sortDirection) },
                        ),
                        filter && { filter: enumerator(filter) },
                    ),
                    limit && { limit },
                ),
                nextToken && { nextToken },
            ),
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
export const getAssetPr = ({ id }) => ({
    getAssetPr: Object.assign(
        {
            __args: {
                id,
            },
        },
        assetFields,
    ),
})
export const listAssetPrs = ({ filter, limit, nextToken } = {}) => ({
    listAssetPrs: Object.assign(
        Object.assign(
            {},
            (filter || limit || nextToken) && {
                __args: Object.assign(
                    Object.assign(
                        Object.assign({}, filter && { filter: enumerator(filter) }),
                        limit && { limit },
                    ),
                    nextToken && { nextToken },
                ),
            },
        ),
        { items: assetFields, nextToken: true },
    ),
})
export const assetsPrByNode = ({ nodeID, sortDirection, filter, limit, nextToken }) => ({
    assetsPrByNode: {
        __args: Object.assign(
            Object.assign(
                Object.assign(
                    Object.assign(
                        { nodeID },
                        sortDirection && { sortDirection: enumerator(sortDirection) },
                    ),
                    filter && { filter: enumerator(filter) },
                ),
                limit && { limit },
            ),
            nextToken && { nextToken },
        ),
        items: assetFields,
        nextToken: true,
    },
})
export const assetsPrByType = ({ type, createdAt, sortDirection, filter, limit, nextToken }) => ({
    assetsPrByType: {
        __args: Object.assign(
            Object.assign(
                Object.assign(
                    Object.assign(
                        Object.assign({ type: new EnumType(type) }, createdAt && { createdAt }),
                        sortDirection && { sortDirection: enumerator(sortDirection) },
                    ),
                    filter && { filter: enumerator(filter) },
                ),
                limit && { limit },
            ),
            nextToken && { nextToken },
        ),
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
}) => {
    return {
        assetsPrByOwnerType: {
            __args: Object.assign(
                Object.assign(
                    Object.assign(
                        Object.assign(
                            Object.assign(
                                { owner },
                                typeCreatedAt && { typeCreatedAt: enumerator(typeCreatedAt) },
                            ),
                            sortDirection && { sortDirection: enumerator(sortDirection) },
                        ),
                        filter && { filter: enumerator(filter) },
                    ),
                    limit && { limit },
                ),
                nextToken && { nextToken },
            ),
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
export const getNode = ({ id }) => ({
    getNode: Object.assign(
        Object.assign(
            {
                __args: {
                    id,
                },
            },
            nodeFields,
        ),
        {
            edges: {
                items: edgeNodeFields,
                nextToken: true,
            },
        },
    ),
})
export const listNodes = ({ filter, limit, nextToken } = {}) => ({
    listNodes: Object.assign(
        Object.assign(
            {},
            (filter || limit || nextToken) && {
                __args: Object.assign(
                    Object.assign(
                        Object.assign({}, filter && { filter: enumerator(filter) }),
                        limit && { limit },
                    ),
                    nextToken && { nextToken },
                ),
            },
        ),
        {
            items: Object.assign(Object.assign({}, nodeFields), {
                edges: {
                    items: edgeNodeFields,
                    nextToken: true,
                },
            }),
            nextToken: true,
        },
    ),
})
export const nodesByStatusType = ({
    status,
    typeCreatedAt,
    sortDirection,
    filter,
    limit,
    nextToken,
}) => ({
    nodesByStatusType: {
        __args: Object.assign(
            Object.assign(
                Object.assign(
                    Object.assign(
                        Object.assign(
                            { status: new EnumType(status) },
                            typeCreatedAt && { typeCreatedAt: enumerator(typeCreatedAt) },
                        ),
                        sortDirection && { sortDirection: enumerator(sortDirection) },
                    ),
                    filter && { filter: enumerator(filter) },
                ),
                limit && { limit },
            ),
            nextToken && { nextToken },
        ),
        items: Object.assign({}, nodeFields),
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
}) => ({
    nodesByOwnerStatus: {
        __args: Object.assign(
            Object.assign(
                Object.assign(
                    Object.assign(
                        Object.assign(
                            { owner },
                            statusCreatedAt && { statusCreatedAt: enumerator(statusCreatedAt) },
                        ),
                        sortDirection && { sortDirection: enumerator(sortDirection) },
                    ),
                    filter && { filter: enumerator(filter) },
                ),
                limit && { limit },
            ),
            nextToken && { nextToken },
        ),
        items: Object.assign(Object.assign({}, nodeFields), {
            edges: {
                items: edgeNodeFields,
                nextToken: true,
            },
        }),
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
}) => ({
    nodesByOwnerType: {
        __args: Object.assign(
            Object.assign(
                Object.assign(
                    Object.assign(
                        Object.assign(
                            { owner },
                            typeCreatedAt && { typeCreatedAt: enumerator(typeCreatedAt) },
                        ),
                        sortDirection && { sortDirection: enumerator(sortDirection) },
                    ),
                    filter && { filter: enumerator(filter) },
                ),
                limit && { limit },
            ),
            nextToken && { nextToken },
        ),
        items: Object.assign(Object.assign({}, nodeFields), {
            edges: {
                items: edgeNodeFields,
                nextToken: true,
            },
        }),
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
export const getEdge = ({ id }) => ({
    getEdge: Object.assign(
        {
            __args: {
                id,
            },
        },
        edgeFields,
    ),
})
export const listEdges = ({ filter, limit, nextToken } = {}) => ({
    listEdges: Object.assign(
        Object.assign(
            {},
            (filter || limit || nextToken) && {
                __args: Object.assign(
                    Object.assign(
                        Object.assign({}, filter && { filter: enumerator(filter) }),
                        limit && { limit },
                    ),
                    nextToken && { nextToken },
                ),
            },
        ),
        { items: edgeFields, nextToken: true },
    ),
})
export const edgesByType = ({ type, createdAt, sortDirection, filter, limit, nextToken }) => ({
    edgesByType: {
        __args: Object.assign(
            Object.assign(
                Object.assign(
                    Object.assign(
                        Object.assign({ type: new EnumType(type) }, createdAt && { createdAt }),
                        sortDirection && { sortDirection: enumerator(sortDirection) },
                    ),
                    filter && { filter: enumerator(filter) },
                ),
                limit && { limit },
            ),
            nextToken && { nextToken },
        ),
        items: edgeFields,
        nextToken: true,
    },
})
