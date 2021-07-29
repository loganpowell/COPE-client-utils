export * as API from "./API";
import * as mutations from "./mutations";
import * as queries from "./queries";
import * as subscriptions from "./subscriptions";
export declare const graphql: {
    mutations: typeof mutations;
    queries: typeof queries;
    subscriptions: typeof subscriptions;
};
