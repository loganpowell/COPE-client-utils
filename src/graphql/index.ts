export * as API from "./API"
import * as mutations from "./mutations"
import * as queries from "./queries"
import * as subscriptions from "./subscriptions"
import * as custom from "./custom"
export const graphql = {
    mutations,
    queries,
    subscriptions,
    custom
}
