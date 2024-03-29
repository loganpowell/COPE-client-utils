export const onCreateAsset = /* GraphQL */ `
    subscription OnCreateAsset($owner: String, $editors: String) {
        onCreateAsset(owner: $owner, editors: $editors) {
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
export const onUpdateAsset = /* GraphQL */ `
    subscription OnUpdateAsset($owner: String, $editors: String) {
        onUpdateAsset(owner: $owner, editors: $editors) {
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
export const onDeleteAsset = /* GraphQL */ `
    subscription OnDeleteAsset($owner: String, $editors: String) {
        onDeleteAsset(owner: $owner, editors: $editors) {
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
export const onCreateAssetPr = /* GraphQL */ `
    subscription OnCreateAssetPr($owner: String, $editors: String) {
        onCreateAssetPr(owner: $owner, editors: $editors) {
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
export const onUpdateAssetPr = /* GraphQL */ `
    subscription OnUpdateAssetPr($owner: String, $editors: String) {
        onUpdateAssetPr(owner: $owner, editors: $editors) {
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
export const onDeleteAssetPr = /* GraphQL */ `
    subscription OnDeleteAssetPr($owner: String, $editors: String) {
        onDeleteAssetPr(owner: $owner, editors: $editors) {
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
export const onCreateNode = /* GraphQL */ `
    subscription OnCreateNode($owner: String) {
        onCreateNode(owner: $owner) {
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
export const onUpdateNode = /* GraphQL */ `
    subscription OnUpdateNode($owner: String) {
        onUpdateNode(owner: $owner) {
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
export const onDeleteNode = /* GraphQL */ `
    subscription OnDeleteNode($owner: String) {
        onDeleteNode(owner: $owner) {
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
export const onCreateEdge = /* GraphQL */ `
    subscription OnCreateEdge($owner: String) {
        onCreateEdge(owner: $owner) {
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
export const onUpdateEdge = /* GraphQL */ `
    subscription OnUpdateEdge($owner: String) {
        onUpdateEdge(owner: $owner) {
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
export const onDeleteEdge = /* GraphQL */ `
    subscription OnDeleteEdge($owner: String) {
        onDeleteEdge(owner: $owner) {
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
export const onCreateEdgeNode = /* GraphQL */ `
    subscription OnCreateEdgeNode($owner: String) {
        onCreateEdgeNode(owner: $owner) {
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
export const onUpdateEdgeNode = /* GraphQL */ `
    subscription OnUpdateEdgeNode($owner: String) {
        onUpdateEdgeNode(owner: $owner) {
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
export const onDeleteEdgeNode = /* GraphQL */ `
    subscription OnDeleteEdgeNode($owner: String) {
        onDeleteEdgeNode(owner: $owner) {
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
