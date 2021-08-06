import { API } from "../graphql"
import { asset } from "./assets"
import { assetPr } from "./assetsPr"
import { node } from "./nodes"
import { CRUD } from "../utils"

type Publisher = {
    node_id: string
    status: API.NodeStatus
}

/**
 * Takes a node ID and looks at it's assets and assetsPr. If
 * assets are found, toggles all of them to assetsPr or
 * vice-versa
 */
export const toggleAssets = async ({ id }: API.GetNodeQueryVariables) => {
    // input: node_id
    // output: side effects (for each asset -> CRUD convert and return)
    /**
     * UX:
     * 1. user toggles "DRAFT" | "REVIEWED" -> "PUBLISHED" | "EDITED"
     * 2. gets prompt to "Are you sure?"
     * 3. confirms
     * 4. toggle all `assets` -> `assetsPr`
     */
    const res = await node.read({ id })
    if (!res) {
        console.log("No Node found when toggleing assets for this id:", id)
        return null
    }
    const { assets, assetsPr } = res
    const pub = assets?.items.length
    const todo = pub ? assets.items : assetsPr.items
    const op = pub ? asset : assetPr
    return await Promise.all(todo.map(async ({ id }) => await op.convert({ id })))
}
