import { __awaiter } from "tslib"
//import { v4 as uuid } from "uuid"
import { graphql } from "../graphql"
import { edge } from "../commands"
const { mutations } = graphql
import { CRUD, shortUUID } from "../utils"
export const titleizeNodeIds = ({
    title,
    id,
    type,
    status,
    createdAt,
    edges,
    _assets,
    op,
    authMode,
}) =>
    __awaiter(void 0, void 0, void 0, function* () {
        // FIXME: convert into a single batch Graphql Query string
        // TODO: check on batch operation count limit for Appsync/Amplify
        // SEE utils/batch.ts
        const friendly = shortUUID(title)
        // title hasn't yet been integrated into nodeID
        // UPDATE ASSETS
        const updated_assets = yield Promise.all(
            _assets === null || _assets === void 0
                ? void 0
                : _assets.items.map(
                      ({ id, content, createdAt, editors, index, name, type, owner }) =>
                          __awaiter(void 0, void 0, void 0, function* () {
                              return yield op.update(
                                  {
                                      id,
                                      content,
                                      createdAt,
                                      editors,
                                      index,
                                      name,
                                      nodeID: friendly,
                                      type,
                                      owner,
                                  },
                                  authMode,
                              )
                          }),
                  ),
        )
        //console.log({ updated_assets })
        // UPDATE EDGES
        //const edges = await getConnectedNodesByNodeID({ id })
        const updated_edges =
            (edges.length &&
                (yield Promise.all(
                    edges.map(({ id: edgeID }) =>
                        __awaiter(void 0, void 0, void 0, function* () {
                            const updatedEdge = yield edge.relink(
                                {
                                    edgeID,
                                    nodeID_old: id,
                                    nodeID_new: friendly,
                                },
                                authMode,
                            )
                            return updatedEdge
                        }),
                    ),
                ))) ||
            null
        //console.log("updated Edges:", JSON.stringify(updated_edges, null, 2))
        // CREATE NEW NODE
        const {
            data: { createNode },
        } = yield CRUD({
            query: mutations.createNode,
            variables: {
                input: {
                    id: friendly,
                    type,
                    status,
                    createdAt,
                },
            },
            authMode,
        })
        //console.log({ createNode })
        // DELETE OLD NODE
        const {
            data: { deleteNode },
        } = yield CRUD({
            query: mutations.deleteNode,
            variables: {
                input: { id },
            },
            authMode,
        })
        console.log({ deleteNode, createNode, updated_assets, updated_edges })
        return createNode
    })
