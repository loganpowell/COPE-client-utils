import { __awaiter } from "tslib";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import { CRUD } from "../utils";
export const edgeCreate = ({ id, type, createdAt, owner, weight }) => __awaiter(void 0, void 0, void 0, function* () {
    const newEdge = yield CRUD({
        query: mutations.createEdge,
        variables: {
            input: {
                id,
                weight,
                type,
                createdAt,
                owner
            }
        }
    });
    return newEdge;
});
export const edgeNodeCreate = ({ edge_id, node_id, id, owner }) => __awaiter(void 0, void 0, void 0, function* () {
    const newEdgeNode = yield CRUD({
        query: mutations.createEdgeNode,
        variables: {
            input: {
                edge_id,
                node_id,
                id,
                owner
            }
        }
    });
    return newEdgeNode;
});
export const edgeRead = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const existingEdge = yield CRUD({
        query: queries.getEdge,
        variables: id
    });
    return existingEdge;
});
export const edgeUpdate = ({ id, createdAt, owner, type, weight }) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedEdge = yield CRUD({
        query: mutations.updateEdge,
        variables: {
            input: {
                id,
                createdAt,
                owner,
                type,
                weight
            }
        }
    });
    return updatedEdge;
});
export const edgeNodeUpdate = ({ id, edge_id, node_id, owner }) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedEdgeNode = yield CRUD({
        query: mutations.updateEdgeNode,
        variables: {
            input: {
                id,
                edge_id,
                node_id,
                owner
            }
        }
    });
    return updatedEdgeNode;
});
export const edgeDelete = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedEdge = yield CRUD({
        query: mutations.deleteEdge,
        variables: id
    });
    return deletedEdge;
});
export const edgeNodeDelete = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const deletedEdgeNode = yield CRUD({
        query: mutations.deleteEdgeNode,
        variables: id
    });
    return deletedEdgeNode;
});
