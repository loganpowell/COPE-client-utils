import * as jms from "../../lib/graphql/json_mutations"
import { API } from "../../lib/graphql"
import { jsonToGraphQLQuery } from "json-to-graphql-query"
import { gen_GQL_batch_json } from "../../lib/utils"

const link_cluster = [
    jms.createNode({
        input: {
            status: API.NodeStatus.DRAFT,
            type: API.NodeType.H_AUTHOR,
            id: "logan-author-2",
        },
    }),
    jms.createNode({
        input: {
            status: API.NodeStatus.DRAFT,
            type: API.NodeType.A_ARTICLE,
            id: "logan-article-2",
        },
    }),
    jms.createEdge({
        input: {
            type: API.EdgeType.AUTHORED,
            id: "authored-edge-2",
        },
    }),
    jms.createEdgeNode({
        input: {
            edgeID: "authored-edge-2",
            nodeID: "logan-author-2",
        },
    }),
    jms.createEdgeNode({
        input: {
            edgeID: "authored-edge-2",
            nodeID: "logan-article-2",
        },
    }),
]

describe("gen_GQL_batch_json ops tests running...", () => {
    test("createAsset json:", () => {
        console.log({ link_cluster })
        const res = gen_GQL_batch_json(link_cluster)
    })

    //test("updateAsset json:", () => {

    //})
})
