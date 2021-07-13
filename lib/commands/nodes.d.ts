import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as api from "../graphql/API";
import { ListNodesInput } from "../api";
export declare const node: {
    create: ({ id, status, type, createdAt, owner, updatedAt }: api.CreateNodeInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    read: ({ id }: api.GetNodeQueryVariables, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    update: ({ id, type, status, owner, createdAt, updatedAt }: api.UpdateNodeInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    delete: ({ id }: api.DeleteNodeInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    list: ({ filter, limit, nextToken, owner, sortDirection, status, createdAt, type }: ListNodesInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<void>;
};
