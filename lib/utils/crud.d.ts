import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
/**
 * Local mocking with Auth is a bit more circuitous:
 * https://aws.amazon.com/blogs/mobile/amplify-framework-local-mocking/
 * (see "Seamless transition between local and cloud environments" - paragraph 2)
 *
 */
export declare const CRUD: ({ query, variables, authMode, }: {
    query: any;
    variables: any;
    authMode?: GRAPHQL_AUTH_MODE;
}) => Promise<any>;
