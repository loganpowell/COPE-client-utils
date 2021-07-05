import aws_exports from "../../src/aws-exports"
import { NodeStatus, NodeType, AssetType, EdgeType } from "../../lib/graphql/API"
import { configureWith, logIn, node, asset, proxy, edge } from "../../lib/commands"

configureWith(aws_exports)

const id = "longrandomstringthatsmyID1"
const _node = {
    status : NodeStatus.DRAFT,
    type   : NodeType.A_GEM,
    id
}

const _asset = {
    node_id : id, // connect the proxy/asset to the Gem node
    id      : "thiswouldbeanotehrlongID1",
    name    : "alt text for image 2",
    content :
        "https://public.govdelivery.com/system/images/72747/original/Census%20Registered%20Banner%20%28High-res%29.png?1553871440",
    type    : AssetType.A_IMAGE
}

logIn({ user: "loganp@tepper.cmu.edu", pass: "testingabc" })
    .catch(e => console.error("error:", JSON.stringify(e, null, 4)))
    .then(async user => {
        //const new_node = await node.create(_node)
        //return { new_node }

        //const updated_node = await node.update({
        //    id,
        //    //type : NodeType.A_PAGE
        //    //createdAt : new Date().toISOString(),
        //    //status    : NodeStatus.DRAFT
        //})
        //return { updated_node }

        //const existing_node = await node.read({ id })
        //return { existing_node }
        // TODO: discuss API with Tommy

        const proxy_id = "id2"

        //const new_proxy = await proxy.create({
        //    ..._asset,
        //    id      : proxy_id,
        //    editors : [ "loganpowell@gmail.com" ]
        //})
        //return { new_proxy }

        //const existing_proxy = await proxy.read({ id: proxy_id })
        //return { existing_proxy }

        //const deleted_proxy = await proxy.delete({ id: _asset.id })
        //const converted_proxy = await proxy.convert({ id: proxy_id })
        //const converted_asset = await asset.convert({ id: proxy_id })

        /*
        const new_node1 = await node.create({
            id     : "parentID",
            status : NodeStatus.PUBLISHED,
            type   : NodeType.A_PAGE
        })

        const new_node2 = await node.create({
            id     : "childID",
            status : NodeStatus.DRAFT,
            type   : NodeType.A_GEM
        })
        */

        const link = await edge.create({
            nodes : [ { id }, { type: NodeType.A_GEM } ],
            edge  : { type: EdgeType.HAS_CHILD }
        })

        return { link }
    }) //?
