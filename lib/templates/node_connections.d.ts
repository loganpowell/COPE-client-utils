import * as API from "../graphql/API"
/**
 * generates the json needed to be handed to jsonToGraphqlQuery
 * if input includes `from_node_type`/`to_node_type` the payload
 * will include the needed inputs to create them. Else, it will
 * only create a link between the existing node(s)
 */
export declare const j_link: ({
    from_nodeID,
    to_nodeID,
    id,
    type,
    weight,
    from_node_type,
    to_node_type,
}: {
    from_nodeID: any
    to_nodeID: any
    id?: any
    type?: API.EdgeType
    weight?: number
    from_node_type?: any
    to_node_type?: any
}) => (
    | {
          createNode: {
              id: boolean
              status: boolean
              type: boolean
              createdAt: boolean
              updatedAt: boolean
              owner: boolean
              assets: {
                  items: {
                      id: boolean
                      nodeID: boolean
                      createdAt: boolean
                      updatedAt: boolean
                      type: boolean
                      name: boolean
                      index: boolean
                      owner: boolean
                      content: boolean
                      editors: boolean
                  }
                  nextToken: boolean
              }
              assetsPr: {
                  items: {
                      id: boolean
                      nodeID: boolean
                      createdAt: boolean
                      updatedAt: boolean
                      type: boolean
                      name: boolean
                      index: boolean
                      owner: boolean
                      content: boolean
                      editors: boolean
                  }
                  nextToken: boolean
              }
              __args: {
                  condition: {}
                  input: {}
              }
          }
      }
    | {
          createEdge: {
              id: boolean
              type: boolean
              owner: boolean
              weight: boolean
              createdAt: boolean
              updatedAt: boolean
              nodes: {
                  items: {
                      node: {
                          id: boolean
                          status: boolean
                          type: boolean
                          createdAt: boolean
                          updatedAt: boolean
                          owner: boolean
                          assets: {
                              items: {
                                  id: boolean
                                  nodeID: boolean
                                  createdAt: boolean
                                  updatedAt: boolean
                                  type: boolean
                                  name: boolean
                                  index: boolean
                                  owner: boolean
                                  content: boolean
                                  editors: boolean
                              }
                              nextToken: boolean
                          }
                          assetsPr: {
                              items: {
                                  id: boolean
                                  nodeID: boolean
                                  createdAt: boolean
                                  updatedAt: boolean
                                  type: boolean
                                  name: boolean
                                  index: boolean
                                  owner: boolean
                                  content: boolean
                                  editors: boolean
                              }
                              nextToken: boolean
                          }
                      }
                  }
                  nextToken: boolean
              }
              __args: {
                  condition: {}
                  input: {}
              }
          }
      }
    | {
          createEdgeNode: {
              id: boolean
              edgeID: boolean
              nodeID: boolean
              owner: boolean
              createdAt: boolean
              updatedAt: boolean
              node: {
                  id: boolean
                  status: boolean
                  type: boolean
                  createdAt: boolean
                  updatedAt: boolean
                  owner: boolean
                  assets: {
                      items: {
                          id: boolean
                          nodeID: boolean
                          createdAt: boolean
                          updatedAt: boolean
                          type: boolean
                          name: boolean
                          index: boolean
                          owner: boolean
                          content: boolean
                          editors: boolean
                      }
                      nextToken: boolean
                  }
                  assetsPr: {
                      items: {
                          id: boolean
                          nodeID: boolean
                          createdAt: boolean
                          updatedAt: boolean
                          type: boolean
                          name: boolean
                          index: boolean
                          owner: boolean
                          content: boolean
                          editors: boolean
                      }
                      nextToken: boolean
                  }
              }
              edge: {
                  id: boolean
                  type: boolean
                  owner: boolean
                  weight: boolean
                  createdAt: boolean
                  updatedAt: boolean
                  nodes: {
                      items: {
                          node: {
                              id: boolean
                              status: boolean
                              type: boolean
                              createdAt: boolean
                              updatedAt: boolean
                              owner: boolean
                              assets: {
                                  items: {
                                      id: boolean
                                      nodeID: boolean
                                      createdAt: boolean
                                      updatedAt: boolean
                                      type: boolean
                                      name: boolean
                                      index: boolean
                                      owner: boolean
                                      content: boolean
                                      editors: boolean
                                  }
                                  nextToken: boolean
                              }
                              assetsPr: {
                                  items: {
                                      id: boolean
                                      nodeID: boolean
                                      createdAt: boolean
                                      updatedAt: boolean
                                      type: boolean
                                      name: boolean
                                      index: boolean
                                      owner: boolean
                                      content: boolean
                                      editors: boolean
                                  }
                                  nextToken: boolean
                              }
                          }
                      }
                      nextToken: boolean
                  }
              }
              __args: {
                  condition: {}
                  input: API.CreateEdgeNodeInput
              }
          }
      }
)[]
