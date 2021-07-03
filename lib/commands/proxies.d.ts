import * as api from "../graphql/API";
export declare const proxyCreate: ({ name, node_id, type, content, createdAt, editors, id, owner }: api.CreateProxyInput) => Promise<any>;
export declare const proxyRead: ({ id }: api.GetProxyQueryVariables) => Promise<any>;
export declare const proxyUpdate: ({ id, content, createdAt, editors, name, node_id, owner, type }: api.UpdateProxyInput) => Promise<any>;
export declare const proxyDelete: ({ id }: api.DeleteProxyInput) => Promise<any>;
