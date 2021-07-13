import { __awaiter } from "tslib";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import { CRUD, gen_link_input } from "../utils";
import { node } from "./nodes";
const edgeCreate = ({ id, type, createdAt, owner, weight }, authMode) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { createEdge } } = yield CRUD({
        query: mutations.createEdge,
        variables: {
            input: {
                id,
                weight,
                type,
                createdAt,
                owner,
            },
        },
        authMode,
    });
    return createEdge;
});
const edgeNodeCreate = ({ edge_id, node_id, id, owner }, authMode) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { createEdgeNode } } = yield CRUD({
        query: mutations.createEdgeNode,
        variables: {
            input: {
                edge_id,
                node_id,
                id,
                owner,
            },
        },
        authMode,
    });
    return createEdgeNode;
});
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
const edgeNodeUpdate = ({ id, edge_id, node_id, owner }, authMode) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { updateEdgeNode } } = yield CRUD({
        query: mutations.updateEdgeNode,
        variables: {
            input: {
                id,
                edge_id,
                node_id,
                owner,
            },
        },
        authMode,
    });
    return updateEdgeNode;
});
const edgeDelete = ({ id }, authMode) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { deleteEdge } } = yield CRUD({
        query: mutations.deleteEdge,
        variables: { input: { id } },
        authMode,
    });
    return deleteEdge;
});
const edgeNodeDelete = ({ id }, authMode) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { deleteEdgeNode } } = yield CRUD({
        query: mutations.deleteEdgeNode,
        variables: { input: { id } },
        authMode,
    });
    return deleteEdgeNode;
});
const linkCreate = ({ edge, nodes }, authMode) => __awaiter(void 0, void 0, void 0, function* () {
    const { nodes: _nodes, edge: _edge, edge_nodes } = gen_link_input({
        edge,
        nodes,
    });
    console.log({ edge_nodes, _nodes, _edge });
    const NODES = yield Promise.all(_nodes.map(n => !n ? null : node.create(n, authMode)));
    const EDGE = yield edgeCreate(_edge, authMode);
    const EDGENODES = yield Promise.all(edge_nodes.map(en => edgeNodeCreate(en, authMode)));
    return { NODES, EDGE, EDGENODES };
});
const linkDelete = ({ id }, authMode) => __awaiter(void 0, void 0, void 0, function* () {
    const { nodes: { items } } = yield edgeRead({ id }, authMode);
    console.log("edgeDelete:", { items });
    const deleted_edgeNodes = yield Promise.all(items.map(({ id }) => edgeNodeDelete({ id })));
    const { nodes: { items: deleted_items } } = yield edgeDelete({ id });
    return { deleted_edgeNodes, deleted_items };
});
export const edge = {
    create: linkCreate,
    read: edgeRead,
    delete: linkDelete,
};
