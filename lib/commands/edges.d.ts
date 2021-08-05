import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as api from "../graphql/API";
export declare const edge: {
    create: ({ id, type, weight, from_node_id, to_node_id }: {
        id?: any;
        type?: api.EdgeType;
        weight?: number;
        from_node_id: any;
        to_node_id: any;
    }, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    read: ({ id }: api.GetEdgeQueryVariables, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    update: ({ id, createdAt, owner, type, weight }: api.UpdateEdgeInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    delete: ({ id }: {
        id: any;
    }, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    relink: ({ edge_id, node_id }: {
        edge_id: any;
        node_id: any;
    }, authMode?: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => Promise<any>;
};
