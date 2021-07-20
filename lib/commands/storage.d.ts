declare enum Level {
    private = "private",
    public = "public",
    protected = "protected"
}
export declare const storagePut: ({ file_name_w_extension, object }: {
    file_name_w_extension: any;
    object: any;
}, level?: Level) => Promise<Object>;
export {};
