import * as api from "../graphql/API";
export declare const nodeCreate: ({ id, status, type, createdAt, owner, updatedAt }: api.CreateNodeInput) => Promise<any>;
export declare const nodeRead: ({ id }: api.GetNodeQueryVariables) => Promise<any>;
export declare const nodeUpdate: ({ id, type, status, owner, createdAt, updatedAt }: api.UpdateNodeInput) => Promise<any>;
export declare const nodeDelete: ({ id }: api.DeleteNodeInput) => Promise<any>;
