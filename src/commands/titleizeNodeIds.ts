import { EquivMap } from "@thi.ng/associative"
import { isArray, isUUID } from "@thi.ng/checks"
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api"
//import { v4 as uuid } from "uuid"
import { graphql, API as api } from "../graphql"
import { ListNodesInput, Resource, ResourceOps, ResourceConnection } from "../api"
import { edge, assetPr, asset } from "../commands"
const { mutations, queries, custom } = graphql

import { CRUD, shortUUID, url_compat, getAssetsAndOp } from "../utils"

export const titleizeNodeIds = async ({
    title,
    id,
    type,
    status,
    createdAt,
    edges,
    _assets,
    op,
    authMode,
}) => {
    // FIXME: convert into a single batch Graphql Query string
    // TODO: check on batch operation count limit for Appsync/Amplify
    // SEE utils/batch.ts
    const friendly = shortUUID(title)
    // title hasn't yet been integrated into node_id
    // UPDATE ASSETS
    const updated_assets = await Promise.all(
        _assets?.items.map(
            async ({ id, content, createdAt, editors, index, name, type, owner }: Resource) =>
                await op.update({
                    id,
                    content,
                    createdAt,
                    editors,
                    index,
                    name,
                    node_id: friendly,
                    type,
                    owner,
                }),
        ),
    )
    //console.log({ updated_assets })
    // UPDATE EDGES
    //const edges = await getConnectedNodesByNodeID({ id })
    const updated_edges =
        (edges &&
            (await Promise.all(
                edges.map(async ({ id: edge_id }: api.Edge) => {
                    const updatedEdge = await edge.relink({
                        edge_id,
                        node_id_old: id,
                        node_id_new: friendly,
                    })
                    return updatedEdge
                }),
            ))) ||
        null
    console.log("updated Edges:", JSON.stringify(updated_edges, null, 2))
    // CREATE NEW NODE
    const {
        data: { createNode },
    } = await CRUD({
        query: mutations.createNode,
        variables: {
            input: {
                id: friendly,
                type,
                status,
                createdAt,
            },
        },
    })
    //console.log({ createNode })
    // DELETE OLD NODE
    const {
        data: { deleteNode },
    } = await CRUD({
        query: mutations.deleteNode,
        variables: {
            input: { id },
        },
        authMode,
    })
    //console.log({ deleteNode })
    return createNode
}
