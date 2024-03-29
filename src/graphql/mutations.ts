export const createAsset = /* GraphQL */ `
    mutation CreateAsset($input: CreateAssetInput!, $condition: ModelAssetConditionInput) {
        createAsset(input: $input, condition: $condition) {
            id
            nodeID
            createdAt
            updatedAt
            type
            name
            index
            owner
            content
            editors
        }
    }
`
export const updateAsset = /* GraphQL */ `
    mutation UpdateAsset($input: UpdateAssetInput!, $condition: ModelAssetConditionInput) {
        updateAsset(input: $input, condition: $condition) {
            id
            nodeID
            createdAt
            updatedAt
            type
            name
            index
            owner
            content
            editors
        }
    }
`
export const deleteAsset = /* GraphQL */ `
    mutation DeleteAsset($input: DeleteAssetInput!, $condition: ModelAssetConditionInput) {
        deleteAsset(input: $input, condition: $condition) {
            id
            nodeID
            createdAt
            updatedAt
            type
            name
            index
            owner
            content
            editors
        }
    }
`
export const createAssetPr = /* GraphQL */ `
    mutation CreateAssetPr($input: CreateAssetPrInput!, $condition: ModelAssetPrConditionInput) {
        createAssetPr(input: $input, condition: $condition) {
            id
            nodeID
            createdAt
            updatedAt
            type
            name
            index
            owner
            content
            editors
        }
    }
`
export const updateAssetPr = /* GraphQL */ `
    mutation UpdateAssetPr($input: UpdateAssetPrInput!, $condition: ModelAssetPrConditionInput) {
        updateAssetPr(input: $input, condition: $condition) {
            id
            nodeID
            createdAt
            updatedAt
            type
            name
            index
            owner
            content
            editors
        }
    }
`
export const deleteAssetPr = /* GraphQL */ `
    mutation DeleteAssetPr($input: DeleteAssetPrInput!, $condition: ModelAssetPrConditionInput) {
        deleteAssetPr(input: $input, condition: $condition) {
            id
            nodeID
            createdAt
            updatedAt
            type
            name
            index
            owner
            content
            editors
        }
    }
`
export const createNode = /* GraphQL */ `
    mutation CreateNode($input: CreateNodeInput!, $condition: ModelNodeConditionInput) {
        createNode(input: $input, condition: $condition) {
            id
            status
            type
            createdAt
            updatedAt
            owner
            assets {
                items {
                    id
                    nodeID
                    createdAt
                    updatedAt
                    type
                    name
                    index
                    owner
                    content
                    editors
                }
                nextToken
            }
            assetsPr {
                items {
                    id
                    nodeID
                    createdAt
                    updatedAt
                    type
                    name
                    index
                    owner
                    content
                    editors
                }
                nextToken
            }
            edges {
                items {
                    id
                    edgeID
                    nodeID
                    owner
                    createdAt
                    updatedAt
                }
                nextToken
            }
        }
    }
`
export const updateNode = /* GraphQL */ `
    mutation UpdateNode($input: UpdateNodeInput!, $condition: ModelNodeConditionInput) {
        updateNode(input: $input, condition: $condition) {
            id
            status
            type
            createdAt
            updatedAt
            owner
            assets {
                items {
                    id
                    nodeID
                    createdAt
                    updatedAt
                    type
                    name
                    index
                    owner
                    content
                    editors
                }
                nextToken
            }
            assetsPr {
                items {
                    id
                    nodeID
                    createdAt
                    updatedAt
                    type
                    name
                    index
                    owner
                    content
                    editors
                }
                nextToken
            }
            edges {
                items {
                    id
                    edgeID
                    nodeID
                    owner
                    createdAt
                    updatedAt
                }
                nextToken
            }
        }
    }
`
export const deleteNode = /* GraphQL */ `
    mutation DeleteNode($input: DeleteNodeInput!, $condition: ModelNodeConditionInput) {
        deleteNode(input: $input, condition: $condition) {
            id
            status
            type
            createdAt
            updatedAt
            owner
            assets {
                items {
                    id
                    nodeID
                    createdAt
                    updatedAt
                    type
                    name
                    index
                    owner
                    content
                    editors
                }
                nextToken
            }
            assetsPr {
                items {
                    id
                    nodeID
                    createdAt
                    updatedAt
                    type
                    name
                    index
                    owner
                    content
                    editors
                }
                nextToken
            }
            edges {
                items {
                    id
                    edgeID
                    nodeID
                    owner
                    createdAt
                    updatedAt
                }
                nextToken
            }
        }
    }
`
export const createEdge = /* GraphQL */ `
    mutation CreateEdge($input: CreateEdgeInput!, $condition: ModelEdgeConditionInput) {
        createEdge(input: $input, condition: $condition) {
            id
            type
            createdAt
            owner
            weight
            updatedAt
            nodes {
                items {
                    id
                    edgeID
                    nodeID
                    owner
                    createdAt
                    updatedAt
                }
                nextToken
            }
        }
    }
`
export const updateEdge = /* GraphQL */ `
    mutation UpdateEdge($input: UpdateEdgeInput!, $condition: ModelEdgeConditionInput) {
        updateEdge(input: $input, condition: $condition) {
            id
            type
            createdAt
            owner
            weight
            updatedAt
            nodes {
                items {
                    id
                    edgeID
                    nodeID
                    owner
                    createdAt
                    updatedAt
                }
                nextToken
            }
        }
    }
`
export const deleteEdge = /* GraphQL */ `
    mutation DeleteEdge($input: DeleteEdgeInput!, $condition: ModelEdgeConditionInput) {
        deleteEdge(input: $input, condition: $condition) {
            id
            type
            createdAt
            owner
            weight
            updatedAt
            nodes {
                items {
                    id
                    edgeID
                    nodeID
                    owner
                    createdAt
                    updatedAt
                }
                nextToken
            }
        }
    }
`
export const createEdgeNode = /* GraphQL */ `
    mutation CreateEdgeNode($input: CreateEdgeNodeInput!, $condition: ModelEdgeNodeConditionInput) {
        createEdgeNode(input: $input, condition: $condition) {
            id
            edgeID
            nodeID
            owner
            createdAt
            updatedAt
            node {
                id
                status
                type
                createdAt
                updatedAt
                owner
                assets {
                    nextToken
                }
                assetsPr {
                    nextToken
                }
                edges {
                    nextToken
                }
            }
            edge {
                id
                type
                createdAt
                owner
                weight
                updatedAt
                nodes {
                    nextToken
                }
            }
        }
    }
`
export const updateEdgeNode = /* GraphQL */ `
    mutation UpdateEdgeNode($input: UpdateEdgeNodeInput!, $condition: ModelEdgeNodeConditionInput) {
        updateEdgeNode(input: $input, condition: $condition) {
            id
            edgeID
            nodeID
            owner
            createdAt
            updatedAt
            node {
                id
                status
                type
                createdAt
                updatedAt
                owner
                assets {
                    nextToken
                }
                assetsPr {
                    nextToken
                }
                edges {
                    nextToken
                }
            }
            edge {
                id
                type
                createdAt
                owner
                weight
                updatedAt
                nodes {
                    nextToken
                }
            }
        }
    }
`
export const deleteEdgeNode = /* GraphQL */ `
    mutation DeleteEdgeNode($input: DeleteEdgeNodeInput!, $condition: ModelEdgeNodeConditionInput) {
        deleteEdgeNode(input: $input, condition: $condition) {
            id
            edgeID
            nodeID
            owner
            createdAt
            updatedAt
            node {
                id
                status
                type
                createdAt
                updatedAt
                owner
                assets {
                    nextToken
                }
                assetsPr {
                    nextToken
                }
                edges {
                    nextToken
                }
            }
            edge {
                id
                type
                createdAt
                owner
                weight
                updatedAt
                nodes {
                    nextToken
                }
            }
        }
    }
`
