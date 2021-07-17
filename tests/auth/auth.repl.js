import dotenv from "dotenv"
import aws_exports from "../../src/aws-exports"
import {
    NodeStatus,
    NodeType,
    AssetType,
    EdgeType,
    ModelSortDirection,
} from "../../lib/graphql/API"
import { configureWith, auth, node, asset, assetPr, edge } from "../../lib/commands"

dotenv.config()
configureWith(aws_exports)

const id = "longrandomstringthatsmyID2"
const _node = {
    status : NodeStatus.DRAFT,
    type   : NodeType.A_GEM,
    id,
}

const _asset = {
    node_id : id, // connect the assetPr/asset to the Gem node
    id      : "thiswouldbeanotehrlongID1",
    name    : "alt text for image 2",
    content :
        "https://public.govdelivery.com/system/images/72747/original/Census%20Registered%20Banner%20%28High-res%29.png?1553871440",
    type    : AssetType.A_IMAGE,
}

auth
    .logIn({ user: process.env.ADMIN_EMAIL, pass: process.env.ADMIN_PASS })
    .catch(e => console.error("error:", JSON.stringify(e, null, 4)))
    .then(async user => {
        console.log({ user })
        //const new_node = await node.create(_node)
        //return { new_node }

        //const updated_node = await node.update({
        //    id,
        //    type : NodeType.A_PAGE
        //    //createdAt : new Date().toISOString(),
        //    //status    : NodeStatus.DRAFT
        //})
        //return { updated_node }

        //const existing_node = await node.read({ id })
        //return { existing_node }
        // TODO: discuss API with Tommy

        //const assetPr_id = "id2"

        //const new_assetPr = await assetPr.create({
        //    ..._asset,
        //    id      : assetPr_id,
        //    editors : [ "loganpowell@gmail.com" ]
        //})
        //return { new_assetPr }

        //const existing_assetPr = await assetPr.read({ id: assetPr_id })
        //return { existing_assetPr }

        //const deleted_assetPr = await assetPr.delete({ id: _asset.id })

        //const converted_assetPr = await assetPr.convert({ id: assetPr_id })
        //return { converted_assetPr }

        //const converted_asset = await asset.convert({ id: assetPr_id })
        //return { converted_asset }

        //const new_node1 = await node.create({
        //    id     : "parentID",
        //    status : NodeStatus.PUBLISHED,
        //    type   : NodeType.A_PAGE
        //})

        //const new_node2 = await node.create({
        //    id     : "childID",
        //    status : NodeStatus.DRAFT,
        //    type   : NodeType.A_GEM
        //})
        //return { new_node1, new_node2 }

        //const link = await edge.create({
        //    nodes : [ { id }, { type: NodeType.A_GEM } ],
        //    edge  : { type: EdgeType.HAS_CHILD }
        //})
        //return { link }
        /* edgeNode IDS:
        e71f53de-1a0f-4735-bafb-a111d1eb55ef
        2a504182-c036-49bd-9ed7-3623a3ee737d
        */

        //const edge_node = await edge.read({ id: "2a504182-c036-49bd-9ed7-3623a3ee737d" })
        //return { edge_node }

        //const deleted_edge = await edge.delete({ id: "3f971b35-69c7-45b7-997e-c44bb2c5e299" })
        //return { deleted_edge }
        //let res = await node.list({ status: NodeStatus.DRAFT, type: NodeType.A_GEM })

        //let res = await node.list({ type: NodeType.A_PAGE })
        //let res = await node.list({ filter, limit, nextToken, owner, sortDirection, status, statusCreatedAt, type, typeCreatedAt })
        //let res = await node.list({
        //    //status        : NodeStatus.DRAFT,
        //    //type          : NodeType.A_GEM,
        //    //filter,
        //    limit : 2
        //    //nextToken :
        //    //    "eyJvd25lciI6eyJTIjoibG9nYW5wQHRlcHBlci5jbXUuZWR1In0sInN0YXR1cyNjcmVhdGVkQXQiOnsiUyI6IkRSQUZUIzIwMjEtMDctMDdUMTI6MTM6NDAuMzY2WiJ9LCJpZCI6eyJTIjoibG9uZ3JhbmRvbXN0cmluZ3RoYXRzbXlJRDEifX0",
        //    //owner         : "loganp@tepper.cmu.edu",
        //    //sortDirection : ModelSortDirection.ASC

        //    //createdAt : [ "2020", "2022" ]
        //    //createdAt     : "2021"
        //})

        //let res2 = node.list({})

        //const created = await edge.create({
        //    from_node_id : "testNode1",
        //    to_node_id   : "testNode3",
        //    id           : "testEdge04",
        //    type         : EdgeType.HAS_NEXT,
        //})

        const deleted = await edge.delete({ id: "testEdge04" })

        return { deleted }
    }) //?
