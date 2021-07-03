import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"

import { CRUD } from "../utils"

export const assetCreate = async ({
    name,
    node_id,
    type,
    content,
    createdAt,
    editors,
    id,
    owner
}: api.CreateAssetInput) =>
    await CRUD({
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

export const assetRead = async ({ id }: api.GetAssetQueryVariables) =>
    await CRUD({
        query: queries.getAsset,
        variables: id
    })

export const assetUpdate = async ({
    id,
    content,
    createdAt,
    editors,
    name,
    node_id,
    owner,
    type
}: api.UpdateAssetInput) =>
    await CRUD({
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

export const assetDelete = async ({ id }: api.DeleteAssetInput) =>
    await CRUD({
        query: mutations.deleteAsset,
        variables: id
    })
