import * as api from "../graphql/API";
declare enum Level {
    private = "private",
    public = "public",
    protected = "protected"
}
declare type MimeType = string;
interface HTMLFileInput {
    type: MimeType;
    name: string;
}
declare type CreateFileAssetInput = {
    fileForUpload: HTMLFileInput;
    name: string;
    id?: string;
    node_id: string;
    createdAt?: string;
    type: api.AssetType;
    index?: number;
    owner?: string;
    editors?: string[];
};
export declare const storeObject: ({ fileForUpload, name, id, node_id, createdAt, type, index, owner, editors, }: CreateFileAssetInput, level?: Level, isPr?: boolean) => Promise<any>;
export {};
