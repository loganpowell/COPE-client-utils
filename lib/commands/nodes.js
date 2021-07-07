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
    const { filter, limit, nextToken, owner, sortDirection, status, createdAt, type } = variables;
    const cleaned = Object.entries(variables).reduce((a, [k, v]) => {
        if (!v)
            return a;
        return Object.assign(Object.assign({}, a), { [k]: v });
    }, {});
    const composite_keys = ["owner", "type", "createdAt", "status"];
    const pruned = Object.entries(cleaned).reduce((a, [k, v]) => {
        const matches_this_key = x => x === k;
        if (composite_keys.some(matches_this_key))
            return a;
        return Object.assign(Object.assign({}, a), { [k]: v });
    }, {});
    const list_only = Object.entries(pruned).reduce((a, [k, v]) => {
        if (k === "sortDirection")
            return a;
        return Object.assign(Object.assign({}, a), { [k]: v });
    }, {});
    const Q = {
        ST: queries.nodesByStatusType,
        OS: queries.nodesByOwnerStatus,
        LN: queries.listNodes
    };
    const V = {
        X: cleaned,
        SO: Object.assign({ owner, statusCreatedAt: { beginsWith: { status } } }, pruned),
        ST: Object.assign({ status, typeCreatedAt: { beginsWith: { type } } }, pruned),
        STC: Object.assign({ status, typeCreatedAt: { beginsWith: { type, createdAt } } }, pruned),
        SOC: Object.assign({ owner, statusCreatedAt: { beginsWith: { status, createdAt } } }, pruned)
    };
    const err_msg = (needs, has) => `Must provide \`${needs}\` when using \`${has}\` with \`createdAt\``;
    const match = new EquivMap([
        [list_only, { query: Q.LN, variables: V.X }],
        [Object.assign({ status }, pruned), { query: Q.ST, variables: V.X }],
        [Object.assign({ status, type }, pruned), { query: Q.ST, variables: V.ST }],
        [Object.assign({ status, createdAt }, pruned), { error: err_msg("type", "status") }],
        [Object.assign({ owner, createdAt }, pruned), { error: err_msg("status", "owner") }],
        [Object.assign({ status, type, createdAt }, pruned), { query: Q.ST, variables: V.STC }],
        [Object.assign({ owner }, pruned), { query: Q.OS, variables: V.X }],
        [Object.assign({ status, owner }, pruned), { query: Q.OS, variables: V.SO }],
        [Object.assign({ status, owner, createdAt }, pruned), { query: Q.OS, variables: V.SOC }]
    ]).get(cleaned);
    if (match.error) {
        console.error(match.error);
        return;
    }
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
