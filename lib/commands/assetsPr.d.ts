import * as api from "../graphql/API";
export declare const assetPr: {
    create: ({ name, node_id, type, content, createdAt, editors, id, owner }: api.CreateAssetPrInput) => Promise<any>;
    read: ({ id }: api.GetAssetPrQueryVariables) => Promise<any>;
    update: ({ id, content, createdAt, editors, name, node_id, owner, type }: api.UpdateAssetPrInput) => Promise<any>;
    delete: ({ id }: api.DeleteAssetPrInput) => Promise<any>;
    convert: ({ id }: api.GetAssetPrQueryVariables) => Promise<any>;
};
