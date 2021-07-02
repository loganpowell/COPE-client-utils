export const createAsset = `
  mutation CreateAsset(
    $input: CreateAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    createAsset(input: $input, condition: $condition) {
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
export const updateAsset = `
  mutation UpdateAsset(
    $input: UpdateAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    updateAsset(input: $input, condition: $condition) {
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
export const deleteAsset = `
  mutation DeleteAsset(
    $input: DeleteAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    deleteAsset(input: $input, condition: $condition) {
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
export const createProxy = `
  mutation CreateProxy(
    $input: CreateProxyInput!
    $condition: ModelProxyConditionInput
  ) {
    createProxy(input: $input, condition: $condition) {
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
export const updateProxy = `
  mutation UpdateProxy(
    $input: UpdateProxyInput!
    $condition: ModelProxyConditionInput
  ) {
    updateProxy(input: $input, condition: $condition) {
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
export const deleteProxy = `
  mutation DeleteProxy(
    $input: DeleteProxyInput!
    $condition: ModelProxyConditionInput
  ) {
    deleteProxy(input: $input, condition: $condition) {
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
export const createNode = `
  mutation CreateNode(
    $input: CreateNodeInput!
    $condition: ModelNodeConditionInput
  ) {
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
export const updateNode = `
  mutation UpdateNode(
    $input: UpdateNodeInput!
    $condition: ModelNodeConditionInput
  ) {
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
export const deleteNode = `
  mutation DeleteNode(
    $input: DeleteNodeInput!
    $condition: ModelNodeConditionInput
  ) {
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
export const createEdge = `
  mutation CreateEdge(
    $input: CreateEdgeInput!
    $condition: ModelEdgeConditionInput
  ) {
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
export const updateEdge = `
  mutation UpdateEdge(
    $input: UpdateEdgeInput!
    $condition: ModelEdgeConditionInput
  ) {
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
export const deleteEdge = `
  mutation DeleteEdge(
    $input: DeleteEdgeInput!
    $condition: ModelEdgeConditionInput
  ) {
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
export const createEdgeNode = `
  mutation CreateEdgeNode(
    $input: CreateEdgeNodeInput!
    $condition: ModelEdgeNodeConditionInput
  ) {
    createEdgeNode(input: $input, condition: $condition) {
      id
      edge_id
      node_id
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
        proxies {
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
      editors
    }
  }
`;
export const updateEdgeNode = `
  mutation UpdateEdgeNode(
    $input: UpdateEdgeNodeInput!
    $condition: ModelEdgeNodeConditionInput
  ) {
    updateEdgeNode(input: $input, condition: $condition) {
      id
      edge_id
      node_id
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
        proxies {
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
      editors
    }
  }
`;
export const deleteEdgeNode = `
  mutation DeleteEdgeNode(
    $input: DeleteEdgeNodeInput!
    $condition: ModelEdgeNodeConditionInput
  ) {
    deleteEdgeNode(input: $input, condition: $condition) {
      id
      edge_id
      node_id
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
        proxies {
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
      editors
    }
  }
`;
