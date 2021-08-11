export declare const createAsset = "\n  mutation CreateAsset(\n    $input: CreateAssetInput!\n    $condition: ModelAssetConditionInput\n  ) {\n    createAsset(input: $input, condition: $condition) {\n      id\n      node_id\n      createdAt\n      updatedAt\n      type\n      name\n      index\n      owner\n      content\n      editors\n    }\n  }\n";
export declare const updateAsset = "\n  mutation UpdateAsset(\n    $input: UpdateAssetInput!\n    $condition: ModelAssetConditionInput\n  ) {\n    updateAsset(input: $input, condition: $condition) {\n      id\n      node_id\n      createdAt\n      updatedAt\n      type\n      name\n      index\n      owner\n      content\n      editors\n    }\n  }\n";
export declare const deleteAsset = "\n  mutation DeleteAsset(\n    $input: DeleteAssetInput!\n    $condition: ModelAssetConditionInput\n  ) {\n    deleteAsset(input: $input, condition: $condition) {\n      id\n      node_id\n      createdAt\n      updatedAt\n      type\n      name\n      index\n      owner\n      content\n      editors\n    }\n  }\n";
export declare const createAssetPr = "\n  mutation CreateAssetPr(\n    $input: CreateAssetPrInput!\n    $condition: ModelAssetPrConditionInput\n  ) {\n    createAssetPr(input: $input, condition: $condition) {\n      id\n      node_id\n      createdAt\n      updatedAt\n      type\n      name\n      index\n      owner\n      content\n      editors\n    }\n  }\n";
export declare const updateAssetPr = "\n  mutation UpdateAssetPr(\n    $input: UpdateAssetPrInput!\n    $condition: ModelAssetPrConditionInput\n  ) {\n    updateAssetPr(input: $input, condition: $condition) {\n      id\n      node_id\n      createdAt\n      updatedAt\n      type\n      name\n      index\n      owner\n      content\n      editors\n    }\n  }\n";
export declare const deleteAssetPr = "\n  mutation DeleteAssetPr(\n    $input: DeleteAssetPrInput!\n    $condition: ModelAssetPrConditionInput\n  ) {\n    deleteAssetPr(input: $input, condition: $condition) {\n      id\n      node_id\n      createdAt\n      updatedAt\n      type\n      name\n      index\n      owner\n      content\n      editors\n    }\n  }\n";
export declare const createNode = "\n  mutation CreateNode(\n    $input: CreateNodeInput!\n    $condition: ModelNodeConditionInput\n  ) {\n    createNode(input: $input, condition: $condition) {\n      id\n      status\n      type\n      createdAt\n      updatedAt\n      owner\n      assets {\n        items {\n          id\n          node_id\n          createdAt\n          updatedAt\n          type\n          name\n          index\n          owner\n          content\n          editors\n        }\n        nextToken\n      }\n      assetsPr {\n        items {\n          id\n          node_id\n          createdAt\n          updatedAt\n          type\n          name\n          index\n          owner\n          content\n          editors\n        }\n        nextToken\n      }\n      edges {\n        items {\n          id\n          edge_id\n          node_id\n          owner\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n";
export declare const updateNode = "\n  mutation UpdateNode(\n    $input: UpdateNodeInput!\n    $condition: ModelNodeConditionInput\n  ) {\n    updateNode(input: $input, condition: $condition) {\n      id\n      status\n      type\n      createdAt\n      updatedAt\n      owner\n      assets {\n        items {\n          id\n          node_id\n          createdAt\n          updatedAt\n          type\n          name\n          index\n          owner\n          content\n          editors\n        }\n        nextToken\n      }\n      assetsPr {\n        items {\n          id\n          node_id\n          createdAt\n          updatedAt\n          type\n          name\n          index\n          owner\n          content\n          editors\n        }\n        nextToken\n      }\n      edges {\n        items {\n          id\n          edge_id\n          node_id\n          owner\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n";
export declare const deleteNode = "\n  mutation DeleteNode(\n    $input: DeleteNodeInput!\n    $condition: ModelNodeConditionInput\n  ) {\n    deleteNode(input: $input, condition: $condition) {\n      id\n      status\n      type\n      createdAt\n      updatedAt\n      owner\n      assets {\n        items {\n          id\n          node_id\n          createdAt\n          updatedAt\n          type\n          name\n          index\n          owner\n          content\n          editors\n        }\n        nextToken\n      }\n      assetsPr {\n        items {\n          id\n          node_id\n          createdAt\n          updatedAt\n          type\n          name\n          index\n          owner\n          content\n          editors\n        }\n        nextToken\n      }\n      edges {\n        items {\n          id\n          edge_id\n          node_id\n          owner\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n";
export declare const createEdge = "\n  mutation CreateEdge(\n    $input: CreateEdgeInput!\n    $condition: ModelEdgeConditionInput\n  ) {\n    createEdge(input: $input, condition: $condition) {\n      id\n      type\n      createdAt\n      owner\n      weight\n      updatedAt\n      nodes {\n        items {\n          id\n          edge_id\n          node_id\n          owner\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n";
export declare const updateEdge = "\n  mutation UpdateEdge(\n    $input: UpdateEdgeInput!\n    $condition: ModelEdgeConditionInput\n  ) {\n    updateEdge(input: $input, condition: $condition) {\n      id\n      type\n      createdAt\n      owner\n      weight\n      updatedAt\n      nodes {\n        items {\n          id\n          edge_id\n          node_id\n          owner\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n";
export declare const deleteEdge = "\n  mutation DeleteEdge(\n    $input: DeleteEdgeInput!\n    $condition: ModelEdgeConditionInput\n  ) {\n    deleteEdge(input: $input, condition: $condition) {\n      id\n      type\n      createdAt\n      owner\n      weight\n      updatedAt\n      nodes {\n        items {\n          id\n          edge_id\n          node_id\n          owner\n          createdAt\n          updatedAt\n        }\n        nextToken\n      }\n    }\n  }\n";
export declare const createEdgeNode = "\n  mutation CreateEdgeNode(\n    $input: CreateEdgeNodeInput!\n    $condition: ModelEdgeNodeConditionInput\n  ) {\n    createEdgeNode(input: $input, condition: $condition) {\n      id\n      edge_id\n      node_id\n      owner\n      createdAt\n      updatedAt\n      node {\n        id\n        status\n        type\n        createdAt\n        updatedAt\n        owner\n        assets {\n          nextToken\n        }\n        assetsPr {\n          nextToken\n        }\n        edges {\n          nextToken\n        }\n      }\n      edge {\n        id\n        type\n        createdAt\n        owner\n        weight\n        updatedAt\n        nodes {\n          nextToken\n        }\n      }\n    }\n  }\n";
export declare const updateEdgeNode = "\n  mutation UpdateEdgeNode(\n    $input: UpdateEdgeNodeInput!\n    $condition: ModelEdgeNodeConditionInput\n  ) {\n    updateEdgeNode(input: $input, condition: $condition) {\n      id\n      edge_id\n      node_id\n      owner\n      createdAt\n      updatedAt\n      node {\n        id\n        status\n        type\n        createdAt\n        updatedAt\n        owner\n        assets {\n          nextToken\n        }\n        assetsPr {\n          nextToken\n        }\n        edges {\n          nextToken\n        }\n      }\n      edge {\n        id\n        type\n        createdAt\n        owner\n        weight\n        updatedAt\n        nodes {\n          nextToken\n        }\n      }\n    }\n  }\n";
export declare const deleteEdgeNode = "\n  mutation DeleteEdgeNode(\n    $input: DeleteEdgeNodeInput!\n    $condition: ModelEdgeNodeConditionInput\n  ) {\n    deleteEdgeNode(input: $input, condition: $condition) {\n      id\n      edge_id\n      node_id\n      owner\n      createdAt\n      updatedAt\n      node {\n        id\n        status\n        type\n        createdAt\n        updatedAt\n        owner\n        assets {\n          nextToken\n        }\n        assetsPr {\n          nextToken\n        }\n        edges {\n          nextToken\n        }\n      }\n      edge {\n        id\n        type\n        createdAt\n        owner\n        weight\n        updatedAt\n        nodes {\n          nextToken\n        }\n      }\n    }\n  }\n";
