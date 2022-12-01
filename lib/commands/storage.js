import { __awaiter } from "tslib"
import { Storage } from "@aws-amplify/storage"
import { Auth } from "@aws-amplify/auth"
import { v4 as uuid } from "uuid"
import * as mutations from "../graphql/mutations"
import { $global$ } from "./amplifyConfig"
//import { URL2obj } from "@-0/utils"
//import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api"
//import { getIn } from "@thi.ng/paths"
//import * as queries from "../graphql/queries"
import { CRUD } from "../utils"
var Level
;(function (Level) {
    Level["private"] = "private"
    Level["public"] = "public"
    Level["protected"] = "protected"
})(Level || (Level = {}))
export const isFile = ({ type, content }) => {
    const [cat, sub] = type.split("_")
    const isFile = content.size // a File object has a size property
    return cat === "F" && isFile
}
// https://w3c.github.io/FileAPI/#filelist-section
// https://www.sufle.io/blog/aws-amplify-storage-part-3
export const storeObject = (
    { content, name, id, nodeID, createdAt, type, index, owner, editors },
    isAssetPr = true,
    level = Level.protected,
) =>
    __awaiter(void 0, void 0, void 0, function* () {
        const {
            // @ts-ignore
            aws_user_files_s3_bucket: bucket,
            // @ts-ignore
            aws_user_files_s3_bucket_region: region,
        } = $global$.deref().config
        //console.log({ bucket, region })
        const { type: mimeType, name: file_name } = content
        const file_parts = file_name.split(".")
        const cut = file_parts.length - 1
        const extension = file_parts[cut]
        const UID = uuid()
        const key = `${extension}/${UID}--${file_name}`
        //console.log({ key, content, level, mimeType, file_name })
        const { id: user_id } = yield Auth.currentUserInfo()
        //console.log({ user_id, ...rest })
        return yield Storage.put(key, content, {
            level,
            contentType: mimeType,
            // others: https://github.com/aws-amplify/amplify-js/blob/a047ce73/packages/storage/src/Storage.ts#L185
            //progressCallback
        })
            .then(s3Response =>
                __awaiter(void 0, void 0, void 0, function* () {
                    //console.log({ s3Response })
                    const { data } = yield CRUD({
                        query: (isAssetPr && mutations.createAssetPr) || mutations.createAsset,
                        variables: {
                            input: {
                                name,
                                // public is different: `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`
                                content: `https://${bucket}.s3.${region}.amazonaws.com/${level}/${user_id}/${key}`,
                                id,
                                nodeID,
                                createdAt,
                                type,
                                index,
                                owner,
                                editors,
                            },
                        },
                    })
                    //console.log({ data })
                    return (isAssetPr && data.createAssetPr) || data.createAsset
                }),
            )
            .catch(error => {
                console.error("Error storing file:", { content, error })
            })
    })
// "https://cope-storage-bucket180042-dev.s3.us-east-1.amazonaws.com/protected/us-east-1:92a4c58a-36ff-44ca-8f04-ae3cf469c3ec/jpg/99b318a9-9902-4fcb-87a3-fce9c05b6f51--jimi.jpg"
export const removeObject = (url, { level } = { level: "protected" }) =>
    __awaiter(void 0, void 0, void 0, function* () {
        const [_, target] = url.split(level)
        const [__, bucket, format, file] = target.split("/")
        const todo = [format, file].join("/")
        console.log("removing s3 Object:", { todo })
        // @ts-ignore
        const deleted = yield Storage.remove(todo, { level }).catch(e => {
            console.warn("Error deleting S3 Object:", e)
        })
        return deleted
        //const list = async () => {
        //    const stored = await Storage.list("jpg", {
        //        level: "protected",
        //    })
        //    console.log({ stored })
        //    const deleted = await Storage.remove(
        //        "jpg/8066e433-bad7-48be-bef7-244833a4ce80--jimi.jpg",
        //        { level: "protected" },
        //    )
        //}
    })
