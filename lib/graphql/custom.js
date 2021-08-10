export const fragmentResource = `
    fragment resource on Resource {
        id
        node_id
        createdAt
        updatedAt
        type
        name
        index
        owner
        content
        editors
    }
`;
export const fragmentNode = `
    ${fragmentResource}
    fragment node on Node {
        id
        type
        owner
        status
        createdAt
        updatedAt
        assets {
            items {
                ...resource
            }
            nextToken
        }
        assetsPr {
            items {
                ...resource
            }
            nextToken
        }
    }
`;
export const fragmentNodePublic = `
    ${fragmentResource}
    fragment node on Node {
        id
        type
        owner
        status
        createdAt
        updatedAt
        assets {
            items {
                ...resource
            }
            nextToken
        }
    }
`;
export const fragmentEdge = node_fragment => `
    ${node_fragment}
    fragment edge on Edge {
        id
        type
        owner
        weight
        createdAt
        updatedAt
        nodes {
            items {
                node {
                    ...node
                }
            }
            nextToken
        }
    }
`;
export const connections = `
    ${fragmentEdge(fragmentNode)}
    ${fragmentNode}
    query getConnections($id: ID!) {
        getNode(id: $id) {
            ...node
            edges {
                items {
                    edge {
                        ...edge
                    }
                }
                nextToken
            }
        }
    }
`;
export const connectionsPublic = `
    ${fragmentEdge(fragmentNodePublic)}
    query getConnections($id: ID!) {
        getNode(id: $id) {
            id
            type
            owner
            status
            createdAt
            updatedAt
            edges {
                items {
                    edge {
                        ...edge
                    }
                }
                nextToken
            }
        }
    }
`;
export const getNodeWithAssets = `
    ${fragmentNode}
    query GetNode($id: ID!) {
        getNode(id: $id) {
            ...node
        }
    }
`;
