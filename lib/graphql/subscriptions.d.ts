export declare const onCreateAsset = "\n  subscription OnCreateAsset($owner: String, $editors: String) {\n    onCreateAsset(owner: $owner, editors: $editors) {\n      id\n      node_id\n      createdAt\n      type\n      name\n      owner\n      content\n      editors\n      updatedAt\n    }\n  }\n";
export declare const onUpdateAsset = "\n  subscription OnUpdateAsset($owner: String, $editors: String) {\n    onUpdateAsset(owner: $owner, editors: $editors) {\n      id\n      node_id\n      createdAt\n      type\n      name\n      owner\n      content\n      editors\n      updatedAt\n    }\n  }\n";
export declare const onDeleteAsset = "\n  subscription OnDeleteAsset($owner: String, $editors: String) {\n    onDeleteAsset(owner: $owner, editors: $editors) {\n      id\n      node_id\n      createdAt\n      type\n      name\n      owner\n      content\n      editors\n      updatedAt\n    }\n  }\n";
export declare const onCreateProxy = "\n  subscription OnCreateProxy($owner: String, $editors: String) {\n    onCreateProxy(owner: $owner, editors: $editors) {\n      id\n      node_id\n      createdAt\n      type\n      name\n      owner\n      content\n      editors\n      updatedAt\n    }\n  }\n";
export declare const onUpdateProxy = "\n  subscription OnUpdateProxy($owner: String, $editors: String) {\n    onUpdateProxy(owner: $owner, editors: $editors) {\n      id\n      node_id\n      createdAt\n      type\n      name\n      owner\n      content\n      editors\n      updatedAt\n    }\n  }\n";
export declare const onDeleteProxy = "\n  subscription OnDeleteProxy($owner: String, $editors: String) {\n    onDeleteProxy(owner: $owner, editors: $editors) {\n      id\n      node_id\n      createdAt\n      type\n      name\n      owner\n      content\n      editors\n      updatedAt\n    }\n  }\n";
export declare const onCreateNode = "\n  subscription OnCreateNode($owner: String) {\n    onCreateNode(owner: $owner) {\n      id\n      status\n      type\n      createdAt\n      updatedAt\n      owner\n      assets {\n        items {\n          id\n          node_id\n          createdAt\n          type\n          name\n          owner\n          content\n          editors\n          updatedAt\n        }\n        nextToken\n      }\n      proxies {\n        items {\n          id\n          node_id\n          createdAt\n          type\n          name\n          owner\n          content\n          editors\n          updatedAt\n        }\n        nextToken\n      }\n      edges {\n        items {\n          id\n          edge_id\n          node_id\n          owner\n          createdAt\n          updatedAt\n          editors\n        }\n        nextToken\n      }\n    }\n  }\n";
export declare const onUpdateNode = "\n  subscription OnUpdateNode($owner: String) {\n    onUpdateNode(owner: $owner) {\n      id\n      status\n      type\n      createdAt\n      updatedAt\n      owner\n      assets {\n        items {\n          id\n          node_id\n          createdAt\n          type\n          name\n          owner\n          content\n          editors\n          updatedAt\n        }\n        nextToken\n      }\n      proxies {\n        items {\n          id\n          node_id\n          createdAt\n          type\n          name\n          owner\n          content\n          editors\n          updatedAt\n        }\n        nextToken\n      }\n      edges {\n        items {\n          id\n          edge_id\n          node_id\n          owner\n          createdAt\n          updatedAt\n          editors\n        }\n        nextToken\n      }\n    }\n  }\n";
export declare const onDeleteNode = "\n  subscription OnDeleteNode($owner: String) {\n    onDeleteNode(owner: $owner) {\n      id\n      status\n      type\n      createdAt\n      updatedAt\n      owner\n      assets {\n        items {\n          id\n          node_id\n          createdAt\n          type\n          name\n          owner\n          content\n          editors\n          updatedAt\n        }\n        nextToken\n      }\n      proxies {\n        items {\n          id\n          node_id\n          createdAt\n          type\n          name\n          owner\n          content\n          editors\n          updatedAt\n        }\n        nextToken\n      }\n      edges {\n        items {\n          id\n          edge_id\n          node_id\n          owner\n          createdAt\n          updatedAt\n          editors\n        }\n        nextToken\n      }\n    }\n  }\n";
export declare const onCreateEdge = "\n  subscription OnCreateEdge($owner: String) {\n    onCreateEdge(owner: $owner) {\n      id\n      type\n      createdAt\n      owner\n      weight\n      updatedAt\n      nodes {\n        items {\n          id\n          edge_id\n          node_id\n          owner\n          createdAt\n          updatedAt\n          editors\n        }\n        nextToken\n      }\n    }\n  }\n";
export declare const onUpdateEdge = "\n  subscription OnUpdateEdge($owner: String) {\n    onUpdateEdge(owner: $owner) {\n      id\n      type\n      createdAt\n      owner\n      weight\n      updatedAt\n      nodes {\n        items {\n          id\n          edge_id\n          node_id\n          owner\n          createdAt\n          updatedAt\n          editors\n        }\n        nextToken\n      }\n    }\n  }\n";
export declare const onDeleteEdge = "\n  subscription OnDeleteEdge($owner: String) {\n    onDeleteEdge(owner: $owner) {\n      id\n      type\n      createdAt\n      owner\n      weight\n      updatedAt\n      nodes {\n        items {\n          id\n          edge_id\n          node_id\n          owner\n          createdAt\n          updatedAt\n          editors\n        }\n        nextToken\n      }\n    }\n  }\n";
export declare const onCreateEdgeNode = "\n  subscription OnCreateEdgeNode($owner: String, $editors: String) {\n    onCreateEdgeNode(owner: $owner, editors: $editors) {\n      id\n      edge_id\n      node_id\n      owner\n      createdAt\n      updatedAt\n      node {\n        id\n        status\n        type\n        createdAt\n        updatedAt\n        owner\n        assets {\n          nextToken\n        }\n        proxies {\n          nextToken\n        }\n        edges {\n          nextToken\n        }\n      }\n      edge {\n        id\n        type\n        createdAt\n        owner\n        weight\n        updatedAt\n        nodes {\n          nextToken\n        }\n      }\n      editors\n    }\n  }\n";
export declare const onUpdateEdgeNode = "\n  subscription OnUpdateEdgeNode($owner: String, $editors: String) {\n    onUpdateEdgeNode(owner: $owner, editors: $editors) {\n      id\n      edge_id\n      node_id\n      owner\n      createdAt\n      updatedAt\n      node {\n        id\n        status\n        type\n        createdAt\n        updatedAt\n        owner\n        assets {\n          nextToken\n        }\n        proxies {\n          nextToken\n        }\n        edges {\n          nextToken\n        }\n      }\n      edge {\n        id\n        type\n        createdAt\n        owner\n        weight\n        updatedAt\n        nodes {\n          nextToken\n        }\n      }\n      editors\n    }\n  }\n";
export declare const onDeleteEdgeNode = "\n  subscription OnDeleteEdgeNode($owner: String, $editors: String) {\n    onDeleteEdgeNode(owner: $owner, editors: $editors) {\n      id\n      edge_id\n      node_id\n      owner\n      createdAt\n      updatedAt\n      node {\n        id\n        status\n        type\n        createdAt\n        updatedAt\n        owner\n        assets {\n          nextToken\n        }\n        proxies {\n          nextToken\n        }\n        edges {\n          nextToken\n        }\n      }\n      edge {\n        id\n        type\n        createdAt\n        owner\n        weight\n        updatedAt\n        nodes {\n          nextToken\n        }\n      }\n      editors\n    }\n  }\n";