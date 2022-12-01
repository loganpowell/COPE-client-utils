import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api"
import * as api from "../graphql/API"
declare type DeletedLink = {
    edge: {
        deleteEdge: api.Edge
    }
    edgeNodeFrom: {
        deleteEdgeNode: api.EdgeNode
    }
    edgeNodeTo: {
        deleteEdgeNode: api.EdgeNode
    }
}
export declare const edge: {
    create: (
        {
            id,
            type,
            weight,
            from_nodeID,
            to_nodeID,
        }: {
            id?: any
            type?: api.EdgeType
            weight?: number
            from_nodeID: any
            to_nodeID: any
        },
        authMode?: GRAPHQL_AUTH_MODE,
    ) => Promise<any>
    read: ({ id }: api.GetEdgeQueryVariables, authMode?: GRAPHQL_AUTH_MODE) => Promise<api.Edge>
    update: (
        { id, createdAt, owner, type, weight }: api.UpdateEdgeInput,
        authMode?: GRAPHQL_AUTH_MODE,
    ) => Promise<api.Edge>
    delete: (
        {
            id,
        }: {
            id: any
        },
        authMode?: GRAPHQL_AUTH_MODE,
    ) => Promise<DeletedLink>
    relink: (
        {
            edgeID,
            nodeID_old,
            nodeID_new,
        }: {
            edgeID: any
            nodeID_old: any
            nodeID_new: any
        },
        authMode?: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
    ) => Promise<any>
}
export {}
