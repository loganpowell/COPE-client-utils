import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"

import { CRUD } from "../utils"

const assetCreate = async ({ name, node_id, type, content, createdAt, editors, id, owner }: api.CreateAssetInput) => {
    const newAsset = await CRUD({
        query: mutations.createAsset,
        variables: {
            input: {
                name,
                node_id,
                type,
                content,
                createdAt,
                editors,
                id,
                owner
            }
        }
    })
    return newAsset
}

const assetRead = async ({ id }: api.GetAssetQueryVariables) => {
    const existingAsset = await CRUD({
        query: queries.getAsset,
        variables: id
    })

    return existingAsset
}

const assetUpdate = async ({ id, content, createdAt, editors, name, node_id, owner, type }: api.UpdateAssetInput) => {
    const updatedAsset = await CRUD({
        query: mutations.updateAsset,
        variables: {
            input: {
                id,
                content,
                createdAt,
                editors,
                name,
                node_id,
                owner,
                type
            }
        }
    })

    return updatedAsset
}

const assetDelete = async ({ id }: api.DeleteAssetInput) => {
    const deletedAsset = await CRUD({
        query: mutations.deleteAsset,
        variables: id
    })

    return deletedAsset
}

export const asset = {
    create: assetCreate,
    read: assetRead,
    update: assetUpdate,
    delete: assetDelete
}
