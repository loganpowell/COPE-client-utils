import * as API from "../../lib/graphql/API"
import { gen_GQL_batch_json } from "../../lib/compiler"

// name limits: http://spec.graphql.org/June2018/#sec-Names

//const blob = new Blob([""], { type: "application/vcard+json" })
//const content = new File([blob], "vcard.vcf")
const createdAt = new Date().toISOString()
const editors = []
const type = "SOME_TYPE"
const owner = "test@mail.com"
const nodeID = "1"
const index = 1

const ex_muts /*: IQuery[] */ = [
    {
        createEdge: {
            __args: {
                input: {
                    id: "2",
                    type: API.NodeType.A_COURSE,
                    weight: 1,
                },
            },
            id: true,
        },
    },
    {
        updateEdgeNode: {
            __args: {
                input: {
                    id: "1",
                    edgeID: "1e",
                    nodeID: "1n",
                    owner,
                },
            },
            id: true,
            edgeID: true,
            nodeID: true,
            owner: true,
            createdAt: true,
            updatedAt: true,
        },
    },
    {
        updateEdgeNode: {
            __args: {
                input: {
                    id: "2",
                    edgeID: "2e",
                    nodeID: "2n",
                    owner,
                },
            },
            id: true,
            edgeID: true,
            nodeID: true,
            owner: true,
            createdAt: true,
            updatedAt: true,
        },
    },
]

const test = gen_GQL_batch_json(ex_muts, "mutation") //?

const result = `
    mutation {
        createEdge_0: createEdge(input: { id: "2", type: "HAS_CHILD", weight: 1 }) {
            id
        }
        updateEdgeNode_1: updateEdgeNode(
            input: { id: "1", edgeID: "1e", nodeID: "1n", owner: "test@mail.com" }
        ) {
            id
            edgeID
            nodeID
            owner
            createdAt
            updatedAt
        }
        updateEdgeNode_2: updateEdgeNode(
            input: { id: "2", edgeID: "2e", nodeID: "2n", owner: "test@mail.com" }
        ) {
            id
            edgeID
            nodeID
            owner
            createdAt
            updatedAt
        }
    }
`
