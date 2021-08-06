import dotenv from "dotenv"
import { Storage } from "@aws-amplify/storage"
import aws_exports from "../src/aws-exports"
import { NodeStatus, NodeType, AssetType, EdgeType, ModelSortDirection } from "../lib/graphql/API"
import {
    configureWith,
    $global$,
    auth,
    node,
    asset,
    assetPr,
    edge,
    storeObject,
    toggleAssets,
} from "../lib/commands"
import { createReadStream, readFile, readFileSync, promises } from "fs"
import FormData from "form-data"

import { API as api } from "../lib/graphql"
import { CRUD } from "../lib/utils"
import API from "@aws-amplify/api"

dotenv.config()
configureWith(aws_exports)

const id = "longrandomstringthatsmyID2"
const _node = {
    status: NodeStatus.DRAFT,
    type: NodeType.A_GEM,
    id,
}

const _asset = {
    node_id: id, // connect the assetPr/asset to the Gem node
    id: "thiswouldbeanotehrlongID1",
    name: "alt text for image 2",
    content:
        "https://public.govdelivery.com/system/images/72747/original/Census%20Registered%20Banner%20%28High-res%29.png?1553871440",
    type: AssetType.A_IMAGE,
}

function streamToBlob(stream, mimeType) {
    if (mimeType != null && typeof mimeType !== "string") {
        throw new Error("Invalid mimetype, expected string.")
    }
    return new Promise((resolve, reject) => {
        const chunks = []
        stream
            .on("data", chunk => chunks.push(chunk))
            .once("end", () => {
                const blob =
                    mimeType != null ? new Blob(chunks, { type: mimeType }) : new Blob(chunks)
                resolve(blob)
            })
            .once("error", reject)
    })
}

auth.logIn({ user: process.env.ADMIN_EMAIL, pass: process.env.ADMIN_PASS })
    .catch(e => console.error("error:", JSON.stringify(e, null, 4)))
    .then(async ({ payload: { email } }) => {
        console.log({ email })
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
        //    editors : [ "test@test.com" ]
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

        //const deleted = await edge.delete({ id: "testEdge04" })

        //return { deleted }

        // 🔥

        //const form = new FormData()

        //const file = createReadStream("./tests/assets/bot-cropped.jpg")

        //const blob = await streamToBlob(file, "image/jpeg")
        //form.append("form-file", file)
        //const fileForUpload = new File(
        //    [ blob ],
        //    "robot.jpg", //
        //    { type: "image/jpeg" }, //
        //)
        //const stuff = await storeObject({
        //    fileForUpload,
        //    id            : "testingFileUpload1",
        //    node_id       : "testNode1",
        //    type          : AssetType.A_IMAGE,
        //    index         : 1,
        //})
        //console.log({ stuff })
        // 🔥

        //const res = await node.list({
        //    //type: api.NodeType.A_GEM,
        //    owner: "logan@hyperlocals.com",
        //    limit: 1000,
        //})

        const id = "~YJrDJaLAaADI"

        const res = await node.read({ id })

        //const res = await node.connections({
        //    id,
        //    //edgeType: EdgeType.HAS_NEXT,
        //})

        //const res = await toggleAssets({
        //    id,
        //})

        //const res = await node.update({
        //    id,
        //    type: NodeType.A_GEM,
        //})

        //console.log("res:", JSON.stringify(res, null, 2))

        //const res = await node.delete({
        //    id: "this-is-going-to-change-everything~mCXY0mHTjb9s",
        //})

        // "this-is-going-to-change-everything~mCXY0mHTjb9s"
        //const res = await edge.relink({
        //    edge_id: "60926cd9-a637-4a74-af0b-a70d5b991deb",
        //    node_id: "this-is-going-to-change-everything~mCXY0mHTjb9s",
        //})

        //const res = await edge.create({
        //    type: EdgeType.HAS_PART,
        //    from_node_id: "05e18aef-e62b-4852-a49b-aa00598b6a55",
        //    to_node_id: "testNode3",
        //})
        //console.log("newEdge:", JSON.stringify(newEdge, null, 2))

        //const res = await asset.update({
        //    id: "4507e08b-6758-4bf0-aff9-7ccbb56e2f20",
        //    content: "Everybody wants to rule the world",
        //})

        console.log("res:", JSON.stringify(res, null, 2))
        //console.log("updatedTitle:", JSON.stringify(updatedTitle, null, 2))
    }) //?

/*
    [ { id: '60926cd9-a637-4a74-af0b-a70d5b991deb',
       type: 'HAS_PART',
       createdAt: '2021-08-05T21:29:40.052Z',
       owner: 'logan@hyperlocals.com',
       weight: 0,
       updatedAt: '2021-08-05T21:29:40.052Z',
       nodes: 1,
       node: [Object] },
     { id: 'f00a541c-db0b-45cb-8085-9212d6cc36f3',
       type: 'HAS_PART',
       */
/*


*/
