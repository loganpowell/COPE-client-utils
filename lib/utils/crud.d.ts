import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
export declare const CRUD: ({ query, variables, authMode, }: {
    query: any;
    variables: any;
    authMode?: GRAPHQL_AUTH_MODE;
}) => Promise<any>;
