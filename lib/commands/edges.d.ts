import * as api from "../graphql/API";
export declare const edgeCreate: ({ id, type, createdAt, owner, weight }: api.CreateEdgeInput) => Promise<any>;
export declare const edgeNodeCreate: ({ edge_id, node_id, id, owner }: api.CreateEdgeNodeInput) => Promise<any>;
export declare const edgeRead: ({ id }: api.GetEdgeQueryVariables) => Promise<any>;
export declare const edgeUpdate: ({ id, createdAt, owner, type, weight }: api.UpdateEdgeInput) => Promise<any>;
export declare const edgeNodeUpdate: ({ id, edge_id, node_id, owner }: api.UpdateEdgeNodeInput) => Promise<any>;
export declare const edgeDelete: ({ id }: api.DeleteEdgeInput) => Promise<any>;
export declare const edgeNodeDelete: ({ id }: api.DeleteEdgeNodeInput) => Promise<any>;
