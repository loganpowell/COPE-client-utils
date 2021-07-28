import { API, GRAPHQL_AUTH_MODE } from "@aws-amplify/api"

/**
 * Local mocking with Auth is a bit more circuitous:
 * https://aws.amazon.com/blogs/mobile/amplify-framework-local-mocking/
 * (see "Seamless transition between local and cloud environments" - paragraph 2)
 * 
 */
export const CRUD = async ({
    query,
    variables,
    authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
}) => {
    let res
    try {
        res = await API.graphql({
            query,
            variables,
            // must specify auth mode for non-default (API key) calls
            // https://aws-amplify.github.io/amplify-js/api/enums/graphql_auth_mode.html
            authMode,
        })
    } catch (e) {
        console.warn(JSON.stringify(e, null, 4))
        console.warn(
            "GraphQL CRUD Error with these variables: \n",
            JSON.stringify(variables, null, 4),
        )
    }
    return res
}
