import { assetPr, asset } from "../commands";
export const getAssetsAndOp = ({ assets, assetsPr, }) => {
    const op = (assets === null || assets === void 0 ? void 0 : assets.items.length) ? asset : assetPr;
    const _assets = (assets === null || assets === void 0 ? void 0 : assets.items.length) ? assets : assetsPr;
    return { _assets, op };
};
