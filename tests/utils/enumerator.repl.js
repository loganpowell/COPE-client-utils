import { enumerator } from "../../lib/utils"
import * as jqs from "../../lib/graphql/json_queries"
import * as api from "../../lib/graphql/API"
import { jsonToGraphQLQuery } from "json-to-graphql-query"

const find_keys = ["type", "sortDirection", "status"]
//const replacer = val => (find_keys.includes(val) ? new EnumType(val) : val)
const replacer = (key, val) => (typeof val === "string" ? val.toLowerCase() : val)

const target = {
    sortDirection: "TEST",
    limit: 100,
    typeCreatedAt: {
        beginsWith: {
            type: "TYPE",
            createdAt: 123,
        },
        deeper: {
            than: {
                status: "BLEEP",
                number: 1,
            },
        },
        between: [
            {
                type: "FIRST",
                createdAt: 456,
            },
            {
                type: "SECOND",
                createdAt: 7890,
            },
        ],
    },
}

const res = enumerator(target, find_keys, replacer) //?

const args = {
    status: api.NodeStatus.DRAFT,
    typeCreatedAt: {
        //beginsWith: {
        //    type: new EnumType(api.NodeType.A_ARTICLE),
        //    createdAt: "2021-11",
        //},
        between: [
            {
                type: api.NodeType.A_PAGE,
                createdAt: "2021-07-03T20",
            },
            {
                type: api.NodeType.A_PAGE,
                createdAt: "2021-11-04T18",
            },
        ],
    },
}
const gql = jsonToGraphQLQuery(
    {
        query: jqs.nodesByStatusType(args),
    },
    { pretty: true },
) //?

const gql2 = jsonToGraphQLQuery(
    {
        query: {
            nodesByStatusType: { __args: enumerator(args) },
        },
    },
    { pretty: true },
) //?
