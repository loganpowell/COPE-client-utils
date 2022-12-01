import { Relation, LinkInput, LinksConfig, AssetGroupInput, AssetConfig } from "../api"
/**
 * any node id with length less than a threshold is treated as an alias
 */
export declare const is_alias: (id: any, threshold?: number) => boolean
/**
 * creates input arguments to create a link between two
 * nodes in order to enable directed edges,
 *
 * Note: the edge_node order must be maintained during
 * insertion/EdgeNode creation. I.e., EdgeNode (edge_node)
 * insertion order = [ from, to ]
 *
 * @example
 * gen_link_input({
 *    nodes : [ { id: "this is a reference" }, { id: "alias", status: "A", type: "B" } ],
 *    edge  : { id: "also a (edge) reference" }
 * })
 * // => { nodes: [
 * // =>     null,
 * // =>     { id: 'bebc9d30-f844-4579-892d-e7b177c2a4e7', status: 'A', type: 'B' }
 * // =>   ],
 * // =>   edge: null, // reference = no new edge
 * // =>   edge_nodes: [
 * // =>      { edgeID: 'also a (edge) reference', nodeID: 'this is a reference' },
 * // =>      { edgeID: 'also a (edge) reference', nodeID: 'bebc9d30-f844-4579-892d-e7b177c2a4e7' }
 * // =>   ]
 * // => }
 */
export declare const gen_link_input: ({ edge, nodes }: LinkInput, refs?: {}) => Relation
/**
 *
 * generates a cluster of link inputs to allow correct
 * references to be associated between links that are
 * related (clustered) together
 *
 * @example
 *  gen_link_cluster_input([
 *     {
 *         nodes : [ { id: "001", status: "A", type: "D" }, { id: "002", status: "H", type: "I" } ],
 *         edge  : { id: "1:1", type: "FROM", weight: null }
 *     },
 *     {
 *         nodes : [ { id: "001", status: "A", type: "D" }, node_alias2 ],
 *         edge  : { id: "this is long enough to be unique", type: 'TO', weight: 1 }
 *     }
 * ])
 * //=>{ refs:
 * //=>   { 001: '919d427a-e28d-44e4-a69b-0f8249205c5d',
 * //=>     002: 'magic id for 002',
 * //=>     '1:1': 'f0406b6e-5ecb-4451-a248-6b4702434aaf' },
 * //=>  links:
 * //=>   [ { nodes:
 * //=>        [ { id: '919d427a-e28d-44e4-a69b-0f8249205c5d', status: 'A', type: 'D' },
 * //=>          { id: 'magic id for 002', status: 'H', type: 'I' } ],
 * //=>       edge:
 * //=>        { id: 'f0406b6e-5ecb-4451-a248-6b4702434aaf', type: 'FROM', weight: null },
 * //=>       edge_nodes:
 * //=>        [ { edgeID: 'f0406b6e-5ecb-4451-a248-6b4702434aaf', nodeID: '919d427a-e28d-44e4-a69b-0f8249205c5d' },
 * //=>          { edgeID: 'f0406b6e-5ecb-4451-a248-6b4702434aaf', nodeID: 'magic id for 002' } ]
 * //=>     },
 * //=>     { nodes:
 * //=>        [ { id: '919d427a-e28d-44e4-a69b-0f8249205c5d', status: 'A', type: 'D' },
 * //=>          { id: 'magic id for 002', status: 'A', type: 'B' } ],
 * //=>       edge: { id: "this is long enough to be unique", type: 'TO', weight: 1 },
 * //=>       edge_nodes:
 * //=>        [ { edgeID: 'this is long enough to be unique',
 * //=>            nodeID: '919d427a-e28d-44e4-a69b-0f8249205c5d' },
 * //=>          { edgeID: 'this is long enough to be unique',
 * //=>            nodeID: 'magic id for 002' } ] } ]
 * //=>     }
 */
export declare const gen_link_cluster_input: (configs: Array<LinkInput>) => LinksConfig
/**
 * generates associations between a set of assets and a node
 * -> inputs for asset creation/mutations.
 *
 * @example
 * gen_assets_for_node_input({
 *      node: {
 *          id: "nodeID",
 *          status: "DRAFT"
 *      },
 *      assets: [
 *           {
 *                 id      : "new id",
 *                 type    : AssetType.V_IMAGE,
 *                 name    : "fancy image",
 *                 content : "https://i.picsum.photos/..."
 *             },
 *             {
 *                 id      : "new id",
 *                 type    : AssetType.V_IMAGE,
 *                 name    : "another fancy image",
 *                 content : "https://i.picsum.photos/..."
 *             }
 *      ]
 * })
 *
 * //=>{
 * //=>     node: {
 * //=>         id: "fef47b75-8850-44d9-8b57-79a46ff35fdb"",
 * //=>         status: "DRAFT"
 * //=>     },
 * //=>     assets: [
 * //=>          {
 * //=>                id      : "e1e2a1bf-6eda-479c-a54c-fda7f893cef8"",
 * //=>                nodeID : "fef47b75-8850-44d9-8b57-79a46ff35fdb"",
 * //=>                type    : AssetType.V_IMAGE,
 * //=>                name    : "fancy image",
 * //=>                content : "https://i.picsum.photos/..."
 * //=>            },
 * //=>            {
 * //=>                id      : "c54df3a1-5a50-4f01-9ced-bd1b5963e88b",
 * //=>                nodeID : "fef47b75-8850-44d9-8b57-79a46ff35fdb"",
 * //=>                type    : AssetType.V_IMAGE,
 * //=>                name    : "another fancy image",
 * //=>                content : "https://i.picsum.photos/..."
 * //=>            }
 * //=>     ]
 * //=>}
 */
export declare const gen_assets_for_node_input: (config: AssetGroupInput) => AssetConfig
