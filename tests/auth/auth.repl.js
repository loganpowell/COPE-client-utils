import aws_exports from "../../src/aws-exports"
import { NodeStatus, NodeType, AssetType } from "../../lib/graphql/API"
import {
    configureWith,
    logIn,
    nodeCreate,
    nodeRead,
    nodeUpdate,
    nodeDelete,
    proxyCreate,
    proxyRead,
    proxyUpdate,
    proxyDelete,
    assetCreate,
    assetRead,
    assetUpdate,
    assetDelete
} from "../../lib/commands"

configureWith(aws_exports)

const id = "longrandomstringthatsmyiD5"
const node = {
    status : NodeStatus.DRAFT,
    type   : NodeType.A_GEM,
    id
}

const proxy = {
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
        //const new_node = await nodeCreate(node)

        const new_asset = await proxyCreate(proxy)
        return { new_asset, user }
    }) //?
