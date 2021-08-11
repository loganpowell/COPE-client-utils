import { __awaiter } from "tslib";
import { graphql } from "../graphql";
import { edge } from "../commands";
const { mutations } = graphql;
import { CRUD, shortUUID } from "../utils";
export const titleizeNodeIds = ({ title, id, type, status, createdAt, edges, _assets, op, authMode, }) => __awaiter(void 0, void 0, void 0, function* () {
    const friendly = shortUUID(title);
    const updated_assets = yield Promise.all(_assets === null || _assets === void 0 ? void 0 : _assets.items.map(({ id, content, createdAt, editors, index, name, type, owner }) => __awaiter(void 0, void 0, void 0, function* () {
        return yield op.update({
            id,
            content,
            createdAt,
            editors,
            index,
            name,
            node_id: friendly,
            type,
            owner,
        }, authMode);
    })));
    const updated_edges = (edges &&
        (yield Promise.all(edges.map(({ id: edge_id }) => __awaiter(void 0, void 0, void 0, function* () {
            const updatedEdge = yield edge.relink({
                edge_id,
                node_id_old: id,
                node_id_new: friendly,
            }, authMode);
            return updatedEdge;
        }))))) ||
        null;
    const { data: { createNode }, } = yield CRUD({
        query: mutations.createNode,
        variables: {
            input: {
                id: friendly,
                type,
                status,
                createdAt,
            },
        },
        authMode
    });
    const { data: { deleteNode }, } = yield CRUD({
        query: mutations.deleteNode,
        variables: {
            input: { id },
        },
        authMode,
    });
    return createNode;
});
