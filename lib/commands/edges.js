import { __awaiter } from "tslib";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { EquivMap } from "@thi.ng/associative";
import { v4 as uuid } from "uuid";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import * as api from "../graphql/API";
import { CRUD } from "../utils";
const edgeRead = ({ id }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { getEdge } } = yield CRUD({
        query: queries.getEdge,
        variables: { id },
        authMode,
    });
    return getEdge;
});
const edgeUpdate = ({ id, createdAt, owner, type, weight }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const asIs = yield edgeRead({ id });
    const { createdAt: _c, owner: _o, type: _t, weight: _w } = asIs;
    const no_change = new EquivMap([
        [{ createdAt: _c, owner: _o, type: _t, weight: _w }, true],
    ]).get({ createdAt, owner, type, weight });
    if (no_change)
        return asIs;
    const { data: updateEdge } = yield CRUD({
        query: mutations.updateEdge,
        variables: {
            input: {
                id,
                createdAt: createdAt || _c,
                owner: owner || _o,
                type: type || _t,
                weight: weight || _w,
            },
        },
        authMode,
    });
    return updateEdge;
});
const linkCreate = ({ id = uuid(), type = api.EdgeType.HAS_CHILD, weight = 0, from_node_id, to_node_id }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const batch = `
        mutation{
            edge: createEdge(input: { 
                id: "${id}", 
                type: ${type}, 
                weight: ${weight} 
            }) { id }
            edgeNodeFrom: createEdgeNode(input: { 
                id: "${id + '|' + from_node_id}", 
                edge_id: "${id}", 
                node_id: "${from_node_id}"
            }) { id } 
            edgeNodeTo: createEdgeNode(input: {
                 id: "${id + '|' + to_node_id}", 
                 edge_id: "${id}", 
                 node_id: "${to_node_id}"
            }) { id }
        }
    `;
    const results = yield CRUD({
        query: batch,
        variables: {},
        authMode,
    });
    return results;
});
const relinkToNewNodeID = ({ edge_id, node_id }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { getEdge } } = yield CRUD({
        query: queries.getEdge,
        variables: { id: edge_id },
        authMode,
    });
    if (!getEdge) {
        console.warn("No Edge found with this id:", edge_id);
        return;
    }
    const { id, owner, type, createdAt, weight, nodes: { items } } = getEdge;
    if (!items.length) {
        console.warn("No EdgeNodes found for this Edge:", id);
        return;
    }
    const [{ id: from, owner: o_from }, { id: to, owner: o_to }] = items.map(({ id, owner }) => ({
        id,
        owner,
    }));
    const batch = `
        mutation {
            edgeNodeFrom: updateEdgeNode(input: {
                id: "${from}"
                edge_id: "${edge_id}"
                node_id: "${node_id}"
                owner: "${o_from}"
            }) {
                id
                edge_id
                node_id
                owner
                createdAt
                updatedAt
                node {
                    id
                    status
                    type
                    createdAt
                    updatedAt
                    owner
                    assets {
                        nextToken
                    }
                    assetsPr {
                        nextToken
                    }
                    edges {
                        nextToken
                    }
                }
                edge {
                    id
                    type
                    createdAt
                    owner
                    weight
                    updatedAt
                    nodes {
                        nextToken
                    }
                }
            }
            edgeNodeTo: updateEdgeNode(input: {
                id: "${to}"
                edge_id: "${to}"
                node_id: "${node_id}"
                owner: "${o_to}"
            }) {
                id
                edge_id
                node_id
                owner
                createdAt
                updatedAt
                node {
                    id
                    status
                    type
                    createdAt
                    updatedAt
                    owner
                    assets {
                        nextToken
                    }
                    assetsPr {
                        nextToken
                    }
                    edges {
                        nextToken
                    }
                }
                edge {
                    id
                    type
                    createdAt
                    owner
                    weight
                    updatedAt
                    nodes {
                        nextToken
                    }
                }
            }
        }
    `;
    const results = yield CRUD({
        query: batch,
        variables: {},
        authMode,
    });
    return results;
});
const linkDelete = ({ id }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { getEdge } } = yield CRUD({
        query: queries.getEdge,
        variables: { id },
        authMode,
    });
    if (!getEdge) {
        console.warn("No Edge found with this id:", id);
        return;
    }
    const { nodes: { items } } = getEdge;
    if (!items.length) {
        console.warn("No items found for this Edge:", id);
        return;
    }
    const [from, to] = items.map(({ id }) => id);
    const mutation = `
        mutation {
            edge: deleteEdge(input: { 
                id: "${id}"
            }) { id }
            edgeNodeFrom: deleteEdgeNode(input: { 
                id: "${from}"
            }) { id } 
            edgeNodeTo: deleteEdgeNode(input: {
                 id: "${to}"
            }) { id }
        }
    `;
    const results = yield CRUD({
        query: mutation,
        variables: {},
        authMode,
    });
    return results;
});
export const edge = {
    create: linkCreate,
    read: edgeRead,
    update: edgeUpdate,
    delete: linkDelete,
    relink: relinkToNewNodeID,
};
