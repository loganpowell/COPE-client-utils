import * as api from "../graphql/API";
export declare const createProxy: (args: api.CreateProxyInput) => Promise<void>;
export declare const proxyRead: (args: api.GetProxyQueryVariables) => Promise<any>;
export declare const proxyUpdate: (args: api.UpdateProxyInput) => Promise<any>;
export declare const proxyDelete: (args: api.DeleteProxyInput) => Promise<any>;
