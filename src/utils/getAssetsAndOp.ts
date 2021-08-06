import { API as api } from "../graphql"
import { ResourceOps, ResourceConnection } from "../api"
import { assetPr, asset } from "../commands"

export const getAssetsAndOp = ({
    assets,
    assetsPr,
}: {
    assets: api.ModelAssetConnection
    assetsPr: api.ModelAssetPrConnection
}) => {
    const op: ResourceOps = assets?.items.length ? asset : assetPr
    const _assets: ResourceConnection = assets?.items.length ? assets : assetsPr
    return { _assets, op }
}
