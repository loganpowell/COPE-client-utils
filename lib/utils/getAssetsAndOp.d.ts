import { API as api } from "../graphql";
import { ResourceOps, ResourceConnection } from "../api";
export declare const getAssetsAndOp: ({ assets, assetsPr, }: {
    assets: api.ModelAssetConnection;
    assetsPr: api.ModelAssetPrConnection;
}) => {
    _assets: ResourceConnection;
    op: ResourceOps;
};
