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
    size: number;
    lastModified: number;
    lastModifiedDate: Date;
}
export declare const isFile: ({ type, content }: {
    type: any;
    content: any;
}) => any;
export declare type CreateFileAssetInput = {
    content: HTMLFileInput | any;
    name: string;
    id?: string;
    node_id: string;
    createdAt?: string;
    type: api.AssetType;
    index?: number;
    owner?: string;
    editors?: string[];
};
export declare const storeObject: ({ content, name, id, node_id, createdAt, type, index, owner, editors }: CreateFileAssetInput, isAssetPr?: boolean, level?: Level) => Promise<api.Asset | api.AssetPr>;
export declare const removeObject: (url: any, { level }?: {
    level: string;
}) => Promise<any>;
export {};
