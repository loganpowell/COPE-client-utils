export const onCreateAsset: "\n  subscription OnCreateAsset($owner: String, $editors: String) {\n    onCreateAsset(owner: $owner, editors: $editors) {\n      id\n      node_id\n      createdAt\n      type\n      name\n      owner\n      content\n      editors\n      updatedAt\n    }\n  }\n";
export const onUpdateAsset: "\n  subscription OnUpdateAsset($owner: String, $editors: String) {\n    onUpdateAsset(owner: $owner, editors: $editors) {\n      id\n      node_id\n      createdAt\n      type\n      name\n      owner\n      content\n      editors\n      updatedAt\n    }\n  }\n";
export const onDeleteAsset: "\n  subscription OnDeleteAsset($owner: String, $editors: String) {\n    onDeleteAsset(owner: $owner, editors: $editors) {\n      id\n      node_id\n      createdAt\n      type\n      name\n      owner\n      content\n      editors\n      updatedAt\n    }\n  }\n";
export const onCreate_Asset: "\n  subscription OnCreate_Asset($owner: String, $editors: String) {\n    onCreate_Asset(owner: $owner, editors: $editors) {\n      id\n      node_id\n      createdAt\n      type\n      name\n      owner\n      content\n      editors\n      updatedAt\n    }\n  }\n";
export const onUpdate_Asset: "\n  subscription OnUpdate_Asset($owner: String, $editors: String) {\n    onUpdate_Asset(owner: $owner, editors: $editors) {\n      id\n      node_id\n      createdAt\n      type\n      name\n      owner\n      content\n      editors\n      updatedAt\n    }\n  }\n";
export const onDelete_Asset: "\n  subscription OnDelete_Asset($owner: String, $editors: String) {\n    onDelete_Asset(owner: $owner, editors: $editors) {\n      id\n      node_id\n      createdAt\n      type\n      name\n      owner\n      content\n      editors\n      updatedAt\n    }\n  }\n";
export const onCreateNode: "\n  subscription OnCreateNode($owner: String) {\n    onCreateNode(owner: $owner) {\n      id\n      status\n      type\n      createdAt\n      updatedAt\n      owner\n      assets {\n        nextToken\n      }\n      _assets {\n        nextToken\n      }\n      edges {\n        nextToken\n      }\n    }\n  }\n";
export const onUpdateNode: "\n  subscription OnUpdateNode($owner: String) {\n    onUpdateNode(owner: $owner) {\n      id\n      status\n      type\n      createdAt\n      updatedAt\n      owner\n      assets {\n        nextToken\n      }\n      _assets {\n        nextToken\n      }\n      edges {\n        nextToken\n      }\n    }\n  }\n";
export const onDeleteNode: "\n  subscription OnDeleteNode($owner: String) {\n    onDeleteNode(owner: $owner) {\n      id\n      status\n      type\n      createdAt\n      updatedAt\n      owner\n      assets {\n        nextToken\n      }\n      _assets {\n        nextToken\n      }\n      edges {\n        nextToken\n      }\n    }\n  }\n";
export const onCreateEdge: "\n  subscription OnCreateEdge($owner: String) {\n    onCreateEdge(owner: $owner) {\n      id\n      type\n      createdAt\n      owner\n      weight\n      updatedAt\n      nodes {\n        nextToken\n      }\n    }\n  }\n";
export const onUpdateEdge: "\n  subscription OnUpdateEdge($owner: String) {\n    onUpdateEdge(owner: $owner) {\n      id\n      type\n      createdAt\n      owner\n      weight\n      updatedAt\n      nodes {\n        nextToken\n      }\n    }\n  }\n";
export const onDeleteEdge: "\n  subscription OnDeleteEdge($owner: String) {\n    onDeleteEdge(owner: $owner) {\n      id\n      type\n      createdAt\n      owner\n      weight\n      updatedAt\n      nodes {\n        nextToken\n      }\n    }\n  }\n";
export const onCreateEdgeNode: "\n  subscription OnCreateEdgeNode($owner: String, $editors: String) {\n    onCreateEdgeNode(owner: $owner, editors: $editors) {\n      id\n      edge_id\n      node_id\n      owner\n      createdAt\n      updatedAt\n      node {\n        id\n        status\n        type\n        createdAt\n        updatedAt\n        owner\n      }\n      edge {\n        id\n        type\n        createdAt\n        owner\n        weight\n        updatedAt\n      }\n      editors\n    }\n  }\n";
export const onUpdateEdgeNode: "\n  subscription OnUpdateEdgeNode($owner: String, $editors: String) {\n    onUpdateEdgeNode(owner: $owner, editors: $editors) {\n      id\n      edge_id\n      node_id\n      owner\n      createdAt\n      updatedAt\n      node {\n        id\n        status\n        type\n        createdAt\n        updatedAt\n        owner\n      }\n      edge {\n        id\n        type\n        createdAt\n        owner\n        weight\n        updatedAt\n      }\n      editors\n    }\n  }\n";
export const onDeleteEdgeNode: "\n  subscription OnDeleteEdgeNode($owner: String, $editors: String) {\n    onDeleteEdgeNode(owner: $owner, editors: $editors) {\n      id\n      edge_id\n      node_id\n      owner\n      createdAt\n      updatedAt\n      node {\n        id\n        status\n        type\n        createdAt\n        updatedAt\n        owner\n      }\n      edge {\n        id\n        type\n        createdAt\n        owner\n        weight\n        updatedAt\n      }\n      editors\n    }\n  }\n";
