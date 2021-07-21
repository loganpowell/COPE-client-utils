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
    $global$.resetIn([ "config" ], new_config)
}
