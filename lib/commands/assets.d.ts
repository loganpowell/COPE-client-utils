import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as api from "../graphql/API";
import { CreateFileAssetInput } from "./storage";
export declare const asset: {
    create: ({ name, node_id, type, content, createdAt, editors, id, owner, index, }: api.CreateAssetInput | CreateFileAssetInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<api.Asset | api.AssetPr>;
    read: ({ id }: api.GetAssetQueryVariables, authMode?: GRAPHQL_AUTH_MODE) => Promise<api.Asset>;
    update: ({ id, content, createdAt, editors, name, node_id, owner, type, index }: api.UpdateAssetInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<api.Asset | api.AssetPr>;
    delete: ({ id }: api.DeleteAssetInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<api.Asset>;
    convert: ({ id }: api.GetAssetQueryVariables, authMode?: GRAPHQL_AUTH_MODE) => Promise<api.Asset>;
};
