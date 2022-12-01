import { API } from "../graphql";
/**
 * Takes a node ID and looks at it's assets and assetsPr. If
 * assets are found, toggles all of them to assetsPr or
 * vice-versa
 */
export declare const toggleAssets: ({ id }: API.GetNodeQueryVariables) => Promise<API.Asset[]>;
