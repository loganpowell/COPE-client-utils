import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api"
import * as api from "../graphql/API"
import { CreateFileAssetInput } from "./storage"
export declare const assetPr: {
    create: (
        {
            name,
            nodeID,
            type,
            content,
            createdAt,
            editors,
            id,
            owner,
            index,
        }: api.CreateAssetPrInput | CreateFileAssetInput,
        authMode?: GRAPHQL_AUTH_MODE,
    ) => Promise<api.Asset | api.AssetPr>
    read: (
        { id }: api.GetAssetPrQueryVariables,
        authMode?: GRAPHQL_AUTH_MODE,
    ) => Promise<api.AssetPr>
    update: (
        {
            id,
            content,
            createdAt,
            editors,
            name,
            nodeID,
            owner,
            type,
            index,
        }: api.UpdateAssetPrInput,
        authMode?: GRAPHQL_AUTH_MODE,
    ) => Promise<api.Asset | api.AssetPr>
    delete: ({ id }: api.DeleteAssetPrInput, authMode?: GRAPHQL_AUTH_MODE) => Promise<api.AssetPr>
    convert: (
        { id }: api.GetAssetQueryVariables,
        authMode?: GRAPHQL_AUTH_MODE,
    ) => Promise<api.Asset>
}
