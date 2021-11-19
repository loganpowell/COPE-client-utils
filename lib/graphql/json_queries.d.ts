import { EnumType } from "json-to-graphql-query";
import * as API from "./API";
export declare const getAsset: ({ id }: {
    id: string;
}) => {
    getAsset: {
        id: boolean;
        node_id: boolean;
        createdAt: boolean;
        updatedAt: boolean;
        type: boolean;
        name: boolean;
        index: boolean;
        owner: boolean;
        content: boolean;
        editors: boolean;
        __args: {
            id: string;
        };
    };
};
export declare const listAssets: ({ filter, limit, nextToken, }?: {
    filter?: API.ModelAssetFilterInput;
    limit?: number;
    nextToken?: string;
}) => {
    listAssets: {
        items: {
            id: boolean;
            node_id: boolean;
            createdAt: boolean;
            updatedAt: boolean;
            type: boolean;
            name: boolean;
            index: boolean;
            owner: boolean;
            content: boolean;
            editors: boolean;
        };
        nextToken: boolean;
        __args: {
            nextToken: string;
            limit: number;
            filter: {};
        };
    };
};
export declare const assetsByNode: ({ node_id, sortDirection, filter, limit, nextToken, }: {
    node_id: string;
    sortDirection?: API.ModelSortDirection;
    filter?: API.ModelAssetFilterInput;
    limit?: number;
    nextToken?: string;
}) => {
    assetsByNode: {
        __args: {
            nextToken: string;
            limit: number;
            filter: {};
            sortDirection: {};
            node_id: string;
        };
        items: {
            id: boolean;
            node_id: boolean;
            createdAt: boolean;
            updatedAt: boolean;
            type: boolean;
            name: boolean;
            index: boolean;
            owner: boolean;
            content: boolean;
            editors: boolean;
        };
        nextToken: boolean;
    };
};
export declare const assetsByType: ({ type, createdAt, sortDirection, filter, limit, nextToken, }: {
    type: API.AssetType;
    createdAt?: API.ModelStringKeyConditionInput;
    sortDirection?: API.ModelSortDirection;
    filter?: API.ModelAssetFilterInput;
    limit?: number;
    nextToken?: string;
}) => {
    assetsByType: {
        __args: {
            nextToken: string;
            limit: number;
            filter: API.ModelAssetFilterInput;
            sortDirection: {};
            createdAt: API.ModelStringKeyConditionInput;
            type: EnumType;
        };
        items: {
            id: boolean;
            node_id: boolean;
            createdAt: boolean;
            updatedAt: boolean;
            type: boolean;
            name: boolean;
            index: boolean;
            owner: boolean;
            content: boolean;
            editors: boolean;
        };
        nextToken: boolean;
    };
};
export declare const assetsByOwnerType: ({ owner, typeCreatedAt, sortDirection, filter, limit, nextToken, }: {
    owner: string;
    typeCreatedAt: API.ModelAssetAssets_by_owner_typeCompositeKeyConditionInput;
    sortDirection: API.ModelSortDirection;
    filter: API.ModelAssetFilterInput;
    limit: number;
    nextToken: string;
}) => {
    assetsByOwnerType: {
        __args: {
            nextToken: string;
            limit: number;
            filter: {};
            sortDirection: {};
            typeCreatedAt: {};
            owner: string;
        };
        items: {
            id: boolean;
            node_id: boolean;
            createdAt: boolean;
            updatedAt: boolean;
            type: boolean;
            name: boolean;
            index: boolean;
            owner: boolean;
            content: boolean;
            editors: boolean;
        };
        nextToken: boolean;
    };
};
export declare const getAssetPr: ({ id }: {
    id: string;
}) => {
    getAssetPr: {
        id: boolean;
        node_id: boolean;
        createdAt: boolean;
        updatedAt: boolean;
        type: boolean;
        name: boolean;
        index: boolean;
        owner: boolean;
        content: boolean;
        editors: boolean;
        __args: {
            id: string;
        };
    };
};
export declare const listAssetPrs: ({ filter, limit, nextToken, }?: {
    filter?: API.ModelAssetPrFilterInput;
    limit?: number;
    nextToken?: string;
}) => {
    listAssetPrs: {
        items: {
            id: boolean;
            node_id: boolean;
            createdAt: boolean;
            updatedAt: boolean;
            type: boolean;
            name: boolean;
            index: boolean;
            owner: boolean;
            content: boolean;
            editors: boolean;
        };
        nextToken: boolean;
        __args: {
            nextToken: string;
            limit: number;
            filter: {};
        };
    };
};
export declare const assetsPrByNode: ({ node_id, sortDirection, filter, limit, nextToken, }: {
    node_id: string;
    sortDirection?: API.ModelSortDirection;
    filter?: API.ModelAssetPrFilterInput;
    limit?: number;
    nextToken?: string;
}) => {
    assetsPrByNode: {
        __args: {
            nextToken: string;
            limit: number;
            filter: {};
            sortDirection: {};
            node_id: string;
        };
        items: {
            id: boolean;
            node_id: boolean;
            createdAt: boolean;
            updatedAt: boolean;
            type: boolean;
            name: boolean;
            index: boolean;
            owner: boolean;
            content: boolean;
            editors: boolean;
        };
        nextToken: boolean;
    };
};
export declare const assetsPrByType: ({ type, createdAt, sortDirection, filter, limit, nextToken, }: {
    type: API.AssetType;
    createdAt?: API.ModelStringKeyConditionInput;
    sortDirection?: API.ModelSortDirection;
    filter?: API.ModelAssetPrFilterInput;
    limit?: number;
    nextToken?: string;
}) => {
    assetsPrByType: {
        __args: {
            nextToken: string;
            limit: number;
            filter: {};
            sortDirection: {};
            createdAt: API.ModelStringKeyConditionInput;
            type: EnumType;
        };
        items: {
            id: boolean;
            node_id: boolean;
            createdAt: boolean;
            updatedAt: boolean;
            type: boolean;
            name: boolean;
            index: boolean;
            owner: boolean;
            content: boolean;
            editors: boolean;
        };
        nextToken: boolean;
    };
};
export declare const assetsPrByOwnerType: ({ owner, typeCreatedAt, sortDirection, filter, limit, nextToken, }: {
    owner: string;
    typeCreatedAt: API.ModelAssetPrAssetsPr_by_owner_typeCompositeKeyConditionInput;
    sortDirection: API.ModelSortDirection;
    filter: API.ModelAssetPrFilterInput;
    limit: number;
    nextToken: string;
}) => {
    assetsPrByOwnerType: {
        __args: {
            nextToken: string;
            limit: number;
            filter: {};
            sortDirection: {};
            typeCreatedAt: {};
            owner: string;
        };
        items: {
            id: boolean;
            node_id: boolean;
            createdAt: boolean;
            updatedAt: boolean;
            type: boolean;
            name: boolean;
            index: boolean;
            owner: boolean;
            content: boolean;
            editors: boolean;
        };
        nextToken: boolean;
    };
};
export declare const getNode: ({ id }: {
    id: string;
}) => {
    getNode: {
        edges: {
            items: {
                id: boolean;
                edge_id: boolean;
                node_id: boolean;
                owner: boolean;
                createdAt: boolean;
                updatedAt: boolean;
                node: {
                    id: boolean;
                    status: boolean;
                    type: boolean;
                    createdAt: boolean;
                    updatedAt: boolean;
                    owner: boolean;
                    assets: {
                        items: {
                            id: boolean;
                            node_id: boolean;
                            createdAt: boolean;
                            updatedAt: boolean;
                            type: boolean;
                            name: boolean;
                            index: boolean;
                            owner: boolean;
                            content: boolean;
                            editors: boolean;
                        };
                        nextToken: boolean;
                    };
                    assetsPr: {
                        items: {
                            id: boolean;
                            node_id: boolean;
                            createdAt: boolean;
                            updatedAt: boolean;
                            type: boolean;
                            name: boolean;
                            index: boolean;
                            owner: boolean;
                            content: boolean;
                            editors: boolean;
                        };
                        nextToken: boolean;
                    };
                };
                edge: {
                    id: boolean;
                    type: boolean;
                    owner: boolean;
                    weight: boolean;
                    createdAt: boolean;
                    updatedAt: boolean;
                    nodes: {
                        items: {
                            node: {
                                id: boolean;
                                status: boolean;
                                type: boolean;
                                createdAt: boolean;
                                updatedAt: boolean;
                                owner: boolean;
                                assets: {
                                    items: {
                                        id: boolean;
                                        node_id: boolean;
                                        createdAt: boolean;
                                        updatedAt: boolean;
                                        type: boolean;
                                        name: boolean;
                                        index: boolean;
                                        owner: boolean;
                                        content: boolean;
                                        editors: boolean;
                                    };
                                    nextToken: boolean;
                                };
                                assetsPr: {
                                    items: {
                                        id: boolean;
                                        node_id: boolean;
                                        createdAt: boolean;
                                        updatedAt: boolean;
                                        type: boolean;
                                        name: boolean;
                                        index: boolean;
                                        owner: boolean;
                                        content: boolean;
                                        editors: boolean;
                                    };
                                    nextToken: boolean;
                                };
                            };
                        };
                        nextToken: boolean;
                    };
                };
            };
            nextToken: boolean;
        };
        id: boolean;
        status: boolean;
        type: boolean;
        createdAt: boolean;
        updatedAt: boolean;
        owner: boolean;
        assets: {
            items: {
                id: boolean;
                node_id: boolean;
                createdAt: boolean;
                updatedAt: boolean;
                type: boolean;
                name: boolean;
                index: boolean;
                owner: boolean;
                content: boolean;
                editors: boolean;
            };
            nextToken: boolean;
        };
        assetsPr: {
            items: {
                id: boolean;
                node_id: boolean;
                createdAt: boolean;
                updatedAt: boolean;
                type: boolean;
                name: boolean;
                index: boolean;
                owner: boolean;
                content: boolean;
                editors: boolean;
            };
            nextToken: boolean;
        };
        __args: {
            id: string;
        };
    };
};
export declare const listNodes: ({ filter, limit, nextToken, }?: {
    filter?: API.ModelNodeFilterInput;
    limit?: number;
    nextToken?: string;
}) => {
    listNodes: {
        items: {
            edges: {
                items: {
                    id: boolean;
                    edge_id: boolean;
                    node_id: boolean;
                    owner: boolean;
                    createdAt: boolean;
                    updatedAt: boolean;
                    node: {
                        id: boolean;
                        status: boolean;
                        type: boolean;
                        createdAt: boolean;
                        updatedAt: boolean;
                        owner: boolean;
                        assets: {
                            items: {
                                id: boolean;
                                node_id: boolean;
                                createdAt: boolean;
                                updatedAt: boolean;
                                type: boolean;
                                name: boolean;
                                index: boolean;
                                owner: boolean;
                                content: boolean;
                                editors: boolean;
                            };
                            nextToken: boolean;
                        };
                        assetsPr: {
                            items: {
                                id: boolean;
                                node_id: boolean;
                                createdAt: boolean;
                                updatedAt: boolean;
                                type: boolean;
                                name: boolean;
                                index: boolean;
                                owner: boolean;
                                content: boolean;
                                editors: boolean;
                            };
                            nextToken: boolean;
                        };
                    };
                    edge: {
                        id: boolean;
                        type: boolean;
                        owner: boolean;
                        weight: boolean;
                        createdAt: boolean;
                        updatedAt: boolean;
                        nodes: {
                            items: {
                                node: {
                                    id: boolean;
                                    status: boolean;
                                    type: boolean;
                                    createdAt: boolean;
                                    updatedAt: boolean;
                                    owner: boolean;
                                    assets: {
                                        items: {
                                            id: boolean;
                                            node_id: boolean;
                                            createdAt: boolean;
                                            updatedAt: boolean;
                                            type: boolean;
                                            name: boolean;
                                            index: boolean;
                                            owner: boolean;
                                            content: boolean;
                                            editors: boolean;
                                        };
                                        nextToken: boolean;
                                    };
                                    assetsPr: {
                                        items: {
                                            id: boolean;
                                            node_id: boolean;
                                            createdAt: boolean;
                                            updatedAt: boolean;
                                            type: boolean;
                                            name: boolean;
                                            index: boolean;
                                            owner: boolean;
                                            content: boolean;
                                            editors: boolean;
                                        };
                                        nextToken: boolean;
                                    };
                                };
                            };
                            nextToken: boolean;
                        };
                    };
                };
                nextToken: boolean;
            };
            id: boolean;
            status: boolean;
            type: boolean;
            createdAt: boolean;
            updatedAt: boolean;
            owner: boolean;
            assets: {
                items: {
                    id: boolean;
                    node_id: boolean;
                    createdAt: boolean;
                    updatedAt: boolean;
                    type: boolean;
                    name: boolean;
                    index: boolean;
                    owner: boolean;
                    content: boolean;
                    editors: boolean;
                };
                nextToken: boolean;
            };
            assetsPr: {
                items: {
                    id: boolean;
                    node_id: boolean;
                    createdAt: boolean;
                    updatedAt: boolean;
                    type: boolean;
                    name: boolean;
                    index: boolean;
                    owner: boolean;
                    content: boolean;
                    editors: boolean;
                };
                nextToken: boolean;
            };
        };
        nextToken: boolean;
        __args: {
            nextToken: string;
            limit: number;
            filter: {};
        };
    };
};
export declare const nodesByStatusType: ({ status, typeCreatedAt, sortDirection, filter, limit, nextToken, }: {
    status: API.NodeStatus;
    typeCreatedAt?: API.ModelNodeNodes_by_status_type_createdAtCompositeKeyConditionInput;
    sortDirection?: API.ModelSortDirection;
    filter?: API.ModelNodeFilterInput;
    limit?: number;
    nextToken?: string;
}) => {
    nodesByStatusType: {
        __args: {
            nextToken: string;
            limit: number;
            filter: {};
            sortDirection: {};
            typeCreatedAt: {};
            status: EnumType;
        };
        items: {
            id: boolean;
            status: boolean;
            type: boolean;
            createdAt: boolean;
            updatedAt: boolean;
            owner: boolean;
            assets: {
                items: {
                    id: boolean;
                    node_id: boolean;
                    createdAt: boolean;
                    updatedAt: boolean;
                    type: boolean;
                    name: boolean;
                    index: boolean;
                    owner: boolean;
                    content: boolean;
                    editors: boolean;
                };
                nextToken: boolean;
            };
            assetsPr: {
                items: {
                    id: boolean;
                    node_id: boolean;
                    createdAt: boolean;
                    updatedAt: boolean;
                    type: boolean;
                    name: boolean;
                    index: boolean;
                    owner: boolean;
                    content: boolean;
                    editors: boolean;
                };
                nextToken: boolean;
            };
        };
        nextToken: boolean;
    };
};
export declare const nodesByOwnerStatus: ({ owner, statusCreatedAt, sortDirection, filter, limit, nextToken, }: {
    owner: string;
    statusCreatedAt?: API.ModelNodeNodes_by_owner_status_createdAtCompositeKeyConditionInput;
    sortDirection?: API.ModelSortDirection;
    filter?: API.ModelNodeFilterInput;
    limit?: number;
    nextToken?: string;
}) => {
    nodesByOwnerStatus: {
        __args: {
            nextToken: string;
            limit: number;
            filter: {};
            sortDirection: {};
            statusCreatedAt: {};
            owner: string;
        };
        items: {
            edges: {
                items: {
                    id: boolean;
                    edge_id: boolean;
                    node_id: boolean;
                    owner: boolean;
                    createdAt: boolean;
                    updatedAt: boolean;
                    node: {
                        id: boolean;
                        status: boolean;
                        type: boolean;
                        createdAt: boolean;
                        updatedAt: boolean;
                        owner: boolean;
                        assets: {
                            items: {
                                id: boolean;
                                node_id: boolean;
                                createdAt: boolean;
                                updatedAt: boolean;
                                type: boolean;
                                name: boolean;
                                index: boolean;
                                owner: boolean;
                                content: boolean;
                                editors: boolean;
                            };
                            nextToken: boolean;
                        };
                        assetsPr: {
                            items: {
                                id: boolean;
                                node_id: boolean;
                                createdAt: boolean;
                                updatedAt: boolean;
                                type: boolean;
                                name: boolean;
                                index: boolean;
                                owner: boolean;
                                content: boolean;
                                editors: boolean;
                            };
                            nextToken: boolean;
                        };
                    };
                    edge: {
                        id: boolean;
                        type: boolean;
                        owner: boolean;
                        weight: boolean;
                        createdAt: boolean;
                        updatedAt: boolean;
                        nodes: {
                            items: {
                                node: {
                                    id: boolean;
                                    status: boolean;
                                    type: boolean;
                                    createdAt: boolean;
                                    updatedAt: boolean;
                                    owner: boolean;
                                    assets: {
                                        items: {
                                            id: boolean;
                                            node_id: boolean;
                                            createdAt: boolean;
                                            updatedAt: boolean;
                                            type: boolean;
                                            name: boolean;
                                            index: boolean;
                                            owner: boolean;
                                            content: boolean;
                                            editors: boolean;
                                        };
                                        nextToken: boolean;
                                    };
                                    assetsPr: {
                                        items: {
                                            id: boolean;
                                            node_id: boolean;
                                            createdAt: boolean;
                                            updatedAt: boolean;
                                            type: boolean;
                                            name: boolean;
                                            index: boolean;
                                            owner: boolean;
                                            content: boolean;
                                            editors: boolean;
                                        };
                                        nextToken: boolean;
                                    };
                                };
                            };
                            nextToken: boolean;
                        };
                    };
                };
                nextToken: boolean;
            };
            id: boolean;
            status: boolean;
            type: boolean;
            createdAt: boolean;
            updatedAt: boolean;
            owner: boolean;
            assets: {
                items: {
                    id: boolean;
                    node_id: boolean;
                    createdAt: boolean;
                    updatedAt: boolean;
                    type: boolean;
                    name: boolean;
                    index: boolean;
                    owner: boolean;
                    content: boolean;
                    editors: boolean;
                };
                nextToken: boolean;
            };
            assetsPr: {
                items: {
                    id: boolean;
                    node_id: boolean;
                    createdAt: boolean;
                    updatedAt: boolean;
                    type: boolean;
                    name: boolean;
                    index: boolean;
                    owner: boolean;
                    content: boolean;
                    editors: boolean;
                };
                nextToken: boolean;
            };
        };
        nextToken: boolean;
    };
};
export declare const nodesByOwnerType: ({ owner, typeCreatedAt, sortDirection, filter, limit, nextToken, }: {
    owner: string;
    typeCreatedAt?: API.ModelNodeNodes_by_owner_type_createdAtCompositeKeyConditionInput;
    sortDirection?: API.ModelSortDirection;
    filter?: API.ModelNodeFilterInput;
    limit?: number;
    nextToken?: string;
}) => {
    nodesByOwnerType: {
        __args: {
            nextToken: string;
            limit: number;
            filter: {};
            sortDirection: {};
            typeCreatedAt: {};
            owner: string;
        };
        items: {
            edges: {
                items: {
                    id: boolean;
                    edge_id: boolean;
                    node_id: boolean;
                    owner: boolean;
                    createdAt: boolean;
                    updatedAt: boolean;
                    node: {
                        id: boolean;
                        status: boolean;
                        type: boolean;
                        createdAt: boolean;
                        updatedAt: boolean;
                        owner: boolean;
                        assets: {
                            items: {
                                id: boolean;
                                node_id: boolean;
                                createdAt: boolean;
                                updatedAt: boolean;
                                type: boolean;
                                name: boolean;
                                index: boolean;
                                owner: boolean;
                                content: boolean;
                                editors: boolean;
                            };
                            nextToken: boolean;
                        };
                        assetsPr: {
                            items: {
                                id: boolean;
                                node_id: boolean;
                                createdAt: boolean;
                                updatedAt: boolean;
                                type: boolean;
                                name: boolean;
                                index: boolean;
                                owner: boolean;
                                content: boolean;
                                editors: boolean;
                            };
                            nextToken: boolean;
                        };
                    };
                    edge: {
                        id: boolean;
                        type: boolean;
                        owner: boolean;
                        weight: boolean;
                        createdAt: boolean;
                        updatedAt: boolean;
                        nodes: {
                            items: {
                                node: {
                                    id: boolean;
                                    status: boolean;
                                    type: boolean;
                                    createdAt: boolean;
                                    updatedAt: boolean;
                                    owner: boolean;
                                    assets: {
                                        items: {
                                            id: boolean;
                                            node_id: boolean;
                                            createdAt: boolean;
                                            updatedAt: boolean;
                                            type: boolean;
                                            name: boolean;
                                            index: boolean;
                                            owner: boolean;
                                            content: boolean;
                                            editors: boolean;
                                        };
                                        nextToken: boolean;
                                    };
                                    assetsPr: {
                                        items: {
                                            id: boolean;
                                            node_id: boolean;
                                            createdAt: boolean;
                                            updatedAt: boolean;
                                            type: boolean;
                                            name: boolean;
                                            index: boolean;
                                            owner: boolean;
                                            content: boolean;
                                            editors: boolean;
                                        };
                                        nextToken: boolean;
                                    };
                                };
                            };
                            nextToken: boolean;
                        };
                    };
                };
                nextToken: boolean;
            };
            id: boolean;
            status: boolean;
            type: boolean;
            createdAt: boolean;
            updatedAt: boolean;
            owner: boolean;
            assets: {
                items: {
                    id: boolean;
                    node_id: boolean;
                    createdAt: boolean;
                    updatedAt: boolean;
                    type: boolean;
                    name: boolean;
                    index: boolean;
                    owner: boolean;
                    content: boolean;
                    editors: boolean;
                };
                nextToken: boolean;
            };
            assetsPr: {
                items: {
                    id: boolean;
                    node_id: boolean;
                    createdAt: boolean;
                    updatedAt: boolean;
                    type: boolean;
                    name: boolean;
                    index: boolean;
                    owner: boolean;
                    content: boolean;
                    editors: boolean;
                };
                nextToken: boolean;
            };
        };
        nextToken: boolean;
    };
};
export declare const getEdge: ({ id }: {
    id: string;
}) => {
    getEdge: {
        id: boolean;
        type: boolean;
        owner: boolean;
        weight: boolean;
        createdAt: boolean;
        updatedAt: boolean;
        nodes: {
            items: {
                node: {
                    id: boolean;
                    status: boolean;
                    type: boolean;
                    createdAt: boolean;
                    updatedAt: boolean;
                    owner: boolean;
                    assets: {
                        items: {
                            id: boolean;
                            node_id: boolean;
                            createdAt: boolean;
                            updatedAt: boolean;
                            type: boolean;
                            name: boolean;
                            index: boolean;
                            owner: boolean;
                            content: boolean;
                            editors: boolean;
                        };
                        nextToken: boolean;
                    };
                    assetsPr: {
                        items: {
                            id: boolean;
                            node_id: boolean;
                            createdAt: boolean;
                            updatedAt: boolean;
                            type: boolean;
                            name: boolean;
                            index: boolean;
                            owner: boolean;
                            content: boolean;
                            editors: boolean;
                        };
                        nextToken: boolean;
                    };
                };
            };
            nextToken: boolean;
        };
        __args: {
            id: string;
        };
    };
};
export declare const listEdges: ({ filter, limit, nextToken, }?: {
    filter?: API.ModelAssetFilterInput;
    limit?: number;
    nextToken?: string;
}) => {
    listEdges: {
        items: {
            id: boolean;
            type: boolean;
            owner: boolean;
            weight: boolean;
            createdAt: boolean;
            updatedAt: boolean;
            nodes: {
                items: {
                    node: {
                        id: boolean;
                        status: boolean;
                        type: boolean;
                        createdAt: boolean;
                        updatedAt: boolean;
                        owner: boolean;
                        assets: {
                            items: {
                                id: boolean;
                                node_id: boolean;
                                createdAt: boolean;
                                updatedAt: boolean;
                                type: boolean;
                                name: boolean;
                                index: boolean;
                                owner: boolean;
                                content: boolean;
                                editors: boolean;
                            };
                            nextToken: boolean;
                        };
                        assetsPr: {
                            items: {
                                id: boolean;
                                node_id: boolean;
                                createdAt: boolean;
                                updatedAt: boolean;
                                type: boolean;
                                name: boolean;
                                index: boolean;
                                owner: boolean;
                                content: boolean;
                                editors: boolean;
                            };
                            nextToken: boolean;
                        };
                    };
                };
                nextToken: boolean;
            };
        };
        nextToken: boolean;
        __args: {
            nextToken: string;
            limit: number;
            filter: {};
        };
    };
};
export declare const edgesByType: ({ type, createdAt, sortDirection, filter, limit, nextToken, }: {
    type: API.AssetType;
    createdAt?: API.ModelStringKeyConditionInput;
    sortDirection?: API.ModelSortDirection;
    filter?: API.ModelAssetPrFilterInput;
    limit?: number;
    nextToken?: string;
}) => {
    edgesByType: {
        __args: {
            nextToken: string;
            limit: number;
            filter: {};
            sortDirection: {};
            createdAt: API.ModelStringKeyConditionInput;
            type: EnumType;
        };
        items: {
            id: boolean;
            type: boolean;
            owner: boolean;
            weight: boolean;
            createdAt: boolean;
            updatedAt: boolean;
            nodes: {
                items: {
                    node: {
                        id: boolean;
                        status: boolean;
                        type: boolean;
                        createdAt: boolean;
                        updatedAt: boolean;
                        owner: boolean;
                        assets: {
                            items: {
                                id: boolean;
                                node_id: boolean;
                                createdAt: boolean;
                                updatedAt: boolean;
                                type: boolean;
                                name: boolean;
                                index: boolean;
                                owner: boolean;
                                content: boolean;
                                editors: boolean;
                            };
                            nextToken: boolean;
                        };
                        assetsPr: {
                            items: {
                                id: boolean;
                                node_id: boolean;
                                createdAt: boolean;
                                updatedAt: boolean;
                                type: boolean;
                                name: boolean;
                                index: boolean;
                                owner: boolean;
                                content: boolean;
                                editors: boolean;
                            };
                            nextToken: boolean;
                        };
                    };
                };
                nextToken: boolean;
            };
        };
        nextToken: boolean;
    };
};
