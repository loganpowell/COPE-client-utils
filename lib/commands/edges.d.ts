import * as api from "../graphql/API";
import { LinkInput } from "../api";
export declare const edge: {
    create: ({ edge, nodes }: LinkInput) => Promise<{
        NODES: any[];
        EDGE: any;
        EDGENODES: any[];
    }>;
    read: ({ id }: api.GetEdgeQueryVariables) => Promise<any>;
    delete: ({ id }: api.DeleteEdgeInput) => Promise<{
        deleted_edgeNodes: [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown];
        deleted_items: any;
    }>;
};
