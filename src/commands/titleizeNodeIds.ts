import { EquivMap } from "@thi.ng/associative"
import { isArray, isUUID } from "@thi.ng/checks"
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api"
//import { v4 as uuid } from "uuid"
import { graphql, API as api } from "../graphql"
import { Resource } from "../api"
import { edge } from "../commands"
const { mutations } = graphql

import { CRUD, shortUUID } from "../utils"

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
    // title hasn't yet been integrated into nodeID
    // UPDATE ASSETS
    const updated_assets = await Promise.all(
        _assets?.items.map(
            async ({ id, content, createdAt, editors, index, name, type, owner }: Resource) =>
                await op.update(
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
                ),
        ),
    )
    //console.log({ updated_assets })
    // UPDATE EDGES
    //const edges = await getConnectedNodesByNodeID({ id })
    const updated_edges =
        (edges.length &&
            (await Promise.all(
                edges.map(async ({ id: edgeID }: api.Edge) => {
                    const updatedEdge = await edge.relink(
                        {
                            edgeID,
                            nodeID_old: id,
                            nodeID_new: friendly,
                        },
                        authMode,
                    )
                    return updatedEdge
                }),
            ))) ||
        null
    //console.log("updated Edges:", JSON.stringify(updated_edges, null, 2))
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
        authMode,
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
    console.log({ deleteNode, createNode, updated_assets, updated_edges })
    return createNode
}
