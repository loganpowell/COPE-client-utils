import * as api from "../graphql/API";
export declare const asset: {
    create: ({ name, node_id, type, content, createdAt, editors, id, owner }: api.CreateAssetInput) => Promise<any>;
    read: ({ id }: api.GetAssetQueryVariables) => Promise<any>;
    update: ({ id, content, createdAt, editors, name, node_id, owner, type }: api.UpdateAssetInput) => Promise<any>;
    delete: ({ id }: api.DeleteAssetInput) => Promise<any>;
    convert: ({ id }: api.GetAssetQueryVariables) => Promise<any>;
};
