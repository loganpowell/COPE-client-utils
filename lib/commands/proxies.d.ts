import * as api from "../graphql/API";
export declare const proxy: {
    create: ({ name, node_id, type, content, createdAt, editors, id, owner }: api.CreateProxyInput) => Promise<any>;
    read: ({ id }: api.GetProxyQueryVariables) => Promise<any>;
    update: ({ id, content, createdAt, editors, name, node_id, owner, type }: api.UpdateProxyInput) => Promise<any>;
    delete: ({ id }: api.DeleteProxyInput) => Promise<any>;
    convert: ({ id }: api.GetProxyQueryVariables) => Promise<any>;
};
