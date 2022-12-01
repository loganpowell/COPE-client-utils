interface IQuery {
    [name: string]: Partial<{
        __aliasFor: string
        __args: Partial<{
            input: Partial<{
                id: string
                type: any
                status: any
                [key: string]: any
            }>
            type: any
            status: any
            sortDirection: any
            [key: string]: any
        }>
        [key: string]: any
    }>
}
declare type GQLQueryType = "mutation" | "query"
/**
 * takes an array of query objects with the following signature:
 * @example
 * const ex_muts: IQuery[] = [
 *     {
 *         createEdge: {
 *             __args: {
 *                 input: {
 *                     id: "2",
 *                     type: API.NodeType.A_COURSE,
 *                     weight: 1,
 *                 },
 *             },
 *             id: true,
 *         },
 *     },
 *     {
 *         updateEdgeNode: {
 *             __args: {
 *                 input: {
 *                     id: "1",
 *                     edgeID: "1e",
 *                     nodeID: "1n",
 *                     owner: "test@mail.com",
 *                 },
 *             },
 *             id: true,
 *             edgeID: true,
 *             nodeID: true,
 *             owner: true,
 *             createdAt: true,
 *             updatedAt: true,
 *         },
 *     },
 *     {
 *         updateEdgeNode: {
 *             __args: {
 *                 input: {
 *                     id: "2",
 *                     edgeID: "2e",
 *                     nodeID: "2n",
 *                     owner: "test@mail.com",
 *                 },
 *             },
 *             id: true,
 *             edgeID: true,
 *             nodeID: true,
 *             owner: true,
 *             createdAt: true,
 *             updatedAt: true,
 *         },
 *     },
 * ]
 *
 * gen_GQL_batch_json(ex_muts) //=>
 * mutation {
 *    createEdge_0: createEdge (input: {id: "2", type: "A_COURSE", weight: 1}) {
 *        id
 *    }
 *    updateEdgeNode_1: updateEdgeNode (input: {id: "1", edgeID: "1e", nodeID: "1n", owner: "test@mail.com"}) {
 *        id
 *        edgeID
 *        nodeID
 *        owner
 *        createdAt
 *        updatedAt
 *    }
 *    updateEdgeNode_2: updateEdgeNode (input: {id: "2", edgeID: "2e", nodeID: "2n", owner: "test@mail.com"}) {
 *        id
 *        edgeID
 *        nodeID
 *        owner
 *        createdAt
 *        updatedAt
 *    }
 *}
 */
export declare const gen_GQL_batch_json: (q_array: IQuery[], type?: GQLQueryType) => string
export {}
