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
export const storeObject = ({ fileForUpload, name, id, node_id, createdAt, type, index, owner, editors, }, isAssetPr = true, level = Level.protected) => __awaiter(void 0, void 0, void 0, function* () {
    const { aws_user_files_s3_bucket: bucket, aws_user_files_s3_bucket_region: region, } = $global$.deref().config;
    const { type: mimeType, name: file_name } = fileForUpload;
    const file_parts = file_name.split(".");
    const cut = file_parts.length - 1;
    const extension = file_parts[cut];
    const UID = uuid();
    const key = `${extension}/${UID}--${file_name}`;
    const { id: user_id } = yield Auth.currentUserInfo();
    return yield Storage.put(key, fileForUpload, {
        level,
        contentType: mimeType,
    })
        .then((s3Response) => __awaiter(void 0, void 0, void 0, function* () {
        const { data } = yield CRUD({
            query: (isAssetPr && mutations.createAssetPr) || mutations.createAsset,
            variables: {
                input: {
                    name,
                    content: `https://${bucket}.s3.${region}.amazonaws.com/protected/${user_id}/${key}`,
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
        console.error("Error storing file:", { fileForUpload }, { error });
    });
});
