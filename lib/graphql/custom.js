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
export const fragmentEdge = `
    ${fragmentNode}
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
export const getEdgesByNodeID = `
    ${fragmentEdge}
    #${fragmentNode}
    query getNodesByEdgeType($id: ID!) {
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
