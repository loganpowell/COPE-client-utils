import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { API as api } from "../graphql";
import { ListNodesInput } from "../api";
interface GetNodeOptionsQueryVariables {
    id: string;
    edgeType?: api.EdgeType;
}
export declare const getConnectedNodesByNodeID: ({ id, edgeType }: GetNodeOptionsQueryVariables, authMode?: GRAPHQL_AUTH_MODE) => Promise<Array<api.Edge>>;
export declare const node: {
    create: ({ id, status, type, createdAt, owner, updatedAt }: api.CreateNodeInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<api.Node>;
    read: ({ id }: api.GetNodeQueryVariables, authMode?: GRAPHQL_AUTH_MODE) => Promise<api.Node>;
    update: ({ id, type, status, owner, createdAt }: api.UpdateNodeInput, authMode?: GRAPHQL_AUTH_MODE, titleize?: boolean) => Promise<api.Node>;
    delete: ({ id }: api.DeleteNodeInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<api.Node>;
    connections: ({ id, edgeType }: GetNodeOptionsQueryVariables, authMode?: GRAPHQL_AUTH_MODE) => Promise<Array<api.Edge>>;
    list: ({ filter, limit, nextToken, sortDirection, owner, status, createdAt, type, }: ListNodesInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<Array<api.Node>>;
};
export {};
