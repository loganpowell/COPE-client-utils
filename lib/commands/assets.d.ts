import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as api from "../graphql/API";
import { CreateFileAssetInput } from "./storage";
export declare const asset: {
    create: ({ name, node_id, type, content, createdAt, editors, id, owner, index, }: api.CreateAssetInput | CreateFileAssetInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    read: ({ id }: api.GetAssetQueryVariables, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    update: ({ id, content, createdAt, editors, name, node_id, owner, type, index }: api.UpdateAssetInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    delete: ({ id }: api.DeleteAssetInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
    convert: ({ id }: api.GetAssetQueryVariables, authMode?: GRAPHQL_AUTH_MODE) => Promise<any>;
};
