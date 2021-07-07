import * as api from "../graphql/API";
export declare type Node = {
    type: api.NodeType;
    status: api.NodeStatus;
    id?: string;
    createdAt?: string;
} | null;
export declare type Edge = {
    type: api.EdgeType;
    id?: string;
    createdAt?: string;
    weight?: number | null;
} | null;
export declare type EdgeNode = {
    id?: string;
    createdAt?: string;
    edge_id: string;
    node_id: string;
} | null;
export declare type Relation = {
    nodes: Array<Node | null>;
    edge: Edge;
    edge_nodes: Array<EdgeNode | null>;
} | Record<string, never>;
export declare type LinksConfig = {
    refs: Record<string, unknown>;
    links: Array<Relation>;
};
export declare type Asset = {
    id?: string;
    createdAt?: string;
    content?: string;
    node_id: string;
    type: api.AssetType;
    name: string;
};
export declare type AssetConfig = {
    node?: Node;
    assets: Array<Asset>;
};
export declare type AWSDateTime = Date;
export declare type ListNodesInput = {
    sortDirection?: api.ModelSortDirection;
    limit?: number;
    filter?: api.ModelNodeFilterInput;
    status?: api.NodeStatus;
    type?: api.NodeType;
    createdAt?: string | [string];
    nextToken?: string;
    owner?: string;
};
export interface LinkInput {
    nodes: Array<Node | null>;
    edge: Edge;
}
export interface AssetGroupInput {
    node: Node | null;
    assets: Array<Asset>;
}
