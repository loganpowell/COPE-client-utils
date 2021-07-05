import { __awaiter } from "tslib";
import { gen_link_input } from "../utils";
import { node } from "./nodes";
export const linkCreate = ({ edge, nodes }) => __awaiter(void 0, void 0, void 0, function* () {
    const { nodes: _nodes, edge: _edge, edge_nodes } = gen_link_input({
        edge,
        nodes
    });
    yield _nodes.forEach(n => {
        if (!n)
            return;
        const { id, status, type } = n;
        return node.create({
            id,
            status,
            type,
        });
    });
    (yield _edge) ?
        :
    ;
});
