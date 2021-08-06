import * as api from "../graphql/API"
import { assetPr, asset } from "../commands"
//
//
//   e88~~8e  888-~88e 888  888 888-~88e-~88e  d88~\
//  d888  88b 888  888 888  888 888  888  888 C888
//  8888__888 888  888 888  888 888  888  888  Y88b
//  Y888    , 888  888 888  888 888  888  888   888D
//   "88___/  888  888 "88_-888 888  888  888 \_88P
//
//

// REMOVED: use "./src/modesl/index.d.ts" instead

//
//    d8
//  _d88__ Y88b  / 888-~88e   e88~~8e   d88~\
//   888    Y888/  888  888b d888  88b C888
//   888     Y8/   888  8888 8888__888  Y88b
//   888      Y    888  888P Y888    ,   888D
//   "88_/   /     888-_88"   "88___/  \_88P
//         _/      888
//

type EdgeNodeStitch = {
    id: string
    edge_id: string
    node_id: string
}
export type Relation =
    | {
          nodes: Array<api.Node | null>
          edge: api.Edge
          edge_nodes: Array<EdgeNodeStitch | null>
      }
    | Record<string, never>

export type LinksConfig = {
    refs: Record<string, unknown>
    links: Array<Relation>
}

export type Resource = api.Asset | api.AssetPr

export type ResourceConnection = api.ModelAssetConnection | api.ModelAssetPrConnection

export type ResourceOps = typeof asset | typeof assetPr

export type AssetConfig = {
    node?: api.Node
    assets: Array<api.Asset>
}

export type AWSDateTime = Date

export type ListNodesInput = {
    sortDirection?: api.ModelSortDirection | string
    limit?: number
    filter?: api.ModelNodeFilterInput
    status?: api.NodeStatus | string
    type?: api.NodeType | string
    createdAt?: string | [string]
    nextToken?: string
    owner?: string
}

//
//  ,e,            d8                      88~\
//   "  888-~88e _d88__  e88~~8e  888-~\ _888__   /~~~8e   e88~~\  e88~~8e   d88~\
//  888 888  888  888   d888  88b 888     888         88b d888    d888  88b C888
//  888 888  888  888   8888__888 888     888    e88~-888 8888    8888__888  Y88b
//  888 888  888  888   Y888    , 888     888   C888  888 Y888    Y888    ,   888D
//  888 888  888  "88_/  "88___/  888     888    "88_-888  "88__/  "88___/  \_88P
//
//

export interface LinkInput {
    nodes: Array<api.Node | null>
    edge: api.Edge
}

export interface AssetGroupInput {
    node: api.Node | null
    assets: Array<api.Asset>
}
