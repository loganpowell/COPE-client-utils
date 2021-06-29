import GQL from "nanographql"
import fetch from "node-fetch"
import dotenv from "dotenv"
//import { log, JL, squash } from "./data"
dotenv.config()

/**
 * simple graphql api fetch wrapper
 * 
 * TODO: auth
 * - https://docs.amplify.aws/lib/auth/advanced/q/platform/js#react-native-sample
 * - https://docs.amplify.aws/lib/auth/start/q/platform/js#configure-your-application
 * make async
 */
export const grafetch = ({
    gql = `query {}`,
    arg,
    api = "http://localhost:20002/graphql",
    key = "da2-fakeApiId123456"
}) => {
    let query = GQL(gql)
    return fetch(api, {
        method  : "POST",
        headers : {
            "x-api-key"    : key,
            "Content-Type" : "application/json"
        },
        body    : arg ? query(arg) : query()
    })
        .then(r => r.json())
        .catch(console.error)
}
