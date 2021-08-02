import { __awaiter } from "tslib";
import { Storage } from "@aws-amplify/storage";
import { Auth } from "@aws-amplify/auth";
import { v4 as uuid } from "uuid";
import * as mutations from "../graphql/mutations";
import { $global$ } from "./amplifyConfig";
import { CRUD } from "../utils";
var Level;
(function (Level) {
    Level["private"] = "private";
    Level["public"] = "public";
    Level["protected"] = "protected";
})(Level || (Level = {}));
export const isFile = ({ type, content }) => {
    const [cat, sub] = type.split("_");
    const isFile = content.size;
    return cat === "F" && isFile;
};
export const storeObject = ({ content, name, id, node_id, createdAt, type, index, owner, editors }, isAssetPr = true, level = Level.protected) => __awaiter(void 0, void 0, void 0, function* () {
    const { aws_user_files_s3_bucket: bucket, aws_user_files_s3_bucket_region: region, } = $global$.deref().config;
    const { type: mimeType, name: file_name } = content;
    const file_parts = file_name.split(".");
    const cut = file_parts.length - 1;
    const extension = file_parts[cut];
    const UID = uuid();
    const key = `${extension}/${UID}--${file_name}`;
    const { id: user_id } = yield Auth.currentUserInfo();
    return yield Storage.put(key, content, {
        level,
        contentType: mimeType,
    })
        .then((s3Response) => __awaiter(void 0, void 0, void 0, function* () {
        const { data } = yield CRUD({
            query: (isAssetPr && mutations.createAssetPr) || mutations.createAsset,
            variables: {
                input: {
                    name,
                    content: `https://${bucket}.s3.${region}.amazonaws.com/${level}/${user_id}/${key}`,
                    id,
                    node_id,
                    createdAt,
                    type,
                    index,
                    owner,
                    editors,
                },
            },
        });
        return (isAssetPr && data.createAssetPr) || data.createAsset;
    }))
        .catch(error => {
        console.error("Error storing file:", { content, error });
    });
});
export const removeObject = (url, { level } = { level: "protected" }) => __awaiter(void 0, void 0, void 0, function* () {
    const [_, target] = url.split(level);
    const [__, bucket, format, file] = target.split("/");
    const todo = [format, file].join("/");
    console.log("removing s3 Object:", { todo });
    const deleted = yield Storage.remove(todo, { level }).catch(e => {
        console.warn("Error deleting S3 Object:", e);
    });
    return deleted;
});
