import { LinkInput } from "../api";
export declare const edge: {
    create: ({ edge, nodes }: LinkInput) => Promise<{
        NODES: any[];
        EDGES: any;
        EDGENODES: any[];
    }>;
};
