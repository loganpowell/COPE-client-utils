import { EnumType } from "json-to-graphql-query";
import * as API from "./API";
export declare const createAsset: ({ input, condition, }: {
    input: API.CreateAssetInput;
    condition?: API.ModelAssetConditionInput;
}) => {
    createAsset: {
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
            condition: API.ModelAssetConditionInput;
            input: {
                id?: string;
                node_id: string;
                createdAt?: string;
                updatedAt?: string;
                name: string;
                index?: number;
                owner?: string;
                content?: string;
                editors?: string[];
                type: EnumType;
            };
        };
    };
};
export declare const updateAsset: ({ input, condition, }: {
    input: API.UpdateAssetInput;
    condition?: API.ModelAssetConditionInput;
}) => {
    updateAsset: {
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
            condition: API.ModelAssetConditionInput;
            input: {
                id: string;
                node_id?: string;
                createdAt?: string;
                updatedAt?: string;
                name?: string;
                index?: number;
                owner?: string;
                content?: string;
                editors?: string[];
                type: EnumType;
            };
        };
    };
};
export declare const deleteAsset: ({ input, condition, }: {
    input: API.DeleteAssetInput;
    condition?: API.ModelAssetConditionInput;
}) => {
    deleteAsset: {
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
            condition: API.ModelAssetConditionInput;
            input: API.DeleteAssetInput;
        };
    };
};
export declare const createAssetPr: ({ input, condition, }: {
    input: API.CreateAssetPrInput;
    condition?: API.ModelAssetPrConditionInput;
}) => {
    createAssetPr: {
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
            condition: API.ModelAssetPrConditionInput;
            input: {
                id?: string;
                node_id: string;
                createdAt?: string;
                updatedAt?: string;
                name: string;
                index?: number;
                owner?: string;
                content?: string;
                editors?: string[];
                type: EnumType;
            };
        };
    };
};
export declare const updateAssetPr: ({ input, condition, }: {
    input: API.UpdateAssetPrInput;
    condition?: API.ModelAssetPrConditionInput;
}) => {
    updateAssetPr: {
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
            condition: API.ModelAssetPrConditionInput;
            input: {
                id: string;
                node_id?: string;
                createdAt?: string;
                updatedAt?: string;
                name?: string;
                index?: number;
                owner?: string;
                content?: string;
                editors?: string[];
                type: EnumType;
            };
        };
    };
};
export declare const deleteAssetPr: ({ input, condition, }: {
    input: API.DeleteAssetPrInput;
    condition?: API.ModelAssetPrConditionInput;
}) => {
    deleteAssetPr: {
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
            condition: API.ModelAssetPrConditionInput;
            input: API.DeleteAssetPrInput;
        };
    };
};
export declare const createNode: ({ input, condition, }: {
    input: API.CreateNodeInput;
    condition?: API.ModelNodeConditionInput;
}) => {
    createNode: {
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
            condition: API.ModelNodeConditionInput;
            input: {
                id?: string;
                createdAt?: string;
                updatedAt?: string;
                owner?: string;
                type: EnumType;
                status: EnumType;
            };
        };
    };
};
export declare const updateNode: ({ input, condition, }: {
    input: API.UpdateNodeInput;
    condition?: API.ModelNodeConditionInput;
}) => {
    updateNode: {
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
            condition: API.ModelNodeConditionInput;
            input: {
                id: string;
                createdAt?: string;
                updatedAt?: string;
                owner?: string;
                type: EnumType;
                status: EnumType;
            };
        };
    };
};
export declare const deleteNode: ({ input, condition, }: {
    input: API.DeleteNodeInput;
    condition?: API.ModelNodeConditionInput;
}) => {
    deleteNode: {
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
            condition: API.ModelNodeConditionInput;
            input: API.DeleteNodeInput;
        };
    };
};
export declare const createEdge: ({ input, condition, }: {
    input: API.CreateEdgeInput;
    condition?: API.ModelEdgeConditionInput;
}) => {
    createEdge: {
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
            condition: API.ModelEdgeConditionInput;
            input: {
                id?: string;
                createdAt?: string;
                owner?: string;
                weight?: number;
                type: EnumType;
            };
        };
    };
};
export declare const updateEdge: ({ input, condition, }: {
    input: API.UpdateEdgeInput;
    condition?: API.ModelEdgeConditionInput;
}) => {
    updateEdge: {
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
            condition: API.ModelEdgeConditionInput;
            input: {
                id: string;
                createdAt?: string;
                owner?: string;
                weight?: number;
                type: EnumType;
            };
        };
    };
};
export declare const deleteEdge: ({ input, condition, }: {
    input: API.DeleteEdgeInput;
    condition?: API.ModelEdgeConditionInput;
}) => {
    deleteEdge: {
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
            condition: API.ModelEdgeConditionInput;
            input: API.DeleteEdgeInput;
        };
    };
};
export declare const createEdgeNode: ({ input, condition, }: {
    input: API.CreateEdgeNodeInput;
    condition?: API.ModelEdgeNodeConditionInput;
}) => {
    createEdgeNode: {
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
        __args: {
            condition: API.ModelEdgeNodeConditionInput;
            input: API.CreateEdgeNodeInput;
        };
    };
};
export declare const updateEdgeNode: ({ input, condition, }: {
    input: API.UpdateEdgeNodeInput;
    condition?: API.ModelEdgeNodeConditionInput;
}) => {
    updateEdgeNode: {
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
        __args: {
            condition: API.ModelEdgeNodeConditionInput;
            input: API.UpdateEdgeNodeInput;
        };
    };
};
export declare const deleteEdgeNode: ({ input, condition, }: {
    input: API.DeleteEdgeNodeInput;
    condition?: API.ModelEdgeNodeConditionInput;
}) => {
    deleteEdgeNode: {
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
        __args: {
            condition: API.ModelEdgeNodeConditionInput;
            input: API.DeleteEdgeNodeInput;
        };
    };
};
