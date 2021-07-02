//import {} from "@-0/browser"
import { run$, registerCMD } from "@-0/spool"
import { init } from "../../lib/commands"
import { Auth } from "@aws-amplify/auth"
import { API, GRAPHQL_AUTH_MODE } from "@aws-amplify/api"
import * as enums from "../../lib/models"
import * as mutations from "../../lib/graphql/mutations"

// Auth: https://dev.to/dabit3/the-complete-guide-to-user-authentication-with-the-amplify-framework-2inh
// Complete API: https://aws-amplify.github.io/amplify-js/api/index.html

function checkUser() {
    Auth.currentAuthenticatedUser().then(user => console.log({ user })).catch(err => console.log(err))
}

/*
{ init:  
   { aws_project_region: 'us-east-1', 
     aws_cognito_identity_pool_id: 'us-east-1:5eb24d32-7dcf-4eec-b2cf-3ccb80538edb', 
     aws_cognito_region: 'us-east-1', 
     aws_user_pools_id: 'us-east-1_pDcWh9rz6', 
     aws_user_pools_web_client_id: '119jhi81t735520srasmqrjsf5', 
     oauth: {}, 
     aws_cloud_logic_custom: [ [Object] ], 
     aws_appsync_graphqlEndpoint: 'http://192.168.1.24:20002/graphql', 
     aws_appsync_region: 'us-east-1', 
     aws_appsync_authenticationType: 'API_KEY', 
     aws_appsync_apiKey: 'da2-fakeApiId123456', 
     aws_appsync_dangerously_connect_to_http_endpoint_for_testing: true } } 
 */
//console.log({ init })

/**
 * Local mocking with Auth is a bit more circuitous:
 * https://aws.amazon.com/blogs/mobile/amplify-framework-local-mocking/
 * (see "Seamless transition between local and cloud environments" - paragraph 2)
 */
const createFirst = async args => {
    const username = "loganpowell@gmail.com"
    const password = "testing123"

    // upon signup, user must confirm signup via email
    // until then, they are listed as `UNCONFIRMED` in Cognito
    // const user = await Auth.signUp({
    //    username, // setup to be email address
    //    password
    // })
    //console.log({ user })

    // After retrieveing the confirmation code from the user
    // provide confirmation code from email
    //await Auth.confirmSignUp(username, "144603", {
    //    // Optional. Force user confirmation irrespective of existing alias. By default set to True.
    //    forceAliasCreation : true
    //})
    //    .then(data => console.log({ data }))
    //    .catch(err => console.log({ err }))

    // https://aws-amplify.github.io/amplify-js/api/classes/authclass.html#signin
    const userSignedIn = await Auth.signIn(username, password).then(userSigned => {
        // handle `FORCE_CHANGE_PASSWORD` status in Cognito
        if (userSigned.challengeName === "NEW_PASSWORD_REQUIRED") {
            Auth.completeNewPassword(userSigned, "testing1234" /*, requiredAttributes */).then(userChallenged => {
                console.log({ userChallenged })
            })
        }
        return userSigned
    })
    /*
   CognitoUser { username: 'f8742186-d65b-4155-ae40-2f53b974fa21', 
     pool:  
      CognitoUserPool { userPoolId: 'us-east-1_pDcWh9rz6', 
        clientId: '119jhi81t735520srasmqrjsf5', 
        client: [Object], 
        advancedSecurityDataCollectionFlag: true, 
        storage: [Object], 
        wrapRefreshSessionCallback: [λ] }, 
     Session: null, 
     client:  
      Client { endpoint: 'https://cognito-idp.us-east-1.amazonaws.com/', 
        fetchOptions: {} }, 
     signInUserSession:  
      CognitoUserSession { idToken: [Object], 
        refreshToken: [Object], 
        accessToken: [Object], 
        clockDrift: -2 }, 
     authenticationFlowType: 'USER_SRP_AUTH', 
     storage:  
      Storage { 'CognitoIdentityServiceProvider.119jhi81t735520srasmqrjsf5.f8742186-d65b-4155-ae40-2f53b974fa21.idToken': 'long.ass.token', 
        'CognitoIdentityServiceProvider.119jhi81t735520srasmqrjsf5.f8742186-d65b-4155-ae40-2f53b974fa21.accessToken': 'long.ass.token', 
        'CognitoIdentityServiceProvider.119jhi81t735520srasmqrjsf5.f8742186-d65b-4155-ae40-2f53b974fa21.refreshToken': 'long.ass.token', 
        'CognitoIdentityServiceProvider.119jhi81t735520srasmqrjsf5.f8742186-d65b-4155-ae40-2f53b974fa21.clockDrift': '-2', 
        'CognitoIdentityServiceProvider.119jhi81t735520srasmqrjsf5.LastAuthUser': 'f8742186-d65b-4155-ae40-2f53b974fa21', 
        'CognitoIdentityServiceProvider.119jhi81t735520srasmqrjsf5.f8742186-d65b-4155-ae40-2f53b974fa21.userData': '{"UserAttributes":[{"Name":"sub","Value":"f8742186-d65b-4155-ae40-2f53b974fa21"},{"Name":"email_verified","Value":"true"},{"Name":"email","Value":"loganpowell@gmail.com"}],"Username":"f8742186-d65b-4155-ae40-2f53b974fa21"}', 
        'amplify-signin-with-hostedUI': 'false', 
        [Symbol(impl)]: [Object] }, 
     keyPrefix: 'CognitoIdentityServiceProvider.119jhi81t735520srasmqrjsf5', 
     userDataKey: 'CognitoIdentityServiceProvider.119jhi81t735520srasmqrjsf5.f8742186-d65b-4155-ae40-2f53b974fa21.userData', 
     attributes:  
      { sub: 'f8742186-d65b-4155-ae40-2f53b974fa21', 
        email_verified: true, 
        email: 'loganpowell@gmail.com' }, 
     preferredMFA: 'NOMFA' }
     */
    //console.log({ userSignedIn })

    const some = await API.graphql({
        query     : mutations.createNode,
        variables : args,
        // must specify auth mode for non-default (API key) calls
        authMode  : GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS // https://aws-amplify.github.io/amplify-js/api/enums/graphql_auth_mode.html
    }).catch(gqlError => console.warn("gqlError", JSON.stringify(gqlError, null, 4)))

    //console.log("some", JSON.stringify(some, null, 4))

    return some
}

const first = {
    input : {
        status : enums.NodeStatus.DRAFT,
        type   : enums.NodeType.A_GEM,
        id     : "longrandomstringthatsmyiD1"
    }
}

createFirst(first)
    .then(j => console.log("result:", JSON.stringify(j, null, 4)))
    .catch(e => console.error(JSON.stringify(e, null, 4))) //?
