import { CRUD } from "../utils"
import * as mutations from "../graphql/mutations"
import * as api from "../graphql/API"

export const proxyCreate = async (args: api.CreateAssetInput) => {
    const newProxy = await CRUD({
        query: mutations.createProxy,
        variables: {
            input: args
        }
    })
}
