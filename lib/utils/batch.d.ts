interface IQuery {
    [name: string]: Partial<{
        __aliasFor: string;
        __args: Partial<{
            input: Partial<{
                id: string;
                type: any;
                status: any;
                [key: string]: any;
            }>;
            type: any;
            status: any;
            sortDirection: any;
            [key: string]: any;
        }>;
        [key: string]: any;
    }>;
}
declare type GQLQueryType = "mutation" | "query";
export declare const gen_GQL_batch_json: (q_array: IQuery[], type?: GQLQueryType) => string;
export {};
