import { node } from "../../lib/commands/nodes"
import { NodeStatus } from "../../lib/graphql/API"
const test = async () => {
    let res = await node.list({ status: NodeStatus.DRAFT })

    //let res = await node.list({ status: NodeStatus.DRAFT })
    return res
}
test() //?
