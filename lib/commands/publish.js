import { __awaiter } from "tslib"
import { node } from "./nodes"
import { getAssetsAndOp } from "../utils"
/**
 * Takes a node ID and looks at it's assets and assetsPr. If
 * assets are found, toggles all of them to assetsPr or
 * vice-versa
 */
export const toggleAssets = ({ id }) =>
    __awaiter(void 0, void 0, void 0, function* () {
        // input: nodeID
        // output: side effects (for each asset -> CRUD convert and return)
        /**
         * UX:
         * 1. user toggles "DRAFT" | "REVIEWED" -> "PUBLISHED" | "EDITED"
         * 2. gets prompt to "Are you sure?"
         * 3. confirms
         * 4. toggle all `assets` -> `assetsPr`
         */
        const res = yield node.read({ id })
        if (!res) {
            console.log("No Node found when toggleing assets for this id:", id)
            return null
        }
        const { assets, assetsPr } = res
        const { _assets, op } = getAssetsAndOp({ assets, assetsPr })
        return yield Promise.all(
            _assets === null || _assets === void 0
                ? void 0
                : _assets.items.map(({ id }) =>
                      __awaiter(void 0, void 0, void 0, function* () {
                          return yield op.convert({ id })
                      }),
                  ),
        )
    })
