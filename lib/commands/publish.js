import { __awaiter } from "tslib";
import { asset } from "./assets";
import { assetPr } from "./assetsPr";
import { node } from "./nodes";
export const toggleAssets = ({ id }) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield node.read({ id });
    if (!res) {
        console.log("No Node found when toggleing assets for this id:", id);
        return null;
    }
    const { assets, assetsPr } = res;
    const pub = assets === null || assets === void 0 ? void 0 : assets.items.length;
    const todo = pub ? assets.items : assetsPr.items;
    const op = pub ? asset : assetPr;
    return yield Promise.all(todo.map(({ id }) => __awaiter(void 0, void 0, void 0, function* () { return yield op.convert({ id }); })));
});
