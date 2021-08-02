export const fragmentResource = /* GraphQL */ `
    fragment resource on Resource{
        id
        name
        content
        type
        createdAt
        index
        owner
        node_id
    }
`
export const fragmentNode = /* GraphQL */ ` 
    ${fragmentResource}
    fragment node on Node {
        id
        status
        type
        createdAt
        updatedAt
        owner
        assets{
            items{
                updatedAt
                ...resource
            }
        }
        assetsPr{
            items{
                updatedAt
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
        createdAt
        owner
        weight
        updatedAt
        nodes{
            items{
                node{
                    ...node
                }
            }
        }
    }
`

export const getNodesWithEdges = /* GraphQL */ `
    ${fragmentEdge}
    query getNodesByEdgeType($id:ID!){
        getNode(id: $id){
            id
            type
            status
            createdAt
            updatedAt
            owner
            edges{
                items{
                    edge{
                    ...edge
                    }
                }
            }
        }
    }
`
