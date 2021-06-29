import { Amplify } from "@aws-amplify/core"
import { Auth } from "@aws-amplify/auth"
import { API } from "@aws-amplify/api"
import config from "../../src/aws-exports"
import * as enums from "../../lib/models"
import * as mutations from "../../lib/graphql/mutations"

Amplify.configure(config)

const createFirst = async args => {
    const some = await API.graphql({ query: mutations.createNode, variables: args })
    console.log("some", JSON.stringify(some))
    return some
}

const first = {
    status : enums.NodeStatus.DRAFT,
    type   : enums.NodeType.A_GEM
}

createFirst(first).then(j => console.log("result", j)).catch(console.error) //?
