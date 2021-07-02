import * as api from "../graphql/API";
export declare const nodeCreate: (args: api.CreateNodeInput) => Promise<any>;
export declare const nodeRead: (args: api.GetNodeQueryVariables) => Promise<any>;
export declare const nodeUpdate: (args: api.UpdateNodeInput) => Promise<any>;
export declare const nodeDelete: (args: api.DeleteNodeInput) => Promise<any>;
