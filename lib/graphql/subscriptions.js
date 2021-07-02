export const onCreateAsset = `
  subscription OnCreateAsset($owner: String, $editors: String) {
    onCreateAsset(owner: $owner, editors: $editors) {
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
export const onUpdateAsset = `
  subscription OnUpdateAsset($owner: String, $editors: String) {
    onUpdateAsset(owner: $owner, editors: $editors) {
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
export const onDeleteAsset = `
  subscription OnDeleteAsset($owner: String, $editors: String) {
    onDeleteAsset(owner: $owner, editors: $editors) {
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
export const onCreateProxy = `
  subscription OnCreateProxy($owner: String, $editors: String) {
    onCreateProxy(owner: $owner, editors: $editors) {
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
export const onUpdateProxy = `
  subscription OnUpdateProxy($owner: String, $editors: String) {
    onUpdateProxy(owner: $owner, editors: $editors) {
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
export const onDeleteProxy = `
  subscription OnDeleteProxy($owner: String, $editors: String) {
    onDeleteProxy(owner: $owner, editors: $editors) {
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
export const onCreateNode = `
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
export const onUpdateNode = `
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
export const onDeleteNode = `
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
export const onCreateEdge = `
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
export const onUpdateEdge = `
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
export const onDeleteEdge = `
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
export const onCreateEdgeNode = `
  subscription OnCreateEdgeNode($owner: String, $editors: String) {
    onCreateEdgeNode(owner: $owner, editors: $editors) {
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
export const onUpdateEdgeNode = `
  subscription OnUpdateEdgeNode($owner: String, $editors: String) {
    onUpdateEdgeNode(owner: $owner, editors: $editors) {
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
export const onDeleteEdgeNode = `
  subscription OnDeleteEdgeNode($owner: String, $editors: String) {
    onDeleteEdgeNode(owner: $owner, editors: $editors) {
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
