import { jsonToGraphQLQuery, EnumType } from "json-to-graphql-query"
import * as API from "../graphql/API"

interface IQuery {
    [name: string]: Partial<{
        __aliasFor: string
        __args: Partial<{
            input: Partial<{
                id: string
                type: any
                status: any
                [key: string]: any
            }>
            type: any
            status: any
            sortDirection: any
            [key: string]: any
        }>
        [key: string]: any
    }>
}

type GQLQueryType = "mutation" | "query"
/**
 * takes an array of query objects with the following signature:
 * ```js
 * const example = [
 * {
 *    createEdge: {
 *       __args: { // if type = "mutation" and requires input
 *           input: {
 *               id: "2",
 *               ... // more input fields
 *           },
 *           ... // other input(s)
 *       },
 *       id: true,
 *       ... // more return fields
 *   },
 * },
 *   ...
 *   ]
 * gen_GQL_batch_json(example, "mutation")
 * //=>
 *¨¨
 */
export const gen_GQL_batch_json = (q_array: IQuery[], type: GQLQueryType = "query") => {
    const json = q_array.reduce((a, c, i) => {
        const [q_name, q_value] = Object.entries(c)[0]
        a[`${q_name}_${i}`] = {
            __aliasFor: q_name,
            ...q_value,
        }
        return a
    }, {})

    return jsonToGraphQLQuery({ [type]: json }, { pretty: true })
}

// name limits: http://spec.graphql.org/June2018/#sec-Names

//const blob = new Blob([""], { type: "application/vcard+json" })
//const content = new File([blob], "vcard.vcf")
const createdAt = new Date().toISOString()
const editors = []
const type = "SOME_TYPE"
const owner = "loganpowell@gmail.com"
const node_id = "1"
const index = 1

const ex_muts: IQuery[] = [
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
                    edge_id: "1e",
                    node_id: "1n",
                    owner,
                },
            },
            id: true,
            edge_id: true,
            node_id: true,
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
                    edge_id: "2e",
                    node_id: "2n",
                    owner,
                },
            },
            id: true,
            edge_id: true,
            node_id: true,
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
            input: { id: "1", edge_id: "1e", node_id: "1n", owner: "loganpowell@gmail.com" }
        ) {
            id
            edge_id
            node_id
            owner
            createdAt
            updatedAt
        }
        updateEdgeNode_2: updateEdgeNode(
            input: { id: "2", edge_id: "2e", node_id: "2n", owner: "loganpowell@gmail.com" }
        ) {
            id
            edge_id
            node_id
            owner
            createdAt
            updatedAt
        }
    }
`
