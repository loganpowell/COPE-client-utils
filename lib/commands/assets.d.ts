import * as api from "../graphql/API";
export declare const assetCreate: ({ name, node_id, type, content, createdAt, editors, id, owner }: api.CreateAssetInput) => Promise<any>;
export declare const assetRead: ({ id }: api.GetAssetQueryVariables) => Promise<any>;
export declare const assetUpdate: ({ id, content, createdAt, editors, name, node_id, owner, type }: api.UpdateAssetInput) => Promise<any>;
export declare const assetDelete: ({ id }: api.DeleteAssetInput) => Promise<any>;
