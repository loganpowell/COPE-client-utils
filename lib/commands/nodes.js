import { __awaiter } from "tslib";
import { EquivMap } from "@thi.ng/associative";
import { isArray } from "@thi.ng/checks";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import { graphql, API } from "../graphql";
import { assetPr, asset } from "../commands";
const { mutations, queries, custom } = graphql;
import { CRUD } from "../utils";
const nodeCreate = ({ id, status, type, createdAt, owner, updatedAt }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { createNode } } = yield CRUD({
        query: mutations.createNode,
        variables: {
            input: {
                id,
                status,
                type,
                createdAt,
                owner,
                updatedAt,
            },
        },
        authMode,
    });
    return createNode;
});
const nodeRead = ({ id }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { getNode } } = yield CRUD({
        query: queries.getNode,
        variables: { id },
        authMode,
    });
    return getNode;
});
export const getConnectedNodesByNodeID = ({ id, edgeType }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { data: { getNode } } = yield CRUD({
        query: custom.getEdgesByNodeID,
        variables: { id },
        authMode
    });
    const others = (_a = getNode === null || getNode === void 0 ? void 0 : getNode.edges) === null || _a === void 0 ? void 0 : _a.items.reduce((a, c) => {
        var _a, _b;
        const { edge } = c;
        const not_me = (_a = edge === null || edge === void 0 ? void 0 : edge.nodes) === null || _a === void 0 ? void 0 : _a.items.filter(({ node }) => node.id !== id);
        return a.concat(Object.assign(Object.assign({}, edge), { nodes: 1, node: (_b = not_me[0]) === null || _b === void 0 ? void 0 : _b.node }));
    }, []);
    console.log({ others });
    return edgeType ? others.filter(({ type }) => type === edgeType) : others;
});
const nodeUpdate = ({ id, type, status, owner, createdAt }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const asIs = yield nodeRead({ id });
    if (!asIs) {
        console.warn("No Node found for this id:", id);
        return;
    }
    const { id: _i, type: _t, status: _s, owner: _o, createdAt: _c, assets, assetsPr } = asIs;
    const op = (assets === null || assets === void 0 ? void 0 : assets.items.length) ? asset : assetPr;
    const ass = (assets === null || assets === void 0 ? void 0 : assets.items.length) ? assets : assetsPr;
    const title_asset = ass.items.filter(({ type }) => type === API.AssetType.T_OG_TITLE)[0];
    const is_hashed = title_asset.split("~")[1];
    if (is_hashed && title_asset !== _i) {
        const updated_assets = yield Promise.all(ass.items.map(({ id, content, createdAt, editors, index, name, node_id, type }) => __awaiter(void 0, void 0, void 0, function* () {
            return yield op.update({
                id, content, createdAt, editors, index, name, node_id: title_asset, type
            });
        })));
        console.log({ updated_assets });
        const edges = yield getConnectedNodesByNodeID({ id: _i });
        const updated_edges = edges && (yield Promise.all(edges.map(({ edge }) => __awaiter(void 0, void 0, void 0, function* () {
            const { id: edge_id } = edge;
            const updatedEdge = yield edge.relink({
                edge_id,
                node_id: title_asset
            });
            return updatedEdge;
        })))) || null;
        console.log({ updated_edges });
        const { data: { createNode } } = yield CRUD({
            query: mutations.createNode,
            variables: {
                input: {
                    id: title_asset,
                    type,
                    status,
                    createdAt,
                }
            }
        });
        console.log({ createNode });
        const { data: { deleteNode } } = yield CRUD({
            query: mutations.deleteNode,
            variables: {
                input: { id: _i },
            },
            authMode,
        });
        console.log({ deleteNode });
        return createNode;
    }
    const no_other_changes = new EquivMap([
        [{ type: _t, status: _s, owner: _o, createdAt: _c }, true]
    ]).get({ type, status, owner, createdAt });
    if (no_other_changes)
        return asIs;
    const { data: { updateNode } } = yield CRUD({
        query: mutations.updateNode,
        variables: {
            input: {
                id: id || _i,
                type: type || _t,
                status: status || _s,
                owner: owner || _o,
                createdAt: createdAt || _c,
            },
        },
        authMode,
    });
    console.log({ updateNode });
    return updateNode;
});
const nodeDelete = ({ id }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { deleteNode } } = yield CRUD({
        query: mutations.deleteNode,
        variables: { input: { id } },
        authMode,
    });
    return deleteNode;
});
const list = ({ filter, limit, nextToken, owner, sortDirection, status, createdAt, type }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _d, _e;
    const variables = { filter, limit, nextToken, owner, sortDirection, status, createdAt, type };
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
        LN: queries.listNodes,
    };
    const CA = isArray(createdAt) ? createdAt : [null, null];
    const V = {
        X: cleaned,
        SO: Object.assign({ owner, statusCreatedAt: { beginsWith: { status } } }, pruned),
        ST: Object.assign({ status, typeCreatedAt: { beginsWith: { type } } }, pruned),
        STC: Object.assign({ status, typeCreatedAt: { beginsWith: { type, createdAt } } }, pruned),
        SOC: Object.assign({ owner, statusCreatedAt: { beginsWith: { status, createdAt } } }, pruned),
        STCB: Object.assign({ status, typeCreatedAt: { between: [{ type, createdAt: CA[0] }, { type, createdAt: CA[1] }] } }, pruned),
        SOCB: Object.assign({ owner, statusCreatedAt: {
                between: [{ status, createdAt: CA[0] }, { status, createdAt: CA[1] }],
            } }, pruned),
    };
    const CAA = isArray(createdAt) ? { createdAt } : { createdAt: undefined };
    const CAR = !isArray(createdAt) ? { createdAt } : { createdAt: undefined };
    const err_msg = (needs, has) => `Must provide \`${needs}\` when using \`${has}\` with \`createdAt\``;
    const match = new EquivMap([
        [list_only, { query: Q.LN, variables: V.X }],
        [Object.assign({ type }, pruned), { error: "must provide `status` with `type`" }],
        [Object.assign({ type, owner }, pruned), { error: "currently unsupported query: `owner` with `type`" }],
        [Object.assign({ status }, pruned), { query: Q.ST, variables: V.X }],
        [Object.assign({ status, type }, pruned), { query: Q.ST, variables: V.ST }],
        [Object.assign({ status, createdAt }, pruned), { error: err_msg("type", "status") }],
        [Object.assign({ type, createdAt }, pruned), { error: err_msg("status", "type") }],
        [Object.assign({ owner, createdAt }, pruned), { error: err_msg("status", "owner") }],
        [Object.assign({ owner }, pruned), { query: Q.OS, variables: V.X }],
        [Object.assign({ status, owner }, pruned), { query: Q.OS, variables: V.SO }],
        [Object.assign(Object.assign({ status, type }, CAA), pruned), { query: Q.ST, variables: V.STCB }],
        [Object.assign(Object.assign({ status, owner }, CAA), pruned), { query: Q.OS, variables: V.SOCB }],
        [Object.assign(Object.assign({ status, type }, CAR), pruned), { query: Q.ST, variables: V.STC }],
        [Object.assign(Object.assign({ status, owner }, CAR), pruned), { query: Q.OS, variables: V.SOC }]
    ]).get(cleaned) || { error: "no match for arguments provided to node.list(arguments)" };
    if (match.error)
        throw new Error(match.error);
    const { data } = yield CRUD(Object.assign(Object.assign({}, match), { authMode }));
    const response = ((_b = data === null || data === void 0 ? void 0 : data.nodesByOwnerStatus) === null || _b === void 0 ? void 0 : _b.items) ||
        ((_d = data === null || data === void 0 ? void 0 : data.nodesByStatusType) === null || _d === void 0 ? void 0 : _d.items) ||
        ((_e = data === null || data === void 0 ? void 0 : data.listNodes) === null || _e === void 0 ? void 0 : _e.items) ||
        data;
    return response;
});
export const node = {
    create: nodeCreate,
    read: nodeRead,
    update: nodeUpdate,
    delete: nodeDelete,
    connections: getConnectedNodesByNodeID,
    list,
};
