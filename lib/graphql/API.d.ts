export declare type CreateAssetInput = {
    id?: string | null;
    node_id: string;
    createdAt?: string | null;
    type: AssetType;
    name: string;
    owner?: string | null;
    content?: string | null;
    editors?: Array<string | null> | null;
};
export declare enum AssetType {
    DEPRECATED = "DEPRECATED",
    A_IMAGE = "A_IMAGE",
    A_OG_IMAGE = "A_OG_IMAGE",
    A_OG_AUDIO = "A_OG_AUDIO",
    A_OG_VIDEO = "A_OG_VIDEO",
    A_VIDEO = "A_VIDEO",
    A_AUDIO = "A_AUDIO",
    T_OG_TITLE = "T_OG_TITLE",
    T_OG_DESCRIPTION = "T_OG_DESCRIPTION",
    T_OG_TYPE = "T_OG_TYPE",
    T_LEDE = "T_LEDE",
    T_BODY = "T_BODY",
    M_DATA = "M_DATA",
    M_MAP = "M_MAP",
    M_VIZ = "M_VIZ",
    M_API = "M_API",
    F_PDF = "F_PDF",
    F_KML = "F_KML",
    F_SHP = "F_SHP",
    F_CSV = "F_CSV"
}
export declare type ModelAssetConditionInput = {
    node_id?: ModelIDInput | null;
    createdAt?: ModelStringInput | null;
    type?: ModelAssetTypeInput | null;
    name?: ModelStringInput | null;
    content?: ModelStringInput | null;
    and?: Array<ModelAssetConditionInput | null> | null;
    or?: Array<ModelAssetConditionInput | null> | null;
    not?: ModelAssetConditionInput | null;
};
export declare type ModelIDInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
    size?: ModelSizeInput | null;
};
export declare enum ModelAttributeTypes {
    binary = "binary",
    binarySet = "binarySet",
    bool = "bool",
    list = "list",
    map = "map",
    number = "number",
    numberSet = "numberSet",
    string = "string",
    stringSet = "stringSet",
    _null = "_null"
}
export declare type ModelSizeInput = {
    ne?: number | null;
    eq?: number | null;
    le?: number | null;
    lt?: number | null;
    ge?: number | null;
    gt?: number | null;
    between?: Array<number | null> | null;
};
export declare type ModelStringInput = {
    ne?: string | null;
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    contains?: string | null;
    notContains?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
    size?: ModelSizeInput | null;
};
export declare type ModelAssetTypeInput = {
    eq?: AssetType | null;
    ne?: AssetType | null;
};
export declare type Asset = {
    __typename: "Asset";
    id: string;
    node_id: string;
    createdAt: string;
    type: AssetType;
    name: string;
    owner?: string | null;
    content?: string | null;
    editors?: Array<string | null> | null;
    updatedAt: string;
};
export declare type Resource = {
    __typename: "Resource";
    id: string;
    node_id: string;
    createdAt: string;
    type: AssetType;
    name: string;
    content?: string | null;
    editors?: Array<string | null> | null;
};
export declare type Proxy = {
    __typename: "Proxy";
    id: string;
    node_id: string;
    createdAt: string;
    type: AssetType;
    name: string;
    owner?: string | null;
    content?: string | null;
    editors?: Array<string | null> | null;
    updatedAt: string;
};
export declare type UpdateAssetInput = {
    id: string;
    node_id?: string | null;
    createdAt?: string | null;
    type?: AssetType | null;
    name?: string | null;
    owner?: string | null;
    content?: string | null;
    editors?: Array<string | null> | null;
};
export declare type DeleteAssetInput = {
    id: string;
};
export declare type CreateProxyInput = {
    id?: string | null;
    node_id: string;
    createdAt?: string | null;
    type: AssetType;
    name: string;
    owner?: string | null;
    content?: string | null;
    editors?: Array<string | null> | null;
};
export declare type ModelProxyConditionInput = {
    node_id?: ModelIDInput | null;
    createdAt?: ModelStringInput | null;
    type?: ModelAssetTypeInput | null;
    name?: ModelStringInput | null;
    content?: ModelStringInput | null;
    and?: Array<ModelProxyConditionInput | null> | null;
    or?: Array<ModelProxyConditionInput | null> | null;
    not?: ModelProxyConditionInput | null;
};
export declare type UpdateProxyInput = {
    id: string;
    node_id?: string | null;
    createdAt?: string | null;
    type?: AssetType | null;
    name?: string | null;
    owner?: string | null;
    content?: string | null;
    editors?: Array<string | null> | null;
};
export declare type DeleteProxyInput = {
    id: string;
};
export declare type CreateNodeInput = {
    id?: string | null;
    status: NodeStatus;
    type: NodeType;
    createdAt?: string | null;
    updatedAt?: string | null;
    owner?: string | null;
};
export declare enum NodeStatus {
    DRAFT = "DRAFT",
    REVIEWED = "REVIEWED",
    PUBLISHED = "PUBLISHED",
    EDITED = "EDITED",
    DELETED = "DELETED"
}
export declare enum NodeType {
    H_AUTHOR = "H_AUTHOR",
    H_TEAM = "H_TEAM",
    A_ARTICLE = "A_ARTICLE",
    A_PAGE = "A_PAGE",
    A_APPLICATION = "A_APPLICATION",
    A_GEM = "A_GEM",
    S_ACS = "S_ACS",
    S_DECENNIAL = "S_DECENNIAL",
    S_CBP = "S_CBP",
    V_1990 = "V_1990",
    V_2000 = "V_2000",
    V_2010 = "V_2010",
    V_2020 = "V_2020",
    C_SERIES = "C_SERIES",
    C_LIST = "C_LIST"
}
export declare type ModelNodeConditionInput = {
    status?: ModelNodeStatusInput | null;
    type?: ModelNodeTypeInput | null;
    createdAt?: ModelStringInput | null;
    updatedAt?: ModelStringInput | null;
    and?: Array<ModelNodeConditionInput | null> | null;
    or?: Array<ModelNodeConditionInput | null> | null;
    not?: ModelNodeConditionInput | null;
};
export declare type ModelNodeStatusInput = {
    eq?: NodeStatus | null;
    ne?: NodeStatus | null;
};
export declare type ModelNodeTypeInput = {
    eq?: NodeType | null;
    ne?: NodeType | null;
};
export declare type Node = {
    __typename: "Node";
    id: string;
    status: NodeStatus;
    type: NodeType;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
    assets?: ModelAssetConnection | null;
    proxies?: ModelProxyConnection | null;
    edges?: ModelEdgeNodeConnection | null;
};
export declare type ModelAssetConnection = {
    __typename: "ModelAssetConnection";
    items?: Array<Asset | null> | null;
    nextToken?: string | null;
};
export declare type ModelProxyConnection = {
    __typename: "ModelProxyConnection";
    items?: Array<Proxy | null> | null;
    nextToken?: string | null;
};
export declare type ModelEdgeNodeConnection = {
    __typename: "ModelEdgeNodeConnection";
    items?: Array<EdgeNode | null> | null;
    nextToken?: string | null;
};
export declare type EdgeNode = {
    __typename: "EdgeNode";
    id: string;
    edge_id: string;
    node_id: string;
    owner?: string | null;
    createdAt: string;
    updatedAt: string;
    node: Node;
    edge: Edge;
    editors?: string | null;
};
export declare type Edge = {
    __typename: "Edge";
    id: string;
    type: EdgeType;
    createdAt: string;
    owner?: string | null;
    weight?: number | null;
    updatedAt: string;
    nodes?: ModelEdgeNodeConnection | null;
};
export declare enum EdgeType {
    AUTHORED = "AUTHORED",
    HAS_NEXT = "HAS_NEXT",
    HAS_PREVIOUS = "HAS_PREVIOUS",
    HAS_PART = "HAS_PART",
    HAS_CHILD = "HAS_CHILD"
}
export declare type UpdateNodeInput = {
    id: string;
    status?: NodeStatus | null;
    type?: NodeType | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    owner?: string | null;
};
export declare type DeleteNodeInput = {
    id: string;
};
export declare type CreateEdgeInput = {
    id?: string | null;
    type: EdgeType;
    createdAt?: string | null;
    owner?: string | null;
    weight?: number | null;
};
export declare type ModelEdgeConditionInput = {
    type?: ModelEdgeTypeInput | null;
    createdAt?: ModelStringInput | null;
    weight?: ModelIntInput | null;
    and?: Array<ModelEdgeConditionInput | null> | null;
    or?: Array<ModelEdgeConditionInput | null> | null;
    not?: ModelEdgeConditionInput | null;
};
export declare type ModelEdgeTypeInput = {
    eq?: EdgeType | null;
    ne?: EdgeType | null;
};
export declare type ModelIntInput = {
    ne?: number | null;
    eq?: number | null;
    le?: number | null;
    lt?: number | null;
    ge?: number | null;
    gt?: number | null;
    between?: Array<number | null> | null;
    attributeExists?: boolean | null;
    attributeType?: ModelAttributeTypes | null;
};
export declare type UpdateEdgeInput = {
    id: string;
    type?: EdgeType | null;
    createdAt?: string | null;
    owner?: string | null;
    weight?: number | null;
};
export declare type DeleteEdgeInput = {
    id: string;
};
export declare type CreateEdgeNodeInput = {
    id?: string | null;
    edge_id: string;
    node_id: string;
    owner?: string | null;
};
export declare type ModelEdgeNodeConditionInput = {
    edge_id?: ModelIDInput | null;
    node_id?: ModelIDInput | null;
    and?: Array<ModelEdgeNodeConditionInput | null> | null;
    or?: Array<ModelEdgeNodeConditionInput | null> | null;
    not?: ModelEdgeNodeConditionInput | null;
};
export declare type UpdateEdgeNodeInput = {
    id: string;
    edge_id?: string | null;
    node_id?: string | null;
    owner?: string | null;
};
export declare type DeleteEdgeNodeInput = {
    id: string;
};
export declare type ModelAssetFilterInput = {
    id?: ModelIDInput | null;
    node_id?: ModelIDInput | null;
    createdAt?: ModelStringInput | null;
    type?: ModelAssetTypeInput | null;
    name?: ModelStringInput | null;
    owner?: ModelStringInput | null;
    content?: ModelStringInput | null;
    editors?: ModelStringInput | null;
    and?: Array<ModelAssetFilterInput | null> | null;
    or?: Array<ModelAssetFilterInput | null> | null;
    not?: ModelAssetFilterInput | null;
};
export declare type ModelStringKeyConditionInput = {
    eq?: string | null;
    le?: string | null;
    lt?: string | null;
    ge?: string | null;
    gt?: string | null;
    between?: Array<string | null> | null;
    beginsWith?: string | null;
};
export declare enum ModelSortDirection {
    ASC = "ASC",
    DESC = "DESC"
}
export declare type ModelProxyFilterInput = {
    id?: ModelIDInput | null;
    node_id?: ModelIDInput | null;
    createdAt?: ModelStringInput | null;
    type?: ModelAssetTypeInput | null;
    name?: ModelStringInput | null;
    owner?: ModelStringInput | null;
    content?: ModelStringInput | null;
    editors?: ModelStringInput | null;
    and?: Array<ModelProxyFilterInput | null> | null;
    or?: Array<ModelProxyFilterInput | null> | null;
    not?: ModelProxyFilterInput | null;
};
export declare type ModelProxyProxies_by_owner_typeCompositeKeyConditionInput = {
    eq?: ModelProxyProxies_by_owner_typeCompositeKeyInput | null;
    le?: ModelProxyProxies_by_owner_typeCompositeKeyInput | null;
    lt?: ModelProxyProxies_by_owner_typeCompositeKeyInput | null;
    ge?: ModelProxyProxies_by_owner_typeCompositeKeyInput | null;
    gt?: ModelProxyProxies_by_owner_typeCompositeKeyInput | null;
    between?: Array<ModelProxyProxies_by_owner_typeCompositeKeyInput | null> | null;
    beginsWith?: ModelProxyProxies_by_owner_typeCompositeKeyInput | null;
};
export declare type ModelProxyProxies_by_owner_typeCompositeKeyInput = {
    type?: AssetType | null;
    createdAt?: string | null;
};
export declare type ModelNodeFilterInput = {
    id?: ModelIDInput | null;
    status?: ModelNodeStatusInput | null;
    type?: ModelNodeTypeInput | null;
    createdAt?: ModelStringInput | null;
    updatedAt?: ModelStringInput | null;
    owner?: ModelStringInput | null;
    and?: Array<ModelNodeFilterInput | null> | null;
    or?: Array<ModelNodeFilterInput | null> | null;
    not?: ModelNodeFilterInput | null;
};
export declare type ModelNodeConnection = {
    __typename: "ModelNodeConnection";
    items?: Array<Node | null> | null;
    nextToken?: string | null;
};
export declare type ModelNodeNodes_by_type_status_createdAtCompositeKeyConditionInput = {
    eq?: ModelNodeNodes_by_type_status_createdAtCompositeKeyInput | null;
    le?: ModelNodeNodes_by_type_status_createdAtCompositeKeyInput | null;
    lt?: ModelNodeNodes_by_type_status_createdAtCompositeKeyInput | null;
    ge?: ModelNodeNodes_by_type_status_createdAtCompositeKeyInput | null;
    gt?: ModelNodeNodes_by_type_status_createdAtCompositeKeyInput | null;
    between?: Array<ModelNodeNodes_by_type_status_createdAtCompositeKeyInput | null> | null;
    beginsWith?: ModelNodeNodes_by_type_status_createdAtCompositeKeyInput | null;
};
export declare type ModelNodeNodes_by_type_status_createdAtCompositeKeyInput = {
    status?: NodeStatus | null;
    createdAt?: string | null;
};
export declare type ModelNodeNodes_by_status_type_createdAtCompositeKeyConditionInput = {
    eq?: ModelNodeNodes_by_status_type_createdAtCompositeKeyInput | null;
    le?: ModelNodeNodes_by_status_type_createdAtCompositeKeyInput | null;
    lt?: ModelNodeNodes_by_status_type_createdAtCompositeKeyInput | null;
    ge?: ModelNodeNodes_by_status_type_createdAtCompositeKeyInput | null;
    gt?: ModelNodeNodes_by_status_type_createdAtCompositeKeyInput | null;
    between?: Array<ModelNodeNodes_by_status_type_createdAtCompositeKeyInput | null> | null;
    beginsWith?: ModelNodeNodes_by_status_type_createdAtCompositeKeyInput | null;
};
export declare type ModelNodeNodes_by_status_type_createdAtCompositeKeyInput = {
    type?: NodeType | null;
    createdAt?: string | null;
};
export declare type ModelEdgeFilterInput = {
    id?: ModelIDInput | null;
    type?: ModelEdgeTypeInput | null;
    createdAt?: ModelStringInput | null;
    owner?: ModelStringInput | null;
    weight?: ModelIntInput | null;
    and?: Array<ModelEdgeFilterInput | null> | null;
    or?: Array<ModelEdgeFilterInput | null> | null;
    not?: ModelEdgeFilterInput | null;
};
export declare type ModelEdgeConnection = {
    __typename: "ModelEdgeConnection";
    items?: Array<Edge | null> | null;
    nextToken?: string | null;
};
export declare type CreateAssetMutationVariables = {
    input: CreateAssetInput;
    condition?: ModelAssetConditionInput | null;
};
export declare type CreateAssetMutation = {
    createAsset?: {
        __typename: "Asset";
        id: string;
        node_id: string;
        createdAt: string;
        type: AssetType;
        name: string;
        owner?: string | null;
        content?: string | null;
        editors?: Array<string | null> | null;
        updatedAt: string;
    } | null;
};
export declare type UpdateAssetMutationVariables = {
    input: UpdateAssetInput;
    condition?: ModelAssetConditionInput | null;
};
export declare type UpdateAssetMutation = {
    updateAsset?: {
        __typename: "Asset";
        id: string;
        node_id: string;
        createdAt: string;
        type: AssetType;
        name: string;
        owner?: string | null;
        content?: string | null;
        editors?: Array<string | null> | null;
        updatedAt: string;
    } | null;
};
export declare type DeleteAssetMutationVariables = {
    input: DeleteAssetInput;
    condition?: ModelAssetConditionInput | null;
};
export declare type DeleteAssetMutation = {
    deleteAsset?: {
        __typename: "Asset";
        id: string;
        node_id: string;
        createdAt: string;
        type: AssetType;
        name: string;
        owner?: string | null;
        content?: string | null;
        editors?: Array<string | null> | null;
        updatedAt: string;
    } | null;
};
export declare type CreateProxyMutationVariables = {
    input: CreateProxyInput;
    condition?: ModelProxyConditionInput | null;
};
export declare type CreateProxyMutation = {
    createProxy?: {
        __typename: "Proxy";
        id: string;
        node_id: string;
        createdAt: string;
        type: AssetType;
        name: string;
        owner?: string | null;
        content?: string | null;
        editors?: Array<string | null> | null;
        updatedAt: string;
    } | null;
};
export declare type UpdateProxyMutationVariables = {
    input: UpdateProxyInput;
    condition?: ModelProxyConditionInput | null;
};
export declare type UpdateProxyMutation = {
    updateProxy?: {
        __typename: "Proxy";
        id: string;
        node_id: string;
        createdAt: string;
        type: AssetType;
        name: string;
        owner?: string | null;
        content?: string | null;
        editors?: Array<string | null> | null;
        updatedAt: string;
    } | null;
};
export declare type DeleteProxyMutationVariables = {
    input: DeleteProxyInput;
    condition?: ModelProxyConditionInput | null;
};
export declare type DeleteProxyMutation = {
    deleteProxy?: {
        __typename: "Proxy";
        id: string;
        node_id: string;
        createdAt: string;
        type: AssetType;
        name: string;
        owner?: string | null;
        content?: string | null;
        editors?: Array<string | null> | null;
        updatedAt: string;
    } | null;
};
export declare type CreateNodeMutationVariables = {
    input: CreateNodeInput;
    condition?: ModelNodeConditionInput | null;
};
export declare type CreateNodeMutation = {
    createNode?: {
        __typename: "Node";
        id: string;
        status: NodeStatus;
        type: NodeType;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        assets?: {
            __typename: "ModelAssetConnection";
            items?: Array<{
                __typename: "Asset";
                id: string;
                node_id: string;
                createdAt: string;
                type: AssetType;
                name: string;
                owner?: string | null;
                content?: string | null;
                editors?: Array<string | null> | null;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        proxies?: {
            __typename: "ModelProxyConnection";
            items?: Array<{
                __typename: "Proxy";
                id: string;
                node_id: string;
                createdAt: string;
                type: AssetType;
                name: string;
                owner?: string | null;
                content?: string | null;
                editors?: Array<string | null> | null;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        edges?: {
            __typename: "ModelEdgeNodeConnection";
            items?: Array<{
                __typename: "EdgeNode";
                id: string;
                edge_id: string;
                node_id: string;
                owner?: string | null;
                createdAt: string;
                updatedAt: string;
                editors?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};
export declare type UpdateNodeMutationVariables = {
    input: UpdateNodeInput;
    condition?: ModelNodeConditionInput | null;
};
export declare type UpdateNodeMutation = {
    updateNode?: {
        __typename: "Node";
        id: string;
        status: NodeStatus;
        type: NodeType;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        assets?: {
            __typename: "ModelAssetConnection";
            items?: Array<{
                __typename: "Asset";
                id: string;
                node_id: string;
                createdAt: string;
                type: AssetType;
                name: string;
                owner?: string | null;
                content?: string | null;
                editors?: Array<string | null> | null;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        proxies?: {
            __typename: "ModelProxyConnection";
            items?: Array<{
                __typename: "Proxy";
                id: string;
                node_id: string;
                createdAt: string;
                type: AssetType;
                name: string;
                owner?: string | null;
                content?: string | null;
                editors?: Array<string | null> | null;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        edges?: {
            __typename: "ModelEdgeNodeConnection";
            items?: Array<{
                __typename: "EdgeNode";
                id: string;
                edge_id: string;
                node_id: string;
                owner?: string | null;
                createdAt: string;
                updatedAt: string;
                editors?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};
export declare type DeleteNodeMutationVariables = {
    input: DeleteNodeInput;
    condition?: ModelNodeConditionInput | null;
};
export declare type DeleteNodeMutation = {
    deleteNode?: {
        __typename: "Node";
        id: string;
        status: NodeStatus;
        type: NodeType;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        assets?: {
            __typename: "ModelAssetConnection";
            items?: Array<{
                __typename: "Asset";
                id: string;
                node_id: string;
                createdAt: string;
                type: AssetType;
                name: string;
                owner?: string | null;
                content?: string | null;
                editors?: Array<string | null> | null;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        proxies?: {
            __typename: "ModelProxyConnection";
            items?: Array<{
                __typename: "Proxy";
                id: string;
                node_id: string;
                createdAt: string;
                type: AssetType;
                name: string;
                owner?: string | null;
                content?: string | null;
                editors?: Array<string | null> | null;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        edges?: {
            __typename: "ModelEdgeNodeConnection";
            items?: Array<{
                __typename: "EdgeNode";
                id: string;
                edge_id: string;
                node_id: string;
                owner?: string | null;
                createdAt: string;
                updatedAt: string;
                editors?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};
export declare type CreateEdgeMutationVariables = {
    input: CreateEdgeInput;
    condition?: ModelEdgeConditionInput | null;
};
export declare type CreateEdgeMutation = {
    createEdge?: {
        __typename: "Edge";
        id: string;
        type: EdgeType;
        createdAt: string;
        owner?: string | null;
        weight?: number | null;
        updatedAt: string;
        nodes?: {
            __typename: "ModelEdgeNodeConnection";
            items?: Array<{
                __typename: "EdgeNode";
                id: string;
                edge_id: string;
                node_id: string;
                owner?: string | null;
                createdAt: string;
                updatedAt: string;
                editors?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};
export declare type UpdateEdgeMutationVariables = {
    input: UpdateEdgeInput;
    condition?: ModelEdgeConditionInput | null;
};
export declare type UpdateEdgeMutation = {
    updateEdge?: {
        __typename: "Edge";
        id: string;
        type: EdgeType;
        createdAt: string;
        owner?: string | null;
        weight?: number | null;
        updatedAt: string;
        nodes?: {
            __typename: "ModelEdgeNodeConnection";
            items?: Array<{
                __typename: "EdgeNode";
                id: string;
                edge_id: string;
                node_id: string;
                owner?: string | null;
                createdAt: string;
                updatedAt: string;
                editors?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};
export declare type DeleteEdgeMutationVariables = {
    input: DeleteEdgeInput;
    condition?: ModelEdgeConditionInput | null;
};
export declare type DeleteEdgeMutation = {
    deleteEdge?: {
        __typename: "Edge";
        id: string;
        type: EdgeType;
        createdAt: string;
        owner?: string | null;
        weight?: number | null;
        updatedAt: string;
        nodes?: {
            __typename: "ModelEdgeNodeConnection";
            items?: Array<{
                __typename: "EdgeNode";
                id: string;
                edge_id: string;
                node_id: string;
                owner?: string | null;
                createdAt: string;
                updatedAt: string;
                editors?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};
export declare type CreateEdgeNodeMutationVariables = {
    input: CreateEdgeNodeInput;
    condition?: ModelEdgeNodeConditionInput | null;
};
export declare type CreateEdgeNodeMutation = {
    createEdgeNode?: {
        __typename: "EdgeNode";
        id: string;
        edge_id: string;
        node_id: string;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        node: {
            __typename: "Node";
            id: string;
            status: NodeStatus;
            type: NodeType;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            assets?: {
                __typename: "ModelAssetConnection";
                nextToken?: string | null;
            } | null;
            proxies?: {
                __typename: "ModelProxyConnection";
                nextToken?: string | null;
            } | null;
            edges?: {
                __typename: "ModelEdgeNodeConnection";
                nextToken?: string | null;
            } | null;
        };
        edge: {
            __typename: "Edge";
            id: string;
            type: EdgeType;
            createdAt: string;
            owner?: string | null;
            weight?: number | null;
            updatedAt: string;
            nodes?: {
                __typename: "ModelEdgeNodeConnection";
                nextToken?: string | null;
            } | null;
        };
        editors?: string | null;
    } | null;
};
export declare type UpdateEdgeNodeMutationVariables = {
    input: UpdateEdgeNodeInput;
    condition?: ModelEdgeNodeConditionInput | null;
};
export declare type UpdateEdgeNodeMutation = {
    updateEdgeNode?: {
        __typename: "EdgeNode";
        id: string;
        edge_id: string;
        node_id: string;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        node: {
            __typename: "Node";
            id: string;
            status: NodeStatus;
            type: NodeType;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            assets?: {
                __typename: "ModelAssetConnection";
                nextToken?: string | null;
            } | null;
            proxies?: {
                __typename: "ModelProxyConnection";
                nextToken?: string | null;
            } | null;
            edges?: {
                __typename: "ModelEdgeNodeConnection";
                nextToken?: string | null;
            } | null;
        };
        edge: {
            __typename: "Edge";
            id: string;
            type: EdgeType;
            createdAt: string;
            owner?: string | null;
            weight?: number | null;
            updatedAt: string;
            nodes?: {
                __typename: "ModelEdgeNodeConnection";
                nextToken?: string | null;
            } | null;
        };
        editors?: string | null;
    } | null;
};
export declare type DeleteEdgeNodeMutationVariables = {
    input: DeleteEdgeNodeInput;
    condition?: ModelEdgeNodeConditionInput | null;
};
export declare type DeleteEdgeNodeMutation = {
    deleteEdgeNode?: {
        __typename: "EdgeNode";
        id: string;
        edge_id: string;
        node_id: string;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        node: {
            __typename: "Node";
            id: string;
            status: NodeStatus;
            type: NodeType;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            assets?: {
                __typename: "ModelAssetConnection";
                nextToken?: string | null;
            } | null;
            proxies?: {
                __typename: "ModelProxyConnection";
                nextToken?: string | null;
            } | null;
            edges?: {
                __typename: "ModelEdgeNodeConnection";
                nextToken?: string | null;
            } | null;
        };
        edge: {
            __typename: "Edge";
            id: string;
            type: EdgeType;
            createdAt: string;
            owner?: string | null;
            weight?: number | null;
            updatedAt: string;
            nodes?: {
                __typename: "ModelEdgeNodeConnection";
                nextToken?: string | null;
            } | null;
        };
        editors?: string | null;
    } | null;
};
export declare type GetAssetQueryVariables = {
    id: string;
};
export declare type GetAssetQuery = {
    getAsset?: {
        __typename: "Asset";
        id: string;
        node_id: string;
        createdAt: string;
        type: AssetType;
        name: string;
        owner?: string | null;
        content?: string | null;
        editors?: Array<string | null> | null;
        updatedAt: string;
    } | null;
};
export declare type ListAssetsQueryVariables = {
    filter?: ModelAssetFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type ListAssetsQuery = {
    listAssets?: {
        __typename: "ModelAssetConnection";
        items?: Array<{
            __typename: "Asset";
            id: string;
            node_id: string;
            createdAt: string;
            type: AssetType;
            name: string;
            owner?: string | null;
            content?: string | null;
            editors?: Array<string | null> | null;
            updatedAt: string;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};
export declare type AssetsByNodeQueryVariables = {
    node_id?: string | null;
    createdAt?: ModelStringKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelAssetFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type AssetsByNodeQuery = {
    assetsByNode?: {
        __typename: "ModelAssetConnection";
        items?: Array<{
            __typename: "Asset";
            id: string;
            node_id: string;
            createdAt: string;
            type: AssetType;
            name: string;
            owner?: string | null;
            content?: string | null;
            editors?: Array<string | null> | null;
            updatedAt: string;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};
export declare type AssetsByTypeQueryVariables = {
    type?: AssetType | null;
    createdAt?: ModelStringKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelAssetFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type AssetsByTypeQuery = {
    assetsByType?: {
        __typename: "ModelAssetConnection";
        items?: Array<{
            __typename: "Asset";
            id: string;
            node_id: string;
            createdAt: string;
            type: AssetType;
            name: string;
            owner?: string | null;
            content?: string | null;
            editors?: Array<string | null> | null;
            updatedAt: string;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};
export declare type AssetsByOwnerQueryVariables = {
    owner?: string | null;
    createdAt?: ModelStringKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelAssetFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type AssetsByOwnerQuery = {
    assetsByOwner?: {
        __typename: "ModelAssetConnection";
        items?: Array<{
            __typename: "Asset";
            id: string;
            node_id: string;
            createdAt: string;
            type: AssetType;
            name: string;
            owner?: string | null;
            content?: string | null;
            editors?: Array<string | null> | null;
            updatedAt: string;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};
export declare type GetProxyQueryVariables = {
    id: string;
};
export declare type GetProxyQuery = {
    getProxy?: {
        __typename: "Proxy";
        id: string;
        node_id: string;
        createdAt: string;
        type: AssetType;
        name: string;
        owner?: string | null;
        content?: string | null;
        editors?: Array<string | null> | null;
        updatedAt: string;
    } | null;
};
export declare type ListProxysQueryVariables = {
    filter?: ModelProxyFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type ListProxysQuery = {
    listProxys?: {
        __typename: "ModelProxyConnection";
        items?: Array<{
            __typename: "Proxy";
            id: string;
            node_id: string;
            createdAt: string;
            type: AssetType;
            name: string;
            owner?: string | null;
            content?: string | null;
            editors?: Array<string | null> | null;
            updatedAt: string;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};
export declare type ProxiesByNodeQueryVariables = {
    node_id?: string | null;
    createdAt?: ModelStringKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelProxyFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type ProxiesByNodeQuery = {
    proxiesByNode?: {
        __typename: "ModelProxyConnection";
        items?: Array<{
            __typename: "Proxy";
            id: string;
            node_id: string;
            createdAt: string;
            type: AssetType;
            name: string;
            owner?: string | null;
            content?: string | null;
            editors?: Array<string | null> | null;
            updatedAt: string;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};
export declare type ProxiesByOwnerTypeQueryVariables = {
    owner?: string | null;
    typeCreatedAt?: ModelProxyProxies_by_owner_typeCompositeKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelProxyFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type ProxiesByOwnerTypeQuery = {
    proxiesByOwnerType?: {
        __typename: "ModelProxyConnection";
        items?: Array<{
            __typename: "Proxy";
            id: string;
            node_id: string;
            createdAt: string;
            type: AssetType;
            name: string;
            owner?: string | null;
            content?: string | null;
            editors?: Array<string | null> | null;
            updatedAt: string;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};
export declare type ProxiesByOwnerQueryVariables = {
    owner?: string | null;
    createdAt?: ModelStringKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelProxyFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type ProxiesByOwnerQuery = {
    proxiesByOwner?: {
        __typename: "ModelProxyConnection";
        items?: Array<{
            __typename: "Proxy";
            id: string;
            node_id: string;
            createdAt: string;
            type: AssetType;
            name: string;
            owner?: string | null;
            content?: string | null;
            editors?: Array<string | null> | null;
            updatedAt: string;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};
export declare type GetNodeQueryVariables = {
    id: string;
};
export declare type GetNodeQuery = {
    getNode?: {
        __typename: "Node";
        id: string;
        status: NodeStatus;
        type: NodeType;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        assets?: {
            __typename: "ModelAssetConnection";
            items?: Array<{
                __typename: "Asset";
                id: string;
                node_id: string;
                createdAt: string;
                type: AssetType;
                name: string;
                owner?: string | null;
                content?: string | null;
                editors?: Array<string | null> | null;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        proxies?: {
            __typename: "ModelProxyConnection";
            items?: Array<{
                __typename: "Proxy";
                id: string;
                node_id: string;
                createdAt: string;
                type: AssetType;
                name: string;
                owner?: string | null;
                content?: string | null;
                editors?: Array<string | null> | null;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        edges?: {
            __typename: "ModelEdgeNodeConnection";
            items?: Array<{
                __typename: "EdgeNode";
                id: string;
                edge_id: string;
                node_id: string;
                owner?: string | null;
                createdAt: string;
                updatedAt: string;
                editors?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};
export declare type ListNodesQueryVariables = {
    filter?: ModelNodeFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type ListNodesQuery = {
    listNodes?: {
        __typename: "ModelNodeConnection";
        items?: Array<{
            __typename: "Node";
            id: string;
            status: NodeStatus;
            type: NodeType;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            assets?: {
                __typename: "ModelAssetConnection";
                nextToken?: string | null;
            } | null;
            proxies?: {
                __typename: "ModelProxyConnection";
                nextToken?: string | null;
            } | null;
            edges?: {
                __typename: "ModelEdgeNodeConnection";
                nextToken?: string | null;
            } | null;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};
export declare type NodesByTypeStatusQueryVariables = {
    type?: NodeType | null;
    statusCreatedAt?: ModelNodeNodes_by_type_status_createdAtCompositeKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelNodeFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type NodesByTypeStatusQuery = {
    nodesByTypeStatus?: {
        __typename: "ModelNodeConnection";
        items?: Array<{
            __typename: "Node";
            id: string;
            status: NodeStatus;
            type: NodeType;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            assets?: {
                __typename: "ModelAssetConnection";
                nextToken?: string | null;
            } | null;
            proxies?: {
                __typename: "ModelProxyConnection";
                nextToken?: string | null;
            } | null;
            edges?: {
                __typename: "ModelEdgeNodeConnection";
                nextToken?: string | null;
            } | null;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};
export declare type NodesByStatusTypeQueryVariables = {
    status?: NodeStatus | null;
    typeCreatedAt?: ModelNodeNodes_by_status_type_createdAtCompositeKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelNodeFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type NodesByStatusTypeQuery = {
    nodesByStatusType?: {
        __typename: "ModelNodeConnection";
        items?: Array<{
            __typename: "Node";
            id: string;
            status: NodeStatus;
            type: NodeType;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            assets?: {
                __typename: "ModelAssetConnection";
                nextToken?: string | null;
            } | null;
            proxies?: {
                __typename: "ModelProxyConnection";
                nextToken?: string | null;
            } | null;
            edges?: {
                __typename: "ModelEdgeNodeConnection";
                nextToken?: string | null;
            } | null;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};
export declare type NodesByStatusQueryVariables = {
    status?: NodeStatus | null;
    createdAt?: ModelStringKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelNodeFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type NodesByStatusQuery = {
    nodesByStatus?: {
        __typename: "ModelNodeConnection";
        items?: Array<{
            __typename: "Node";
            id: string;
            status: NodeStatus;
            type: NodeType;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            assets?: {
                __typename: "ModelAssetConnection";
                nextToken?: string | null;
            } | null;
            proxies?: {
                __typename: "ModelProxyConnection";
                nextToken?: string | null;
            } | null;
            edges?: {
                __typename: "ModelEdgeNodeConnection";
                nextToken?: string | null;
            } | null;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};
export declare type GetEdgeQueryVariables = {
    id: string;
};
export declare type GetEdgeQuery = {
    getEdge?: {
        __typename: "Edge";
        id: string;
        type: EdgeType;
        createdAt: string;
        owner?: string | null;
        weight?: number | null;
        updatedAt: string;
        nodes?: {
            __typename: "ModelEdgeNodeConnection";
            items?: Array<{
                __typename: "EdgeNode";
                id: string;
                edge_id: string;
                node_id: string;
                owner?: string | null;
                createdAt: string;
                updatedAt: string;
                editors?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};
export declare type ListEdgesQueryVariables = {
    filter?: ModelEdgeFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type ListEdgesQuery = {
    listEdges?: {
        __typename: "ModelEdgeConnection";
        items?: Array<{
            __typename: "Edge";
            id: string;
            type: EdgeType;
            createdAt: string;
            owner?: string | null;
            weight?: number | null;
            updatedAt: string;
            nodes?: {
                __typename: "ModelEdgeNodeConnection";
                nextToken?: string | null;
            } | null;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};
export declare type EdgesByTypeQueryVariables = {
    type?: EdgeType | null;
    createdAt?: ModelStringKeyConditionInput | null;
    sortDirection?: ModelSortDirection | null;
    filter?: ModelEdgeFilterInput | null;
    limit?: number | null;
    nextToken?: string | null;
};
export declare type EdgesByTypeQuery = {
    edgesByType?: {
        __typename: "ModelEdgeConnection";
        items?: Array<{
            __typename: "Edge";
            id: string;
            type: EdgeType;
            createdAt: string;
            owner?: string | null;
            weight?: number | null;
            updatedAt: string;
            nodes?: {
                __typename: "ModelEdgeNodeConnection";
                nextToken?: string | null;
            } | null;
        } | null> | null;
        nextToken?: string | null;
    } | null;
};
export declare type OnCreateAssetSubscriptionVariables = {
    owner?: string | null;
    editors?: string | null;
};
export declare type OnCreateAssetSubscription = {
    onCreateAsset?: {
        __typename: "Asset";
        id: string;
        node_id: string;
        createdAt: string;
        type: AssetType;
        name: string;
        owner?: string | null;
        content?: string | null;
        editors?: Array<string | null> | null;
        updatedAt: string;
    } | null;
};
export declare type OnUpdateAssetSubscriptionVariables = {
    owner?: string | null;
    editors?: string | null;
};
export declare type OnUpdateAssetSubscription = {
    onUpdateAsset?: {
        __typename: "Asset";
        id: string;
        node_id: string;
        createdAt: string;
        type: AssetType;
        name: string;
        owner?: string | null;
        content?: string | null;
        editors?: Array<string | null> | null;
        updatedAt: string;
    } | null;
};
export declare type OnDeleteAssetSubscriptionVariables = {
    owner?: string | null;
    editors?: string | null;
};
export declare type OnDeleteAssetSubscription = {
    onDeleteAsset?: {
        __typename: "Asset";
        id: string;
        node_id: string;
        createdAt: string;
        type: AssetType;
        name: string;
        owner?: string | null;
        content?: string | null;
        editors?: Array<string | null> | null;
        updatedAt: string;
    } | null;
};
export declare type OnCreateProxySubscriptionVariables = {
    owner?: string | null;
    editors?: string | null;
};
export declare type OnCreateProxySubscription = {
    onCreateProxy?: {
        __typename: "Proxy";
        id: string;
        node_id: string;
        createdAt: string;
        type: AssetType;
        name: string;
        owner?: string | null;
        content?: string | null;
        editors?: Array<string | null> | null;
        updatedAt: string;
    } | null;
};
export declare type OnUpdateProxySubscriptionVariables = {
    owner?: string | null;
    editors?: string | null;
};
export declare type OnUpdateProxySubscription = {
    onUpdateProxy?: {
        __typename: "Proxy";
        id: string;
        node_id: string;
        createdAt: string;
        type: AssetType;
        name: string;
        owner?: string | null;
        content?: string | null;
        editors?: Array<string | null> | null;
        updatedAt: string;
    } | null;
};
export declare type OnDeleteProxySubscriptionVariables = {
    owner?: string | null;
    editors?: string | null;
};
export declare type OnDeleteProxySubscription = {
    onDeleteProxy?: {
        __typename: "Proxy";
        id: string;
        node_id: string;
        createdAt: string;
        type: AssetType;
        name: string;
        owner?: string | null;
        content?: string | null;
        editors?: Array<string | null> | null;
        updatedAt: string;
    } | null;
};
export declare type OnCreateNodeSubscriptionVariables = {
    owner?: string | null;
};
export declare type OnCreateNodeSubscription = {
    onCreateNode?: {
        __typename: "Node";
        id: string;
        status: NodeStatus;
        type: NodeType;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        assets?: {
            __typename: "ModelAssetConnection";
            items?: Array<{
                __typename: "Asset";
                id: string;
                node_id: string;
                createdAt: string;
                type: AssetType;
                name: string;
                owner?: string | null;
                content?: string | null;
                editors?: Array<string | null> | null;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        proxies?: {
            __typename: "ModelProxyConnection";
            items?: Array<{
                __typename: "Proxy";
                id: string;
                node_id: string;
                createdAt: string;
                type: AssetType;
                name: string;
                owner?: string | null;
                content?: string | null;
                editors?: Array<string | null> | null;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        edges?: {
            __typename: "ModelEdgeNodeConnection";
            items?: Array<{
                __typename: "EdgeNode";
                id: string;
                edge_id: string;
                node_id: string;
                owner?: string | null;
                createdAt: string;
                updatedAt: string;
                editors?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};
export declare type OnUpdateNodeSubscriptionVariables = {
    owner?: string | null;
};
export declare type OnUpdateNodeSubscription = {
    onUpdateNode?: {
        __typename: "Node";
        id: string;
        status: NodeStatus;
        type: NodeType;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        assets?: {
            __typename: "ModelAssetConnection";
            items?: Array<{
                __typename: "Asset";
                id: string;
                node_id: string;
                createdAt: string;
                type: AssetType;
                name: string;
                owner?: string | null;
                content?: string | null;
                editors?: Array<string | null> | null;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        proxies?: {
            __typename: "ModelProxyConnection";
            items?: Array<{
                __typename: "Proxy";
                id: string;
                node_id: string;
                createdAt: string;
                type: AssetType;
                name: string;
                owner?: string | null;
                content?: string | null;
                editors?: Array<string | null> | null;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        edges?: {
            __typename: "ModelEdgeNodeConnection";
            items?: Array<{
                __typename: "EdgeNode";
                id: string;
                edge_id: string;
                node_id: string;
                owner?: string | null;
                createdAt: string;
                updatedAt: string;
                editors?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};
export declare type OnDeleteNodeSubscriptionVariables = {
    owner?: string | null;
};
export declare type OnDeleteNodeSubscription = {
    onDeleteNode?: {
        __typename: "Node";
        id: string;
        status: NodeStatus;
        type: NodeType;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
        assets?: {
            __typename: "ModelAssetConnection";
            items?: Array<{
                __typename: "Asset";
                id: string;
                node_id: string;
                createdAt: string;
                type: AssetType;
                name: string;
                owner?: string | null;
                content?: string | null;
                editors?: Array<string | null> | null;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        proxies?: {
            __typename: "ModelProxyConnection";
            items?: Array<{
                __typename: "Proxy";
                id: string;
                node_id: string;
                createdAt: string;
                type: AssetType;
                name: string;
                owner?: string | null;
                content?: string | null;
                editors?: Array<string | null> | null;
                updatedAt: string;
            } | null> | null;
            nextToken?: string | null;
        } | null;
        edges?: {
            __typename: "ModelEdgeNodeConnection";
            items?: Array<{
                __typename: "EdgeNode";
                id: string;
                edge_id: string;
                node_id: string;
                owner?: string | null;
                createdAt: string;
                updatedAt: string;
                editors?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};
export declare type OnCreateEdgeSubscriptionVariables = {
    owner?: string | null;
};
export declare type OnCreateEdgeSubscription = {
    onCreateEdge?: {
        __typename: "Edge";
        id: string;
        type: EdgeType;
        createdAt: string;
        owner?: string | null;
        weight?: number | null;
        updatedAt: string;
        nodes?: {
            __typename: "ModelEdgeNodeConnection";
            items?: Array<{
                __typename: "EdgeNode";
                id: string;
                edge_id: string;
                node_id: string;
                owner?: string | null;
                createdAt: string;
                updatedAt: string;
                editors?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};
export declare type OnUpdateEdgeSubscriptionVariables = {
    owner?: string | null;
};
export declare type OnUpdateEdgeSubscription = {
    onUpdateEdge?: {
        __typename: "Edge";
        id: string;
        type: EdgeType;
        createdAt: string;
        owner?: string | null;
        weight?: number | null;
        updatedAt: string;
        nodes?: {
            __typename: "ModelEdgeNodeConnection";
            items?: Array<{
                __typename: "EdgeNode";
                id: string;
                edge_id: string;
                node_id: string;
                owner?: string | null;
                createdAt: string;
                updatedAt: string;
                editors?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};
export declare type OnDeleteEdgeSubscriptionVariables = {
    owner?: string | null;
};
export declare type OnDeleteEdgeSubscription = {
    onDeleteEdge?: {
        __typename: "Edge";
        id: string;
        type: EdgeType;
        createdAt: string;
        owner?: string | null;
        weight?: number | null;
        updatedAt: string;
        nodes?: {
            __typename: "ModelEdgeNodeConnection";
            items?: Array<{
                __typename: "EdgeNode";
                id: string;
                edge_id: string;
                node_id: string;
                owner?: string | null;
                createdAt: string;
                updatedAt: string;
                editors?: string | null;
            } | null> | null;
            nextToken?: string | null;
        } | null;
    } | null;
};
export declare type OnCreateEdgeNodeSubscriptionVariables = {
    owner?: string | null;
    editors?: string | null;
};
export declare type OnCreateEdgeNodeSubscription = {
    onCreateEdgeNode?: {
        __typename: "EdgeNode";
        id: string;
        edge_id: string;
        node_id: string;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        node: {
            __typename: "Node";
            id: string;
            status: NodeStatus;
            type: NodeType;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            assets?: {
                __typename: "ModelAssetConnection";
                nextToken?: string | null;
            } | null;
            proxies?: {
                __typename: "ModelProxyConnection";
                nextToken?: string | null;
            } | null;
            edges?: {
                __typename: "ModelEdgeNodeConnection";
                nextToken?: string | null;
            } | null;
        };
        edge: {
            __typename: "Edge";
            id: string;
            type: EdgeType;
            createdAt: string;
            owner?: string | null;
            weight?: number | null;
            updatedAt: string;
            nodes?: {
                __typename: "ModelEdgeNodeConnection";
                nextToken?: string | null;
            } | null;
        };
        editors?: string | null;
    } | null;
};
export declare type OnUpdateEdgeNodeSubscriptionVariables = {
    owner?: string | null;
    editors?: string | null;
};
export declare type OnUpdateEdgeNodeSubscription = {
    onUpdateEdgeNode?: {
        __typename: "EdgeNode";
        id: string;
        edge_id: string;
        node_id: string;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        node: {
            __typename: "Node";
            id: string;
            status: NodeStatus;
            type: NodeType;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            assets?: {
                __typename: "ModelAssetConnection";
                nextToken?: string | null;
            } | null;
            proxies?: {
                __typename: "ModelProxyConnection";
                nextToken?: string | null;
            } | null;
            edges?: {
                __typename: "ModelEdgeNodeConnection";
                nextToken?: string | null;
            } | null;
        };
        edge: {
            __typename: "Edge";
            id: string;
            type: EdgeType;
            createdAt: string;
            owner?: string | null;
            weight?: number | null;
            updatedAt: string;
            nodes?: {
                __typename: "ModelEdgeNodeConnection";
                nextToken?: string | null;
            } | null;
        };
        editors?: string | null;
    } | null;
};
export declare type OnDeleteEdgeNodeSubscriptionVariables = {
    owner?: string | null;
    editors?: string | null;
};
export declare type OnDeleteEdgeNodeSubscription = {
    onDeleteEdgeNode?: {
        __typename: "EdgeNode";
        id: string;
        edge_id: string;
        node_id: string;
        owner?: string | null;
        createdAt: string;
        updatedAt: string;
        node: {
            __typename: "Node";
            id: string;
            status: NodeStatus;
            type: NodeType;
            createdAt: string;
            updatedAt: string;
            owner?: string | null;
            assets?: {
                __typename: "ModelAssetConnection";
                nextToken?: string | null;
            } | null;
            proxies?: {
                __typename: "ModelProxyConnection";
                nextToken?: string | null;
            } | null;
            edges?: {
                __typename: "ModelEdgeNodeConnection";
                nextToken?: string | null;
            } | null;
        };
        edge: {
            __typename: "Edge";
            id: string;
            type: EdgeType;
            createdAt: string;
            owner?: string | null;
            weight?: number | null;
            updatedAt: string;
            nodes?: {
                __typename: "ModelEdgeNodeConnection";
                nextToken?: string | null;
            } | null;
        };
        editors?: string | null;
    } | null;
};