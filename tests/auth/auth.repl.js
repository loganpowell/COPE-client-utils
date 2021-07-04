import aws_exports from "../../src/aws-exports"
import { NodeStatus, NodeType, AssetType } from "../../lib/graphql/API"
import { configureWith, logIn, node, asset, proxy } from "../../lib/commands"

configureWith(aws_exports)

const id = "longrandomstringthatsmyiD5"
const _node = {
    status : NodeStatus.DRAFT,
    type   : NodeType.A_GEM,
    id
}

const _asset = {
    node_id : id, // connect the proxy/asset to the Gem node
    id      : "thiswouldbeanotehrlongID",
    name    : "alt text for image 2",
    content :
        "https://public.govdelivery.com/system/images/72747/original/Census%20Registered%20Banner%20%28High-res%29.png?1553871440",
    type    : AssetType.A_IMAGE
}

logIn({ user: "loganp@tepper.cmu.edu", pass: "testingabc" })
    .catch(e => console.error("error:", JSON.stringify(e, null, 4)))
    .then(async user => {
        //const new_node = await node.create(_node)

        // TODO: discuss API with Tommy
        const new_proxy = proxy.create(_asset)
        return { new_proxy, user }
    }) //?
