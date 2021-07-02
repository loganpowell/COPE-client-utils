import { logIn, createNode } from "../../lib/commands"
import { NodeStatus, NodeType } from "../../lib/graphql/API"

const node = {
    status : NodeStatus.DRAFT,
    type   : NodeType.A_GEM,
    id     : "longrandomstringthatsmyiD4"
}

logIn({ user: "loganp@tepper.cmu.edu", pass: "testingabc" })
    .catch(e => console.error("error:", JSON.stringify(e, null, 4)))
    .then(x => {
        createNode(node)
            .then(j => console.log("result:", JSON.stringify(j, null, 4)))
            .catch(e => console.error("error:", JSON.stringify(e, null, 4))) //?
    }) //?
