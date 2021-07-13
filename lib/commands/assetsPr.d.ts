import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as api from "../graphql/API";
export declare const assetPr: {
    create: ({ name, node_id, type, content, createdAt, editors, id, owner }: api.CreateAssetPrInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    read: ({ id }: api.GetAssetPrQueryVariables, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    update: ({ id, content, createdAt, editors, name, node_id, owner, type }: api.UpdateAssetPrInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    delete: ({ id }: api.DeleteAssetPrInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    convert: ({ id }: api.GetAssetPrQueryVariables, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
};
