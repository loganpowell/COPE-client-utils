import { __awaiter } from "tslib";
import { EquivMap } from "@thi.ng/associative";
import { isArray } from "@thi.ng/checks";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
//import { v4 as uuid } from "uuid"
import { graphql, API as api } from "../graphql";
import { edge } from "../commands";
import { titleizeNodeIds } from "./titleizeNodeIds";
const { mutations, queries, custom } = graphql;
import { CRUD, url_compat, getAssetsAndOp } from "../utils";
const nodeCreate = ({ id, status, type, createdAt, owner, updatedAt }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { createNode }, } = yield CRUD({
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
    const { data: { getNode }, } = yield CRUD({
        query: custom.getNodeWithAssets,
        variables: { id },
        authMode,
    });
    return getNode;
});
export const getConnectedNodesByNodeID = ({ id, edgeType }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { data: { getNode }, } = yield CRUD({
        query: authMode === GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
            ? custom.connections
            : custom.connectionsPublic,
        variables: { id },
        authMode,
    });
    if (!getNode) {
        console.warn("No Node found for this id:", id);
        return null;
    }
    //console.log("getNode:", JSON.stringify(getNode, null, 2))
    const node = getNode;
    const all = (_a = node === null || node === void 0 ? void 0 : node.edges) === null || _a === void 0 ? void 0 : _a.items.reduce((acc, { edge }) => {
        var _a, _b;
        //console.log("edge:", JSON.stringify(edge, null, 2))
        const not_me = (_a = edge === null || edge === void 0 ? void 0 : edge.nodes) === null || _a === void 0 ? void 0 : _a.items.filter(({ node }) => node.id !== id);
        if (!not_me.length)
            return acc;
        return acc.concat(Object.assign(Object.assign({}, edge), { nodes: 1, node: (_b = not_me[0]) === null || _b === void 0 ? void 0 : _b.node }));
    }, []);
    //console.log({ all })
    return edgeType ? all.filter(({ type }) => type === edgeType) : all;
});
/**
 * "When updating any part of the composite sort key for
 * @key 'Nodes_by_type_status_createdAt', you must provide
 * all fields for the key
 *
 * Makes one->two API calls:
 * 1. for reading the existing node by ID
 * if no change -> return: elseif change:
 * 2. 1st call supplies any required and missing variables
 *    to the updateNode mutation (2nd call)
 */
const nodeUpdate = ({ id, type, status, owner, createdAt }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS, titleize = true) => __awaiter(void 0, void 0, void 0, function* () {
    // if the id changes asIs is undefined
    // change everything but id
    // could be the wrong id was input -> error
    // could be the id has changed -> update
    const asIs = yield nodeRead({ id });
    if (!asIs) {
        console.warn("No Node found for this id:", id);
        return;
    }
    const { type: _t, status: _s, owner: _o, createdAt: _c, assets, assetsPr } = asIs;
    const { _assets, op } = getAssetsAndOp({ assets, assetsPr });
    // @ts-ignore
    const title_asset = _assets === null || _assets === void 0 ? void 0 : _assets.items.filter(({ type }) => type === api.AssetType.T_OG_TITLE)[0];
    //console.log({ _assets, title_asset })
    // check to see if update matches existing node
    const title = title_asset.content;
    const stub = url_compat(title);
    //console.log({ stub, _i_frendly: _i.split("~")[0] })
    if (titleize && title && stub !== id.split("~")[0]) {
        console.log("changing Node IDs for all connections to: ", id);
        return titleizeNodeIds({
            id,
            title,
            type: type || _t,
            status: status || _s,
            createdAt: createdAt || _c,
            _assets,
            authMode,
            edges: getConnectedNodesByNodeID({ id }),
            op,
        });
    }
    const no_change = new EquivMap([
        [{ type: _t, status: _s, owner: _o, createdAt: _c }, true],
    ]).get({ type, status, owner, createdAt });
    if (no_change)
        return asIs;
    const { data: { updateNode }, } = yield CRUD({
        query: mutations.updateNode,
        variables: {
            input: {
                id,
                type: type || _t,
                status: status || _s,
                owner: owner || _o,
                createdAt: createdAt || _c,
            },
        },
        authMode,
    });
    //console.log({ updateNode })
    return updateNode;
});
const nodeDelete = ({ id }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    const { data: { getNode }, } = yield CRUD({
        query: custom.connections,
        variables: { id },
        authMode,
    });
    // FIXME: convert into a single batch Graphql Query string
    // TODO: check on batch operation count limit for Appsync/Amplify
    const { assets, assetsPr, edges } = getNode;
    //console.log({ assets, assetsPr, edges })
    // clean up connections
    const deletedEdges = yield Promise.all(edges === null || edges === void 0 ? void 0 : edges.items.map(({ edge: { id } }) => __awaiter(void 0, void 0, void 0, function* () { return yield edge.delete({ id }); })));
    //console.log("deletedEdges:", JSON.stringify(deletedEdges, null, 2))
    // clean up assets
    const { _assets, op } = getAssetsAndOp({ assets, assetsPr });
    // FIXME: when converting to GraphQL batch, 🔥 must delete any `F_` assets with code (s3) 🔥
    const deletedAssets = yield Promise.all(_assets === null || _assets === void 0 ? void 0 : _assets.items.map(({ id }) => __awaiter(void 0, void 0, void 0, function* () { return yield op.delete({ id }); })));
    //console.log({ deletedAssets })
    const { data: { deleteNode }, } = yield CRUD({
        query: mutations.deleteNode,
        variables: { input: { id } },
        authMode,
    });
    return deleteNode;
});
const list = ({ filter, limit = 50, nextToken, sortDirection, owner, status, createdAt, type, }, authMode = GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS) => __awaiter(void 0, void 0, void 0, function* () {
    var _b, _d, _e, _f;
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
        OT: queries.nodesByOwnerType,
        LN: queries.listNodes,
    };
    const CA = isArray(createdAt) ? createdAt : [null, null];
    const V = {
        ListNodes: cleaned,
        Owner: Object.assign({ owner }, pruned),
        OwnerStatus: Object.assign({ owner, statusCreatedAt: { beginsWith: { status } } }, pruned),
        OwnerStatusCreatedAt: Object.assign({ owner, statusCreatedAt: { beginsWith: { status, createdAt } } }, pruned),
        OwnerStatusCreatedBetween: Object.assign({ owner, statusCreatedAt: {
                between: [
                    { status, createdAt: CA[0] },
                    { status, createdAt: CA[1] },
                ],
            } }, pruned),
        Status: Object.assign({ status }, pruned),
        StatusType: Object.assign({ status, typeCreatedAt: { beginsWith: { type } } }, pruned),
        StatusTypeCreatedAt: Object.assign({ status, typeCreatedAt: { beginsWith: { type, createdAt } } }, pruned),
        StatusTypeCreatedBetween: Object.assign({ status, typeCreatedAt: {
                between: [
                    { type, createdAt: CA[0] },
                    { type, createdAt: CA[1] },
                ],
            } }, pruned),
        OwnerType: Object.assign({ owner, typeCreatedAt: { beginsWith: { type } } }, pruned),
        OwnerTypeCreatedAt: Object.assign({ owner, typeCreatedAt: { beginsWith: { type, createdAt } } }, pruned),
        OwnerTypeCreatedBetween: Object.assign({ owner, typeCreatedAt: {
                between: [
                    { type, createdAt: CA[0] },
                    { type, createdAt: CA[1] },
                ],
            } }, pruned),
    };
    const CAA = isArray(createdAt) ? { createdAt } : { createdAt: undefined };
    const CAD = !isArray(createdAt) ? { createdAt } : { createdAt: undefined };
    const err_msg = (needs, has) => `Must provide \`${needs}\` when using \`${has}\` with \`createdAt\``;
    // prettier-ignore
    const match = new EquivMap([
        [list_only, { query: Q.LN, variables: V.ListNodes }],
        [Object.assign({ type }, pruned), { error: "must provide `status` or `owner` with `type`" }],
        [Object.assign({ owner }, pruned), { query: Q.OT, variables: V.Owner }],
        [Object.assign({ status }, pruned), { query: Q.ST, variables: V.Status }],
        [Object.assign({ status, createdAt }, pruned), { error: err_msg("type", "status") }],
        [Object.assign({ type, createdAt }, pruned), { error: err_msg("status` or `owner", "type") }],
        [Object.assign({ owner, createdAt }, pruned), { error: err_msg("status` or `type", "owner") }],
        [Object.assign({ status, type }, pruned), { query: Q.ST, variables: V.StatusType }],
        [Object.assign({ type, owner }, pruned), { query: Q.OT, variables: V.OwnerType }],
        [Object.assign({ status, owner }, pruned), { query: Q.OS, variables: V.OwnerStatus }],
        [Object.assign(Object.assign({ type, owner }, CAA), pruned), { query: Q.OT, variables: V.OwnerTypeCreatedBetween }],
        [Object.assign(Object.assign({ status, type }, CAA), pruned), { query: Q.ST, variables: V.StatusTypeCreatedBetween }],
        [Object.assign(Object.assign({ status, owner }, CAA), pruned), { query: Q.OS, variables: V.OwnerStatusCreatedBetween }],
        [Object.assign(Object.assign({ status, type }, CAD), pruned), { query: Q.ST, variables: V.StatusTypeCreatedAt }],
        [Object.assign(Object.assign({ status, owner }, CAD), pruned), { query: Q.OS, variables: V.OwnerStatusCreatedAt }],
        [Object.assign(Object.assign({ type, owner }, CAD), pruned), { query: Q.OT, variables: V.OwnerTypeCreatedAt }]
    ]).get(cleaned) || { error: "no match for arguments provided to node.list(arguments)" };
    //console.log("entries:", JSON.stringify([ ...EM.keys() ], null, 4))
    //console.log({ match, list_only, cleaned })
    if (match.error)
        throw new Error(match.error);
    // @ts-ignore
    const { data } = yield CRUD(Object.assign(Object.assign({}, match), { authMode }));
    const response = ((_b = data === null || data === void 0 ? void 0 : data.nodesByOwnerStatus) === null || _b === void 0 ? void 0 : _b.items) ||
        ((_d = data === null || data === void 0 ? void 0 : data.nodesByStatusType) === null || _d === void 0 ? void 0 : _d.items) ||
        ((_e = data === null || data === void 0 ? void 0 : data.nodesByOwnerType) === null || _e === void 0 ? void 0 : _e.items) ||
        ((_f = data === null || data === void 0 ? void 0 : data.listNodes) === null || _f === void 0 ? void 0 : _f.items) ||
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
