import { jsonToGraphQLQuery } from "json-to-graphql-query";
import * as API from "../graphql/API";
export const gen_GQL_batch_json = (q_array, type = "query") => {
    const json = q_array.reduce((a, c, i) => {
        const [q_name, q_value] = Object.entries(c)[0];
        a[`${q_name}_${i}`] = Object.assign({ __aliasFor: q_name }, q_value);
        return a;
    }, {});
    return jsonToGraphQLQuery({ [type]: json }, { pretty: true });
};
const createdAt = new Date().toISOString();
const editors = [];
const type = "SOME_TYPE";
const owner = "loganpowell@gmail.com";
const node_id = "1";
const index = 1;
const ex_muts = [
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
];
const test = gen_GQL_batch_json(ex_muts, "mutation");
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
`;
