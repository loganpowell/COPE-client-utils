import { isPlainObject, isArray } from "@thi.ng/checks"
import { is_alias } from "../src/utils"

/**
 * @example
 * abbreviateIDVals({
 *    nodes      : [
 *        {
 *            id     : "1de7733a-5358-4863-8640-32cb3dad6e",
 *            status : "A",
 *            type   : "B"
 *        },
 *        {
 *            id     : "1de7733a-5358-4863-8640-32cb3dad6ef0",
 *            status : "A",
 *            type   : "B"
 *        }
 *    ],
 *    edge       : { id: "fasdfasdfasdf", type: "TO", weight: null },
 *    edge_nodes : [
 *        {
 *            edgeID : "faffasfdasdf",
 *            nodeID : "1de7733a-5358-4863-8640-32cb3dad6e"
 *        },
 *        {
 *            edgeID : "faffasfdasdf",
 *            nodeID : "1de7733a-5358-4863-8640-32cb3dad6ef0"
 *        }
 *    ]
 *})
 *
 * // =>  { nodes:
 * // =>     [ { id: 'id0', status: 'A', type: 'B' },
 * // =>     { id: 'id1', status: 'A', type: 'B' } ],
 * // =>     edge: { id: 'edgeID', type: 'TO', weight: null },
 * // =>     edge_nodes:
 * // =>     [ { edgeID: 'edgeID', nodeID: 'id0' },
 * // =>     { edgeID: 'edgeID', nodeID: 'id1' } ] }
 */
export const abbreviateIDVals = (input, i = 0, edge = false) => {
    if (edge) {
        if (input) return (input.id = `edgeID`)
        return input
    }
    if (isPlainObject(input)) {
        if (input.id && !is_alias(input.id)) input.id = `id${i}`
        if (input.edgeID && !is_alias(input.edgeID)) input.edgeID = `edgeID`
        if (input.nodeID && !is_alias(input.nodeID)) input.nodeID = `id${i}`
        Object.entries(input).forEach(([k, v], idx) =>
            k === "edge" ? abbreviateIDVals(v, idx, true) : abbreviateIDVals(v, idx),
        )
    }
    if (isArray(input)) {
        input.forEach((i, idx) => abbreviateIDVals(i, idx))
        return input
    }
    return input
}
