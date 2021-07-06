//import {} from "@-0/browser"
import { run$, registerCMD } from "@-0/spool"
import { Auth } from "@aws-amplify/auth"

// Auth: https://dev.to/dabit3/the-complete-guide-to-user-authentication-with-the-amplify-framework-2inh
// Complete API: https://aws-amplify.github.io/amplify-js/api/index.html

const checkUser = () => {
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

const signUp = async ({ user, pass }) => {
    // upon signup, user must confirm signup via email
    // until then, they are listed as `UNCONFIRMED` in Cognito
    const signedUp = await Auth.signUp({
        username: user.toLowerCase(), // setup to be email address
        password: pass
    }).catch(signedUpError => console.warn({ signedUpError }))
}

const confirmSignUp = async ({ user, code = "000000" }) => {
    // After retrieveing the confirmation code from the user
    // provide confirmation code from email
    const confirmed = await Auth.confirmSignUp(user, code, {
        // Optional. Force user confirmation irrespective of existing alias.
        // By default set to true.
        forceAliasCreation: true
    })
        .then(data => console.log({ data }))
        .catch(confirmationError => console.log({ confirmationError }))
}

const logIn = async ({ user, pass, code = "000000" }) => {
    // https://aws-amplify.github.io/amplify-js/api/classes/authclass.html#signin
    const userSignedIn = await Auth.signIn(user.toLowerCase(), pass)
        .then(userSigned => {
            //console.log({ userSigned })
            if (userSigned.challengeName === "NEW_PASSWORD_REQUIRED") {
                Auth.completeNewPassword(userSigned, pass /*, requiredAttributes */).then(userChallenged => {
                    console.log({ userChallenged })
                })
            }
            return userSigned
        })
        .catch(logInError => {
            console.warn({ logInError })
            switch (logInError.code) {
                case "UserNotFoundException":
                    console.warn("Signing up...")
                    return signUp({ user, pass })
                case "UserNotConfirmedException":
                    console.warn("Confirming...")
                    return confirmSignUp({ user, code })
                case "NotAuthorizedException":
                    console.warn("User not authorized to perform this action")
                    return
                case "PasswordResetRequiredException":
                    console.warn("Please reset your password")
                default:
                    return
            }
        })
    return { payload: userSignedIn.signInUserSession.idToken.payload }
}

export const auth = {
    logIn,
    signUp,
    confirmSignUp,
    checkUser
}
