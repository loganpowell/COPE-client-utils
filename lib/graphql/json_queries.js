import { EnumType } from "json-to-graphql-query";
import { assetFields, nodeFields, edgeNodeFields, edgeFields } from "./json_API";
import { enumerator } from "../utils";
export const getAsset = ({ id }) => ({
    getAsset: Object.assign({ __args: {
            id,
        } }, assetFields),
});
export const listAssets = ({ filter, limit, nextToken, } = {}) => ({
    listAssets: Object.assign(Object.assign({}, ((filter || limit || nextToken) && {
        __args: Object.assign(Object.assign(Object.assign({}, (filter && { filter: enumerator(filter) })), (limit && { limit })), (nextToken && { nextToken })),
    })), { items: assetFields, nextToken: true }),
});
export const assetsByNode = ({ node_id, sortDirection, filter, limit, nextToken, }) => ({
    assetsByNode: {
        __args: Object.assign(Object.assign(Object.assign(Object.assign({ node_id }, (sortDirection && { sortDirection: enumerator(sortDirection) })), (filter && { filter: enumerator(filter) })), (limit && { limit })), (nextToken && { nextToken })),
        items: assetFields,
        nextToken: true,
    },
});
export const assetsByType = ({ type, createdAt, sortDirection, filter, limit, nextToken, }) => ({
    assetsByType: {
        __args: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ type: new EnumType(type) }, (createdAt && { createdAt })), (sortDirection && { sortDirection: enumerator(sortDirection) })), (filter && { filter })), (limit && { limit })), (nextToken && { nextToken })),
        items: assetFields,
        nextToken: true,
    },
});
export const assetsByOwnerType = ({ owner, typeCreatedAt, sortDirection, filter, limit, nextToken, }) => {
    return {
        assetsByOwnerType: {
            __args: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ owner }, (typeCreatedAt && { typeCreatedAt: enumerator(typeCreatedAt) })), (sortDirection && { sortDirection: enumerator(sortDirection) })), (filter && { filter: enumerator(filter) })), (limit && { limit })), (nextToken && { nextToken })),
            items: assetFields,
            nextToken: true,
        },
    };
};
export const getAssetPr = ({ id }) => ({
    getAssetPr: Object.assign({ __args: {
            id,
        } }, assetFields),
});
export const listAssetPrs = ({ filter, limit, nextToken, } = {}) => ({
    listAssetPrs: Object.assign(Object.assign({}, ((filter || limit || nextToken) && {
        __args: Object.assign(Object.assign(Object.assign({}, (filter && { filter: enumerator(filter) })), (limit && { limit })), (nextToken && { nextToken })),
    })), { items: assetFields, nextToken: true }),
});
export const assetsPrByNode = ({ node_id, sortDirection, filter, limit, nextToken, }) => ({
    assetsPrByNode: {
        __args: Object.assign(Object.assign(Object.assign(Object.assign({ node_id }, (sortDirection && { sortDirection: enumerator(sortDirection) })), (filter && { filter: enumerator(filter) })), (limit && { limit })), (nextToken && { nextToken })),
        items: assetFields,
        nextToken: true,
    },
});
export const assetsPrByType = ({ type, createdAt, sortDirection, filter, limit, nextToken, }) => ({
    assetsPrByType: {
        __args: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ type: new EnumType(type) }, (createdAt && { createdAt })), (sortDirection && { sortDirection: enumerator(sortDirection) })), (filter && { filter: enumerator(filter) })), (limit && { limit })), (nextToken && { nextToken })),
        items: assetFields,
        nextToken: true,
    },
});
export const assetsPrByOwnerType = ({ owner, typeCreatedAt, sortDirection, filter, limit, nextToken, }) => {
    return {
        assetsPrByOwnerType: {
            __args: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ owner }, (typeCreatedAt && { typeCreatedAt: enumerator(typeCreatedAt) })), (sortDirection && { sortDirection: enumerator(sortDirection) })), (filter && { filter: enumerator(filter) })), (limit && { limit })), (nextToken && { nextToken })),
            items: assetFields,
            nextToken: true,
        },
    };
};
export const getNode = ({ id }) => ({
    getNode: Object.assign(Object.assign({ __args: {
            id,
        } }, nodeFields), { edges: {
            items: edgeNodeFields,
            nextToken: true,
        } }),
});
export const listNodes = ({ filter, limit, nextToken, } = {}) => ({
    listNodes: Object.assign(Object.assign({}, ((filter || limit || nextToken) && {
        __args: Object.assign(Object.assign(Object.assign({}, (filter && { filter: enumerator(filter) })), (limit && { limit })), (nextToken && { nextToken })),
    })), { items: Object.assign(Object.assign({}, nodeFields), { edges: {
                items: edgeNodeFields,
                nextToken: true,
            } }), nextToken: true }),
});
export const nodesByStatusType = ({ status, typeCreatedAt, sortDirection, filter, limit, nextToken, }) => ({
    nodesByStatusType: {
        __args: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ status: new EnumType(status) }, (typeCreatedAt && { typeCreatedAt: enumerator(typeCreatedAt) })), (sortDirection && { sortDirection: enumerator(sortDirection) })), (filter && { filter: enumerator(filter) })), (limit && { limit })), (nextToken && { nextToken })),
        items: Object.assign({}, nodeFields),
        nextToken: true,
    },
});
export const nodesByOwnerStatus = ({ owner, statusCreatedAt, sortDirection, filter, limit, nextToken, }) => ({
    nodesByOwnerStatus: {
        __args: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ owner }, (statusCreatedAt && { statusCreatedAt: enumerator(statusCreatedAt) })), (sortDirection && { sortDirection: enumerator(sortDirection) })), (filter && { filter: enumerator(filter) })), (limit && { limit })), (nextToken && { nextToken })),
        items: Object.assign(Object.assign({}, nodeFields), { edges: {
                items: edgeNodeFields,
                nextToken: true,
            } }),
        nextToken: true,
    },
});
export const nodesByOwnerType = ({ owner, typeCreatedAt, sortDirection, filter, limit, nextToken, }) => ({
    nodesByOwnerType: {
        __args: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ owner }, (typeCreatedAt && { typeCreatedAt: enumerator(typeCreatedAt) })), (sortDirection && { sortDirection: enumerator(sortDirection) })), (filter && { filter: enumerator(filter) })), (limit && { limit })), (nextToken && { nextToken })),
        items: Object.assign(Object.assign({}, nodeFields), { edges: {
                items: edgeNodeFields,
                nextToken: true,
            } }),
        nextToken: true,
    },
});
export const getEdge = ({ id }) => ({
    getEdge: Object.assign({ __args: {
            id,
        } }, edgeFields),
});
export const listEdges = ({ filter, limit, nextToken, } = {}) => ({
    listEdges: Object.assign(Object.assign({}, ((filter || limit || nextToken) && {
        __args: Object.assign(Object.assign(Object.assign({}, (filter && { filter: enumerator(filter) })), (limit && { limit })), (nextToken && { nextToken })),
    })), { items: edgeFields, nextToken: true }),
});
export const edgesByType = ({ type, createdAt, sortDirection, filter, limit, nextToken, }) => ({
    edgesByType: {
        __args: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ type: new EnumType(type) }, (createdAt && { createdAt })), (sortDirection && { sortDirection: enumerator(sortDirection) })), (filter && { filter: enumerator(filter) })), (limit && { limit })), (nextToken && { nextToken })),
        items: edgeFields,
        nextToken: true,
    },
});
