import { __awaiter } from "tslib";
import { v4 as uuid } from "uuid";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import * as api from "../graphql/API";
import { CRUD } from "../utils";
const edgeRead = ({ id }, authMode) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { getEdge } } = yield CRUD({
        query: queries.getEdge,
        variables: { id },
        authMode,
    });
    return getEdge;
});
const edgeUpdate = ({ id, createdAt, owner, type, weight }, authMode) => __awaiter(void 0, void 0, void 0, function* () {
    const { createdAt: _c, owner: _o, type: _t, weight: _w } = yield edgeRead({ id });
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
const linkCreate = ({ id = uuid(), type = api.EdgeType.HAS_CHILD, weight = 0, from_node_id, to_node_id }, authMode) => __awaiter(void 0, void 0, void 0, function* () {
    const mutation = `
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
        query: mutation,
        variables: {},
        authMode,
    });
    return results;
});
const linkDelete = ({ id }, authMode) => __awaiter(void 0, void 0, void 0, function* () {
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
};
