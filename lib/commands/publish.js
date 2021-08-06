import { __awaiter } from "tslib";
import { node } from "./nodes";
import { getAssetsAndOp } from "../utils";
export const toggleAssets = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield node.read({ id });
    if (!res) {
        console.log("No Node found when toggleing assets for this id:", id);
        return null;
    }
    const { assets, assetsPr } = res;
    const { _assets, op } = getAssetsAndOp({ assets, assetsPr });
    return yield Promise.all(_assets === null || _assets === void 0 ? void 0 : _assets.items.map(({ id }) => __awaiter(void 0, void 0, void 0, function* () { return yield op.convert({ id }); })));
});
