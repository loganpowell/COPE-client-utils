import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"

import { CRUD } from "../utils"

export const proxyCreate = async ({
    name,
    node_id,
    type,
    content,
    createdAt,
    editors,
    id,
    owner
}: api.CreateProxyInput) =>
    await CRUD({
        query: mutations.createProxy,
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

export const proxyRead = async ({ id }: api.GetProxyQueryVariables) =>
    await CRUD({
        query: queries.getProxy,
        variables: id
    })

export const proxyUpdate = async ({
    id,
    content,
    createdAt,
    editors,
    name,
    node_id,
    owner,
    type
}: api.UpdateProxyInput) =>
    await CRUD({
        query: mutations.updateProxy,
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

export const proxyDelete = async ({ id }: api.DeleteProxyInput) =>
    await CRUD({
        query: mutations.deleteProxy,
        variables: id
    })
