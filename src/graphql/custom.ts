export const fragmentResource = /* GraphQL */ `
    fragment resource on Resource {
        id
        type
        owner
        index
        name
        content
        createdAt
        updatedAt
        node_id
    }
`
export const fragmentNode = /* GraphQL */ `
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
        }
        assetsPr {
            items {
                ...resource
            }
        }
    }
`
export const fragmentEdge = /* GraphQL */ `
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
        }
    }
`

export const getEdgesByNodeID = /* GraphQL */ `
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
            }
        }
    }
`
