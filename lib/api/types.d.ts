import * as api from "../graphql/API";
import { assetPr, asset } from "../commands";
declare type EdgeNodeStitch = {
    id: string;
    edge_id: string;
    node_id: string;
};
export declare type Relation = {
    nodes: Array<api.Node | null>;
    edge: api.Edge;
    edge_nodes: Array<EdgeNodeStitch | null>;
} | Record<string, never>;
export declare type LinksConfig = {
    refs: Record<string, unknown>;
    links: Array<Relation>;
};
export declare type Resource = api.Asset | api.AssetPr;
export declare type ResourceConnection = api.ModelAssetConnection | api.ModelAssetPrConnection;
export declare type ResourceOps = typeof asset | typeof assetPr;
export declare type AssetConfig = {
    node?: api.Node;
    assets: Array<api.Asset>;
};
export declare type AWSDateTime = Date;
export declare type ListNodesInput = {
    sortDirection?: api.ModelSortDirection | string;
    limit?: number;
    filter?: api.ModelNodeFilterInput;
    status?: api.NodeStatus | string;
    type?: api.NodeType | string;
    createdAt?: string | [string];
    nextToken?: string;
    owner?: string;
};
export interface LinkInput {
    nodes: Array<api.Node | null>;
    edge: api.Edge;
}
export interface AssetGroupInput {
    node: api.Node | null;
    assets: Array<api.Asset>;
}
export {};
