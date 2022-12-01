import * as jms from "../../lib/graphql/json_mutations"
import { API } from "../../lib/graphql"
import { jsonToGraphQLQuery } from "json-to-graphql-query"

const prp = (op = "create") => ({
    [op + "Asset"]: {
        __args: {
            input: {
                name: "SOME PIG",
                type: {
                    value: "A_AUDIO",
                },
            },
        },
        id: true,
        nodeID: true,
        createdAt: true,
        updatedAt: true,
        type: true,
        name: true,
        index: true,
        owner: true,
        content: true,
        editors: true,
    },
})

const pgq = (op = "create") => `
    ${op}Asset (input: {name: "SOME PIG", type: A_AUDIO}) {
        id
        nodeID
        createdAt
        updatedAt
        type
        name
        index
        owner
        content
        editors
    }
`

describe("json_mutations tests running...", () => {
    const asset_input = {
        input: {
            name: "SOME PIG",
            type: API.AssetType.A_AUDIO,
        },
    }
    const ass = jms.createAsset(asset_input)
    test("createAsset json:", () => {
        expect(ass).toMatchObject(prp())
    })
    test("createAsset gql:", () => {
        const gql = jsonToGraphQLQuery(ass, { pretty: true })
        expect(gql.replace(/\s+/g, "")).toEqual(pgq().replace(/\s+/g, ""))
    })
    test("updateAsset json:", () => {
        const res = jms.updateAsset(asset_input)
        expect(res).toMatchObject(prp("update"))
    })
    test("updateAsset gql:", () => {
        const ass = jms.updateAsset(asset_input, { pretty: true })
        const gql = jsonToGraphQLQuery(ass)
        expect(gql.replace(/\s+/g, "")).toEqual(pgq("update").replace(/\s+/g, ""))
    })
    //test("createNode json:", () => {
    //    const
    //})
    //test("updateAsset json:", () => {

    //})
})
