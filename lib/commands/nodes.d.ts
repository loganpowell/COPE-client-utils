import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { API as api } from "../graphql";
import { ListNodesInput } from "../api";
interface GetNodeOptionsQueryVariables {
    id: string;
    edgeType?: api.EdgeType;
}
export declare const getConnectedNodesByNodeID: ({ id, edgeType }: GetNodeOptionsQueryVariables, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
declare type UpdateNodeWithNewIdInput = {
    id: string;
    new_id?: string;
    status?: api.NodeStatus | null;
    type?: api.NodeType | null;
    createdAt?: string | null;
    updatedAt?: string | null;
    owner?: string | null;
};
export declare const node: {
    create: ({ id, status, type, createdAt, owner, updatedAt }: api.CreateNodeInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    read: ({ id }: api.GetNodeQueryVariables, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    update: ({ id, new_id, type, status, owner, createdAt }: UpdateNodeWithNewIdInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    delete: ({ id }: api.DeleteNodeInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    connections: ({ id, edgeType }: GetNodeOptionsQueryVariables, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    list: ({ filter, limit, nextToken, owner, sortDirection, status, createdAt, type }: ListNodesInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
};
export {};
