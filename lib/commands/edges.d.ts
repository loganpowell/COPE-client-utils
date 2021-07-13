import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as api from "../graphql/API";
import { LinkInput } from "../api";
export declare const edge: {
    create: ({ edge, nodes }: LinkInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<{
        NODES: any[];
        EDGE: any;
        EDGENODES: any[];
    }>;
    read: ({ id }: api.GetEdgeQueryVariables, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    delete: ({ id }: api.DeleteEdgeInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<{
        deleted_edgeNodes: [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown];
        deleted_items: any;
    }>;
};
