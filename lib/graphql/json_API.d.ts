export declare const assetFields: {
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
export declare const nodeFields: {
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
export declare const edgeFields: {
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
export declare const edgeNodeFields: {
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
