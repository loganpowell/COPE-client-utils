import { __awaiter } from "tslib";
import * as mutations from "../graphql/mutations";
import * as queries from "../graphql/queries";
import { EquivMap } from "@thi.ng/associative";
import { CRUD } from "../utils";
const nodeCreate = ({ id, status, type, createdAt, owner, updatedAt }) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { createNode } } = yield CRUD({
        query: mutations.createNode,
        variables: {
            input: {
                id,
                status,
                type,
                createdAt,
                owner,
                updatedAt
            }
        }
    });
    return createNode;
});
const nodeRead = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { getNode } } = yield CRUD({
        query: queries.getNode,
        variables: { id }
    });
    return getNode;
});
const nodeUpdate = ({ id, type, status, owner, createdAt, updatedAt }) => __awaiter(void 0, void 0, void 0, function* () {
    const { status: _s, type: _t, createdAt: _c, owner: _o } = yield nodeRead({ id });
    const { data: { updateNode } } = yield CRUD({
        query: mutations.updateNode,
        variables: {
            input: {
                id,
                type: type || _t,
                status: status || _s,
                owner: owner || _o,
                createdAt: createdAt || _c,
                updatedAt
            }
        }
    });
    return updateNode;
});
const nodeDelete = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { deleteNode } } = yield CRUD({
        query: mutations.deleteNode,
        variables: { input: { id } }
    });
    return deleteNode;
});
const list = (variables) => __awaiter(void 0, void 0, void 0, function* () {
    const { filter, limit, nextToken, owner, sort, status, createdAt, type } = variables;
    const cleaned = Object.entries(variables).reduce((a, [k, v]) => {
        if (!v)
            return a;
        return Object.assign(Object.assign({}, a), { [k]: v });
    }, {});
    console.log("pre:", { variables, cleaned });
    const Q = {
        ST: queries.nodesByStatusType,
        OS: queries.nodesByOwnerStatus
    };
    const match = new EquivMap([
        [{ status }, { query: Q.ST, variables: cleaned }],
        [{ status, type }, { query: Q.ST, variables: cleaned }],
        [{ status, type, createdAt }, { query: Q.ST, variables: {
                    status, typeCreatedAt: {}
                } }],
    ]).get(cleaned);
    return { match };
    const { data } = yield CRUD(match);
    return data;
});
const nodesByStatusType = ({ status, typeCreatedAt }) => __awaiter(void 0, void 0, void 0, function* () {
    const { beginsWith, between, eq, ge, gt, le, lt } = typeCreatedAt;
    const nodes = yield CRUD({
        query: queries.nodesByStatusType,
        variables: { typeCreatedAt, status }
    });
    return { nodes };
});
export const node = {
    create: nodeCreate,
    read: nodeRead,
    update: nodeUpdate,
    delete: nodeDelete,
    list
};
