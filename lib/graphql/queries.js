export const getAsset = `
  query GetAsset($id: ID!) {
    getAsset(id: $id) {
      id
      node_id
      createdAt
      type
      name
      owner
      content
      editors
      updatedAt
    }
  }
`;
export const listAssets = `
  query ListAssets(
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        node_id
        createdAt
        type
        name
        owner
        content
        editors
        updatedAt
      }
      nextToken
    }
  }
`;
export const assetsByNode = `
  query AssetsByNode(
    $node_id: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assetsByNode(
      node_id: $node_id
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        node_id
        createdAt
        type
        name
        owner
        content
        editors
        updatedAt
      }
      nextToken
    }
  }
`;
export const assetsByType = `
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
        node_id
        createdAt
        type
        name
        owner
        content
        editors
        updatedAt
      }
      nextToken
    }
  }
`;
export const assetsByOwner = `
  query AssetsByOwner(
    $owner: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    assetsByOwner(
      owner: $owner
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        node_id
        createdAt
        type
        name
        owner
        content
        editors
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProxy = `
  query GetProxy($id: ID!) {
    getProxy(id: $id) {
      id
      node_id
      createdAt
      type
      name
      owner
      content
      editors
      updatedAt
    }
  }
`;
export const listProxys = `
  query ListProxys(
    $filter: ModelProxyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProxys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        node_id
        createdAt
        type
        name
        owner
        content
        editors
        updatedAt
      }
      nextToken
    }
  }
`;
export const proxiesByNode = `
  query ProxiesByNode(
    $node_id: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProxyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    proxiesByNode(
      node_id: $node_id
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        node_id
        createdAt
        type
        name
        owner
        content
        editors
        updatedAt
      }
      nextToken
    }
  }
`;
export const proxiesByOwnerType = `
  query ProxiesByOwnerType(
    $owner: String
    $typeCreatedAt: ModelProxyProxies_by_owner_typeCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProxyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    proxiesByOwnerType(
      owner: $owner
      typeCreatedAt: $typeCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        node_id
        createdAt
        type
        name
        owner
        content
        editors
        updatedAt
      }
      nextToken
    }
  }
`;
export const proxiesByOwner = `
  query ProxiesByOwner(
    $owner: String
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProxyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    proxiesByOwner(
      owner: $owner
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        node_id
        createdAt
        type
        name
        owner
        content
        editors
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNode = `
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
          node_id
          createdAt
          type
          name
          owner
          content
          editors
          updatedAt
        }
        nextToken
      }
      proxies {
        items {
          id
          node_id
          createdAt
          type
          name
          owner
          content
          editors
          updatedAt
        }
        nextToken
      }
      edges {
        items {
          id
          edge_id
          node_id
          owner
          createdAt
          updatedAt
          editors
        }
        nextToken
      }
    }
  }
`;
export const listNodes = `
  query ListNodes(
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
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
        proxies {
          nextToken
        }
        edges {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const nodesByTypeStatus = `
  query NodesByTypeStatus(
    $type: NodeType
    $statusCreatedAt: ModelNodeNodes_by_type_status_createdAtCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nodesByTypeStatus(
      type: $type
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
        proxies {
          nextToken
        }
        edges {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const nodesByStatusType = `
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
        proxies {
          nextToken
        }
        edges {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const nodesByStatus = `
  query NodesByStatus(
    $status: NodeStatus
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelNodeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nodesByStatus(
      status: $status
      createdAt: $createdAt
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
        proxies {
          nextToken
        }
        edges {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getEdge = `
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
          edge_id
          node_id
          owner
          createdAt
          updatedAt
          editors
        }
        nextToken
      }
    }
  }
`;
export const listEdges = `
  query ListEdges(
    $filter: ModelEdgeFilterInput
    $limit: Int
    $nextToken: String
  ) {
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
`;
export const edgesByType = `
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
`;
