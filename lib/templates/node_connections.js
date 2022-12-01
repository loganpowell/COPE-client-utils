import * as jms from "../graphql/json_mutations"
import * as API from "../graphql/API"
import { v4 as uuid } from "uuid"
/**
 * generates the json needed to be handed to jsonToGraphqlQuery
 * if input includes `from_node_type`/`to_node_type` the payload
 * will include the needed inputs to create them. Else, it will
 * only create a link between the existing node(s)
 */
export const j_link = ({
    from_nodeID,
    to_nodeID,
    id = uuid(),
    type = API.EdgeType.HAS_CHILD,
    weight = 0,
    from_node_type = null,
    to_node_type = null,
}) => {
    return [
        ...(from_node_type && [
            jms.createNode({
                input: {
                    status: API.NodeStatus.DRAFT,
                    type: from_node_type,
                    id: from_nodeID,
                },
            }),
        ]),
        ...(to_node_type && [
            jms.createNode({
                input: {
                    status: API.NodeStatus.DRAFT,
                    type: to_node_type,
                    id: to_nodeID,
                },
            }),
        ]),
        jms.createEdge({
            input: {
                id,
                type,
                weight,
            },
        }),
        jms.createEdgeNode({
            input: {
                edgeID: id,
                nodeID: from_nodeID,
            },
        }),
        jms.createEdgeNode({
            input: {
                edgeID: id,
                nodeID: to_nodeID,
            },
        }),
    ]
}
//export const g_link = ()
