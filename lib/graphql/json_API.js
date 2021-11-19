export const assetFields = {
    id: true,
    node_id: true,
    createdAt: true,
    updatedAt: true,
    type: true,
    name: true,
    index: true,
    owner: true,
    content: true,
    editors: true,
};
export const nodeFields = {
    id: true,
    status: true,
    type: true,
    createdAt: true,
    updatedAt: true,
    owner: true,
    assets: {
        items: assetFields,
        nextToken: true,
    },
    assetsPr: {
        items: assetFields,
        nextToken: true,
    },
};
export const edgeFields = {
    id: true,
    type: true,
    owner: true,
    weight: true,
    createdAt: true,
    updatedAt: true,
    nodes: {
        items: {
            node: nodeFields,
        },
        nextToken: true,
    },
};
export const edgeNodeFields = {
    id: true,
    edge_id: true,
    node_id: true,
    owner: true,
    createdAt: true,
    updatedAt: true,
    node: nodeFields,
    edge: edgeFields,
};
