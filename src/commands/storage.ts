import { Storage } from "@aws-amplify/storage"
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api"
import { URL2obj } from "@-0/utils"

import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"

import { CRUD, MIMETypes } from "../utils"

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types

enum Level {
    private = "private",
    public = "public",
    protected = "protected",
}

const getContentType = (file_name_w_extension = "") => {
    console.log({ file_name_w_extension })

    const file_parts = file_name_w_extension.split(".")
    const extension = file_parts[file_parts.length - 1]
    console.log({ extension })
    const contentType = MIMETypes[extension]
    if (!contentType) throw new Error(`No MIMEType found for extension ${extension}`)
    return contentType
}

// https://www.sufle.io/blog/aws-amplify-storage-part-3
export const storagePut = async (
    { file_name_w_extension, object },
    level: Level = Level.private,
) => {
    const contentType = getContentType(file_name_w_extension)
    const results = await Storage.put(file_name_w_extension, object, {
        level,
        contentType,
    })
    return results
}
