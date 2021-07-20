export declare const onCreateAsset = "\n  subscription OnCreateAsset($owner: String, $editors: String) {\n    onCreateAsset(owner: $owner, editors: $editors) {\n      id\n      node_id\n      createdAt\n      type\n      name\n      index\n      owner\n      content\n      editors\n      updatedAt\n    }\n  }\n";
export declare const onUpdateAsset = "\n  subscription OnUpdateAsset($owner: String, $editors: String) {\n    onUpdateAsset(owner: $owner, editors: $editors) {\n      id\n      node_id\n      createdAt\n      type\n      name\n      index\n      owner\n      content\n      editors\n      updatedAt\n    }\n  }\n";
export declare const onDeleteAsset = "\n  subscription OnDeleteAsset($owner: String, $editors: String) {\n    onDeleteAsset(owner: $owner, editors: $editors) {\n      id\n      node_id\n      createdAt\n      type\n      name\n      index\n      owner\n      content\n      editors\n      updatedAt\n    }\n  }\n";
export declare const onCreateAssetPr = "\n  subscription OnCreateAssetPr($owner: String, $editors: String) {\n    onCreateAssetPr(owner: $owner, editors: $editors) {\n      id\n      node_id\n      createdAt\n      type\n      name\n      index\n      owner\n      content\n      editors\n      updatedAt\n    }\n  }\n";
export declare const onUpdateAssetPr = "\n  subscription OnUpdateAssetPr($owner: String, $editors: String) {\n    onUpdateAssetPr(owner: $owner, editors: $editors) {\n      id\n      node_id\n      createdAt\n      type\n      name\n      index\n      owner\n      content\n      editors\n      updatedAt\n    }\n  }\n";
export declare const onDeleteAssetPr = "\n  subscription OnDeleteAssetPr($owner: String, $editors: String) {\n    onDeleteAssetPr(owner: $owner, editors: $editors) {\n      id\n      node_id\n      createdAt\n      type\n      name\n      index\n      owner\n      content\n      editors\n      updatedAt\n    }\n  }\n";
export declare const onCreateNode = "\n  subscription OnCreateNode($owner: String) {\n    onCreateNode(owner: $owner) {\n      id\n      status\n      type\n      createdAt\n      updatedAt\n      owner\n      assets {\n        items {\n          id\n          node_id\n          createdAt\n          type\n          name\n          index\n          owner\n          content\n          editors\n          updatedAt\n        }\n        nextToken\n      }\n      assetsPr {\n        items {\n          id\n          node_id\n          createdAt\n          type\n          name\n          index\n          owner\n          content\n          editors\n          updatedAt\n        }\n        nextToken\n      }\n      edges {\n        items {\n          id\n          edge_id\n          node_id\n          owner\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n";
export declare const onUpdateNode = "\n  subscription OnUpdateNode($owner: String) {\n    onUpdateNode(owner: $owner) {\n      id\n      status\n      type\n      createdAt\n      updatedAt\n      owner\n      assets {\n        items {\n          id\n          node_id\n          createdAt\n          type\n          name\n          index\n          owner\n          content\n          editors\n          updatedAt\n        }\n        nextToken\n      }\n      assetsPr {\n        items {\n          id\n          node_id\n          createdAt\n          type\n          name\n          index\n          owner\n          content\n          editors\n          updatedAt\n        }\n        nextToken\n      }\n      edges {\n        items {\n          id\n          edge_id\n          node_id\n          owner\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n";
export declare const onDeleteNode = "\n  subscription OnDeleteNode($owner: String) {\n    onDeleteNode(owner: $owner) {\n      id\n      status\n      type\n      createdAt\n      updatedAt\n      owner\n      assets {\n        items {\n          id\n          node_id\n          createdAt\n          type\n          name\n          index\n          owner\n          content\n          editors\n          updatedAt\n        }\n        nextToken\n      }\n      assetsPr {\n        items {\n          id\n          node_id\n          createdAt\n          type\n          name\n          index\n          owner\n          content\n          editors\n          updatedAt\n        }\n        nextToken\n      }\n      edges {\n        items {\n          id\n          edge_id\n          node_id\n          owner\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n";
export declare const onCreateEdge = "\n  subscription OnCreateEdge($owner: String) {\n    onCreateEdge(owner: $owner) {\n      id\n      type\n      createdAt\n      owner\n      weight\n      updatedAt\n      nodes {\n        items {\n          id\n          edge_id\n          node_id\n          owner\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n";
export declare const onUpdateEdge = "\n  subscription OnUpdateEdge($owner: String) {\n    onUpdateEdge(owner: $owner) {\n      id\n      type\n      createdAt\n      owner\n      weight\n      updatedAt\n      nodes {\n        items {\n          id\n          edge_id\n          node_id\n          owner\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n";
export declare const onDeleteEdge = "\n  subscription OnDeleteEdge($owner: String) {\n    onDeleteEdge(owner: $owner) {\n      id\n      type\n      createdAt\n      owner\n      weight\n      updatedAt\n      nodes {\n        items {\n          id\n          edge_id\n          node_id\n          owner\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n";
export declare const onCreateEdgeNode = "\n  subscription OnCreateEdgeNode($owner: String) {\n    onCreateEdgeNode(owner: $owner) {\n      id\n      edge_id\n      node_id\n      owner\n      createdAt\n      updatedAt\n      node {\n        id\n        status\n        type\n        createdAt\n        updatedAt\n        owner\n        assets {\n          nextToken\n        }\n        assetsPr {\n          nextToken\n        }\n        edges {\n          nextToken\n        }\n      }\n      edge {\n        id\n        type\n        createdAt\n        owner\n        weight\n        updatedAt\n        nodes {\n          nextToken\n        }\n      }\n    }\n  }\n";
export declare const onUpdateEdgeNode = "\n  subscription OnUpdateEdgeNode($owner: String) {\n    onUpdateEdgeNode(owner: $owner) {\n      id\n      edge_id\n      node_id\n      owner\n      createdAt\n      updatedAt\n      node {\n        id\n        status\n        type\n        createdAt\n        updatedAt\n        owner\n        assets {\n          nextToken\n        }\n        assetsPr {\n          nextToken\n        }\n        edges {\n          nextToken\n        }\n      }\n      edge {\n        id\n        type\n        createdAt\n        owner\n        weight\n        updatedAt\n        nodes {\n          nextToken\n        }\n      }\n    }\n  }\n";
export declare const onDeleteEdgeNode = "\n  subscription OnDeleteEdgeNode($owner: String) {\n    onDeleteEdgeNode(owner: $owner) {\n      id\n      edge_id\n      node_id\n      owner\n      createdAt\n      updatedAt\n      node {\n        id\n        status\n        type\n        createdAt\n        updatedAt\n        owner\n        assets {\n          nextToken\n        }\n        assetsPr {\n          nextToken\n        }\n        edges {\n          nextToken\n        }\n      }\n      edge {\n        id\n        type\n        createdAt\n        owner\n        weight\n        updatedAt\n        nodes {\n          nextToken\n        }\n      }\n    }\n  }\n";
