import { Auth } from "@aws-amplify/auth"
import { Amplify } from "@aws-amplify/core"
import { defAtom } from "@thi.ng/atom"

export const $global$ = defAtom({ config: {} })

export const configureWith = aws_exports => {
    const new_config = {
        ...aws_exports,
        // fix for ownerField resolution provided by:
        // https://github.com/aws-amplify/amplify-cli/issues/3794#issuecomment-606757449
        graphql_headers: async () => {
            try {
                const token = (await Auth.currentSession()).getIdToken().getJwtToken()
                return { Authorization: token }
            } catch (e) {
                console.error(e)
                return {}
            }
        },
    }
    Amplify.configure(new_config)
    $global$.resetIn(["config"], new_config)
}

/**
 * https://stackoverflow.com/questions/52878146/aws-cognito-how-to-get-users-group-from-token-object
session:{
   "idToken":{
      "jwtToken":"eyJraWQiOiJQS1wvMHNNMlk...",
      "payload":{
         "sub":"ceb234234-b0e0-4c3d-8abc-af08c002b4de",
         "cognito:groups":[
            "user"
         ],
         "email_verified":true,
         "iss":"https://cognito-idp.us-east-2.amazonaws.com/us-east-2_sinJIhGA8",
         "phone_number_verified":false,
         "cognito:username":"ceba8336-b0e0-4c3d-8abc-af08c002b4de",
         "aud":"203e1rl2o1d8d5chhs9v6s1i79",
         "event_id":"89502ffe-d2fe-11e8-8427-1b3482253d90",
         "token_use":"id",
         "auth_time":1539885130,
         "exp":1539888730,
         "iat":1539885130,
         "email":"r32423423@icloud.com"
      }
   },
   "refreshToken":{
      "token":"eyJjdHkiOiJKV1QiLCJlb..."
   },
   "accessToken":{
      "jwtToken":"eyJraWQiOiI4N2pRRnpqSm..",
      "payload":{
         "sub":"ceba8336-b0e0-4c3d-8abc-af08c002b4de",
         "device_key":"us-east-2_94234234234b-4cec-ae49-b1f90555d979",
         "cognito:groups":[
            "user"
         ],
         "iss":"https://cognito-idp.us-east-2.amazonaws.com/us-east-2_sinJIhGA8",
         "client_id":"203e1rl223423hhs9v6s1i79",
         "event_id":"895234fe-d2fe-11e8-8427-1b3482253d90",
         "token_use":"access",
         "scope":"aws.cognito.signin.user.admin",
         "auth_time":1539885130,
         "exp":1539888730,
         "iat":1539885130,
         "jti":"936fd8f9-c091-4f642345f-ba9454f16b9c",
         "username":"ceba83362342-4c3d-8abc-af08c002b4de"
      }
   },
   "clockDrift":0
}
 */
