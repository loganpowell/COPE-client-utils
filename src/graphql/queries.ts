export const getAsset = /* GraphQL */ `
    query GetAsset($id: ID!) {
        getAsset(id: $id) {
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
export const listAssets = /* GraphQL */ `
    query ListAssets($filter: ModelAssetFilterInput, $limit: Int, $nextToken: String) {
        listAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    }
`
export const assetsByNode = /* GraphQL */ `
    query AssetsByNode(
        $nodeID: ID
        $sortDirection: ModelSortDirection
        $filter: ModelAssetFilterInput
        $limit: Int
        $nextToken: String
    ) {
        assetsByNode(
            nodeID: $nodeID
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
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
    }
`
export const assetsByType = /* GraphQL */ `
    query AssetsByType(
        $type: AssetType
        $createdAt: ModelStringKeyConditionInput
        $sortDirection: ModelSortDirection
        $filter: ModelAssetFilterInput
        $limit: Int
        $nextToken: String
    ) {
        assetsByType(
            type: $type
            createdAt: $createdAt
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
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
    }
`
export const assetsByOwnerType = /* GraphQL */ `
    query AssetsByOwnerType(
        $owner: String
        $typeCreatedAt: ModelAssetAssets_by_owner_typeCompositeKeyConditionInput
        $sortDirection: ModelSortDirection
        $filter: ModelAssetFilterInput
        $limit: Int
        $nextToken: String
    ) {
        assetsByOwnerType(
            owner: $owner
            typeCreatedAt: $typeCreatedAt
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
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
    }
`
export const getAssetPr = /* GraphQL */ `
    query GetAssetPr($id: ID!) {
        getAssetPr(id: $id) {
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
export const listAssetPrs = /* GraphQL */ `
    query ListAssetPrs($filter: ModelAssetPrFilterInput, $limit: Int, $nextToken: String) {
        listAssetPrs(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    }
`
export const assetsPrByNode = /* GraphQL */ `
    query AssetsPrByNode(
        $nodeID: ID
        $sortDirection: ModelSortDirection
        $filter: ModelAssetPrFilterInput
        $limit: Int
        $nextToken: String
    ) {
        assetsPrByNode(
            nodeID: $nodeID
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
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
    }
`
export const assetsPrByOwnerType = /* GraphQL */ `
    query AssetsPrByOwnerType(
        $owner: String
        $typeCreatedAt: ModelAssetPrAssetsPr_by_owner_typeCompositeKeyConditionInput
        $sortDirection: ModelSortDirection
        $filter: ModelAssetPrFilterInput
        $limit: Int
        $nextToken: String
    ) {
        assetsPrByOwnerType(
            owner: $owner
            typeCreatedAt: $typeCreatedAt
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
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
    }
`
export const assetsPrByType = /* GraphQL */ `
    query AssetsPrByType(
        $type: AssetType
        $createdAt: ModelStringKeyConditionInput
        $sortDirection: ModelSortDirection
        $filter: ModelAssetPrFilterInput
        $limit: Int
        $nextToken: String
    ) {
        assetsPrByType(
            type: $type
            createdAt: $createdAt
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
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
    }
`
export const getNode = /* GraphQL */ `
    query GetNode($id: ID!) {
        getNode(id: $id) {
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
export const listNodes = /* GraphQL */ `
    query ListNodes($filter: ModelNodeFilterInput, $limit: Int, $nextToken: String) {
        listNodes(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
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
            nextToken
        }
    }
`
export const nodesByStatusType = /* GraphQL */ `
    query NodesByStatusType(
        $status: NodeStatus
        $typeCreatedAt: ModelNodeNodes_by_status_type_createdAtCompositeKeyConditionInput
        $sortDirection: ModelSortDirection
        $filter: ModelNodeFilterInput
        $limit: Int
        $nextToken: String
    ) {
        nodesByStatusType(
            status: $status
            typeCreatedAt: $typeCreatedAt
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
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
            nextToken
        }
    }
`
export const nodesByOwnerStatus = /* GraphQL */ `
    query NodesByOwnerStatus(
        $owner: String
        $statusCreatedAt: ModelNodeNodes_by_owner_status_createdAtCompositeKeyConditionInput
        $sortDirection: ModelSortDirection
        $filter: ModelNodeFilterInput
        $limit: Int
        $nextToken: String
    ) {
        nodesByOwnerStatus(
            owner: $owner
            statusCreatedAt: $statusCreatedAt
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
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
            nextToken
        }
    }
`
export const nodesByOwnerType = /* GraphQL */ `
    query NodesByOwnerType(
        $owner: String
        $typeCreatedAt: ModelNodeNodes_by_owner_type_createdAtCompositeKeyConditionInput
        $sortDirection: ModelSortDirection
        $filter: ModelNodeFilterInput
        $limit: Int
        $nextToken: String
    ) {
        nodesByOwnerType(
            owner: $owner
            typeCreatedAt: $typeCreatedAt
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
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
            nextToken
        }
    }
`
export const getEdge = /* GraphQL */ `
    query GetEdge($id: ID!) {
        getEdge(id: $id) {
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
export const listEdges = /* GraphQL */ `
    query ListEdges($filter: ModelEdgeFilterInput, $limit: Int, $nextToken: String) {
        listEdges(filter: $filter, limit: $limit, nextToken: $nextToken) {
            items {
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
            nextToken
        }
    }
`
export const edgesByType = /* GraphQL */ `
    query EdgesByType(
        $type: EdgeType
        $createdAt: ModelStringKeyConditionInput
        $sortDirection: ModelSortDirection
        $filter: ModelEdgeFilterInput
        $limit: Int
        $nextToken: String
    ) {
        edgesByType(
            type: $type
            createdAt: $createdAt
            sortDirection: $sortDirection
            filter: $filter
            limit: $limit
            nextToken: $nextToken
        ) {
            items {
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
            nextToken
        }
    }
`
