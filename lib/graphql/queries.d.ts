export declare const getAsset = "\n  query GetAsset($id: ID!) {\n    getAsset(id: $id) {\n      id\n      node_id\n      createdAt\n      updatedAt\n      type\n      name\n      index\n      owner\n      content\n      editors\n    }\n  }\n";
export declare const listAssets = "\n  query ListAssets(\n    $filter: ModelAssetFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        node_id\n        createdAt\n        updatedAt\n        type\n        name\n        index\n        owner\n        content\n        editors\n      }\n      nextToken\n    }\n  }\n";
export declare const assetsByNode = "\n  query AssetsByNode(\n    $node_id: ID\n    $sortDirection: ModelSortDirection\n    $filter: ModelAssetFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    assetsByNode(\n      node_id: $node_id\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        node_id\n        createdAt\n        updatedAt\n        type\n        name\n        index\n        owner\n        content\n        editors\n      }\n      nextToken\n    }\n  }\n";
export declare const assetsByType = "\n  query AssetsByType(\n    $type: AssetType\n    $createdAt: ModelStringKeyConditionInput\n    $sortDirection: ModelSortDirection\n    $filter: ModelAssetFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    assetsByType(\n      type: $type\n      createdAt: $createdAt\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        node_id\n        createdAt\n        updatedAt\n        type\n        name\n        index\n        owner\n        content\n        editors\n      }\n      nextToken\n    }\n  }\n";
export declare const assetsByOwnerType = "\n  query AssetsByOwnerType(\n    $owner: String\n    $typeCreatedAt: ModelAssetAssets_by_owner_typeCompositeKeyConditionInput\n    $sortDirection: ModelSortDirection\n    $filter: ModelAssetFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    assetsByOwnerType(\n      owner: $owner\n      typeCreatedAt: $typeCreatedAt\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        node_id\n        createdAt\n        updatedAt\n        type\n        name\n        index\n        owner\n        content\n        editors\n      }\n      nextToken\n    }\n  }\n";
export declare const getAssetPr = "\n  query GetAssetPr($id: ID!) {\n    getAssetPr(id: $id) {\n      id\n      node_id\n      createdAt\n      updatedAt\n      type\n      name\n      index\n      owner\n      content\n      editors\n    }\n  }\n";
export declare const listAssetPrs = "\n  query ListAssetPrs(\n    $filter: ModelAssetPrFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listAssetPrs(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        node_id\n        createdAt\n        updatedAt\n        type\n        name\n        index\n        owner\n        content\n        editors\n      }\n      nextToken\n    }\n  }\n";
export declare const assetsPrByNode = "\n  query AssetsPrByNode(\n    $node_id: ID\n    $sortDirection: ModelSortDirection\n    $filter: ModelAssetPrFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    assetsPrByNode(\n      node_id: $node_id\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        node_id\n        createdAt\n        updatedAt\n        type\n        name\n        index\n        owner\n        content\n        editors\n      }\n      nextToken\n    }\n  }\n";
export declare const assetsPrByOwnerType = "\n  query AssetsPrByOwnerType(\n    $owner: String\n    $typeCreatedAt: ModelAssetPrAssetsPr_by_owner_typeCompositeKeyConditionInput\n    $sortDirection: ModelSortDirection\n    $filter: ModelAssetPrFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    assetsPrByOwnerType(\n      owner: $owner\n      typeCreatedAt: $typeCreatedAt\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        node_id\n        createdAt\n        updatedAt\n        type\n        name\n        index\n        owner\n        content\n        editors\n      }\n      nextToken\n    }\n  }\n";
export declare const assetsPrByType = "\n  query AssetsPrByType(\n    $type: AssetType\n    $createdAt: ModelStringKeyConditionInput\n    $sortDirection: ModelSortDirection\n    $filter: ModelAssetPrFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    assetsPrByType(\n      type: $type\n      createdAt: $createdAt\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        node_id\n        createdAt\n        updatedAt\n        type\n        name\n        index\n        owner\n        content\n        editors\n      }\n      nextToken\n    }\n  }\n";
export declare const getNode = "\n  query GetNode($id: ID!) {\n    getNode(id: $id) {\n      id\n      status\n      type\n      createdAt\n      updatedAt\n      owner\n      assets {\n        items {\n          id\n          node_id\n          createdAt\n          updatedAt\n          type\n          name\n          index\n          owner\n          content\n          editors\n        }\n        nextToken\n      }\n      assetsPr {\n        items {\n          id\n          node_id\n          createdAt\n          updatedAt\n          type\n          name\n          index\n          owner\n          content\n          editors\n        }\n        nextToken\n      }\n      edges {\n        items {\n          id\n          edge_id\n          node_id\n          owner\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n";
export declare const listNodes = "\n  query ListNodes(\n    $filter: ModelNodeFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listNodes(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        status\n        type\n        createdAt\n        updatedAt\n        owner\n        assets {\n          nextToken\n        }\n        assetsPr {\n          nextToken\n        }\n        edges {\n          nextToken\n        }\n      }\n      nextToken\n    }\n  }\n";
export declare const nodesByStatusType = "\n  query NodesByStatusType(\n    $status: NodeStatus\n    $typeCreatedAt: ModelNodeNodes_by_status_type_createdAtCompositeKeyConditionInput\n    $sortDirection: ModelSortDirection\n    $filter: ModelNodeFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    nodesByStatusType(\n      status: $status\n      typeCreatedAt: $typeCreatedAt\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        status\n        type\n        createdAt\n        updatedAt\n        owner\n        assets {\n          nextToken\n        }\n        assetsPr {\n          nextToken\n        }\n        edges {\n          nextToken\n        }\n      }\n      nextToken\n    }\n  }\n";
export declare const nodesByOwnerStatus = "\n  query NodesByOwnerStatus(\n    $owner: String\n    $statusCreatedAt: ModelNodeNodes_by_owner_status_createdAtCompositeKeyConditionInput\n    $sortDirection: ModelSortDirection\n    $filter: ModelNodeFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    nodesByOwnerStatus(\n      owner: $owner\n      statusCreatedAt: $statusCreatedAt\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        status\n        type\n        createdAt\n        updatedAt\n        owner\n        assets {\n          nextToken\n        }\n        assetsPr {\n          nextToken\n        }\n        edges {\n          nextToken\n        }\n      }\n      nextToken\n    }\n  }\n";
export declare const nodesByOwnerType = "\n  query NodesByOwnerType(\n    $owner: String\n    $typeCreatedAt: ModelNodeNodes_by_owner_type_createdAtCompositeKeyConditionInput\n    $sortDirection: ModelSortDirection\n    $filter: ModelNodeFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    nodesByOwnerType(\n      owner: $owner\n      typeCreatedAt: $typeCreatedAt\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        status\n        type\n        createdAt\n        updatedAt\n        owner\n        assets {\n          nextToken\n        }\n        assetsPr {\n          nextToken\n        }\n        edges {\n          nextToken\n        }\n      }\n      nextToken\n    }\n  }\n";
export declare const getEdge = "\n  query GetEdge($id: ID!) {\n    getEdge(id: $id) {\n      id\n      type\n      createdAt\n      owner\n      weight\n      updatedAt\n      nodes {\n        items {\n          id\n          edge_id\n          node_id\n          owner\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n";
export declare const listEdges = "\n  query ListEdges(\n    $filter: ModelEdgeFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    listEdges(filter: $filter, limit: $limit, nextToken: $nextToken) {\n      items {\n        id\n        type\n        createdAt\n        owner\n        weight\n        updatedAt\n        nodes {\n          nextToken\n        }\n      }\n      nextToken\n    }\n  }\n";
export declare const edgesByType = "\n  query EdgesByType(\n    $type: EdgeType\n    $createdAt: ModelStringKeyConditionInput\n    $sortDirection: ModelSortDirection\n    $filter: ModelEdgeFilterInput\n    $limit: Int\n    $nextToken: String\n  ) {\n    edgesByType(\n      type: $type\n      createdAt: $createdAt\n      sortDirection: $sortDirection\n      filter: $filter\n      limit: $limit\n      nextToken: $nextToken\n    ) {\n      items {\n        id\n        type\n        createdAt\n        owner\n        weight\n        updatedAt\n        nodes {\n          nextToken\n        }\n      }\n      nextToken\n    }\n  }\n";
