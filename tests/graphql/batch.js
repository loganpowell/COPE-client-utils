import * as API from "../../lib/graphql/API"
import { jsonToGraphQLQuery, EnumType } from "json-to-graphql-query"
import { createNode } from "../../lib/graphql/json_mutations"

jsonToGraphQLQuery(
    {
        mutation: createNode({
            input: {
                status: API.NodeStatus.DRAFT,
                type: API.NodeType.A_COURSE,
            },
        }),
    },
    { pretty: true },
) //?
