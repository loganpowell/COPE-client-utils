import * as api from "../graphql/API";
import { ListNodesInput } from "../api";
export declare const node: {
    create: ({ id, status, type, createdAt, owner, updatedAt }: api.CreateNodeInput) => Promise<any>;
    read: ({ id }: api.GetNodeQueryVariables) => Promise<any>;
    update: ({ id, type, status, owner, createdAt, updatedAt }: api.UpdateNodeInput) => Promise<any>;
    delete: ({ id }: api.DeleteNodeInput) => Promise<any>;
    list: (variables: ListNodesInput) => Promise<any>;
};
