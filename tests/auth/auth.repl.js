import { init, logIn, createNode } from "../../lib/commands"
import { API, GRAPHQL_AUTH_MODE } from "@aws-amplify/api"
import * as enums from "../../lib/models"

const node = {
    status : enums.NodeStatus.DRAFT,
    type   : enums.NodeType.A_GEM,
    id     : "longrandomstringthatsmyiD4"
}

logIn({ user: "loganp@tepper.cmu.edu", pass: "testingabc" })
    .catch(e => console.error("error:", JSON.stringify(e, null, 4)))
    .then(x => {
        createNode(node)
            .then(j => console.log("result:", JSON.stringify(j, null, 4)))
            .catch(e => console.error("error:", JSON.stringify(e, null, 4))) //?
    }) //?
