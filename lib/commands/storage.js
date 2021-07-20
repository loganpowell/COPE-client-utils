import { __awaiter } from "tslib";
import { Storage } from "@aws-amplify/storage";
import { MIMETypes } from "../utils";
var Level;
(function (Level) {
    Level["private"] = "private";
    Level["public"] = "public";
    Level["protected"] = "protected";
})(Level || (Level = {}));
const getContentType = (file_name_w_extension = "") => {
    console.log({ file_name_w_extension });
    const file_parts = file_name_w_extension.split(".");
    const extension = file_parts[file_parts.length - 1];
    console.log({ extension });
    const contentType = MIMETypes[extension];
    if (!contentType)
        throw new Error(`No MIMEType found for extension ${extension}`);
    return contentType;
};
export const storagePut = ({ file_name_w_extension, object }, level = Level.private) => __awaiter(void 0, void 0, void 0, function* () {
    const contentType = getContentType(file_name_w_extension);
    const results = yield Storage.put(file_name_w_extension, object, {
        level,
        contentType,
    });
    return results;
});
