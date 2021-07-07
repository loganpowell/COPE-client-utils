import { collapse } from "./data"

const json1 = {
    data : {
        listNodes : {
            items : [
                {
                    type    : "A_PAGE",
                    id      : "longrandomstringthatsmyID1",
                    assets  : {
                        items : []
                    },
                    proxies : {
                        items : [
                            {
                                id      : "id2",
                                name    : "alt text for image 2",
                                content :
                                    "https://public.govdelivery.com/system/images/72747/original/Census%20Registered%20Banner%20%28High-res%29.png?1553871440"
                            }
                        ]
                    },
                    edges   : {
                        items : [
                            {
                                edge_id : "942542de-9686-428e-ab33-de9d3bedb9af",
                                edge    : {
                                    type  : "HAS_CHILD",
                                    nodes : {
                                        items : [
                                            {
                                                node_id   : "longrandomstringthatsmyID1",
                                                createdAt : "2021-07-05T21:15:00.117Z",
                                                updatedAt : "2021-07-05T21:15:00.117Z"
                                            },
                                            {
                                                node_id   : "f844eb36-0b70-45e5-9c64-2f0d6b7743e4",
                                                createdAt : "2021-07-05T21:15:00.129Z",
                                                updatedAt : "2021-07-05T21:15:00.129Z"
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                edge_id : "a4b5fd21-9053-48d1-bce1-01bd651d1d51",
                                edge    : {
                                    type  : "HAS_CHILD",
                                    nodes : {
                                        items : [
                                            {
                                                node_id   : "longrandomstringthatsmyID1",
                                                createdAt : "2021-07-05T20:46:33.884Z",
                                                updatedAt : "2021-07-05T20:46:33.884Z"
                                            },
                                            {
                                                node_id   : "1f205652-cc06-4763-bd2e-964c0853a13e",
                                                createdAt : "2021-07-05T20:46:33.891Z",
                                                updatedAt : "2021-07-05T20:46:33.891Z"
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                edge_id : "d231b8e2-4ee5-4245-a29a-dbd43f3074f0",
                                edge    : {
                                    type  : "HAS_CHILD",
                                    nodes : {
                                        items : [
                                            {
                                                node_id   : "longrandomstringthatsmyID1",
                                                createdAt : "2021-07-05T20:52:21.891Z",
                                                updatedAt : "2021-07-05T20:52:21.891Z"
                                            },
                                            {
                                                node_id   : "child2isactualID",
                                                createdAt : "2021-07-05T20:52:21.898Z",
                                                updatedAt : "2021-07-05T20:52:21.898Z"
                                            }
                                        ]
                                    }
                                }
                            },
                            {
                                edge_id : "fa6937dc-3b9a-41f4-b3a0-2a5d3819ef4f",
                                edge    : {
                                    type  : "HAS_CHILD",
                                    nodes : {
                                        items : [
                                            {
                                                node_id   : "longrandomstringthatsmyID1",
                                                createdAt : "2021-07-05T21:12:18.284Z",
                                                updatedAt : "2021-07-05T21:12:18.284Z"
                                            },
                                            {
                                                node_id   : "child2isactualID2",
                                                createdAt : "2021-07-05T21:12:18.292Z",
                                                updatedAt : "2021-07-05T21:12:18.292Z"
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    }
                },
                {
                    type    : "A_GEM",
                    id      : "f844eb36-0b70-45e5-9c64-2f0d6b7743e4",
                    assets  : {
                        items : []
                    },
                    proxies : {
                        items : []
                    },
                    edges   : {
                        items : [
                            {
                                edge_id : "942542de-9686-428e-ab33-de9d3bedb9af",
                                edge    : {
                                    type  : "HAS_CHILD",
                                    nodes : {
                                        items : [
                                            {
                                                node_id   : "longrandomstringthatsmyID1",
                                                createdAt : "2021-07-05T21:15:00.117Z",
                                                updatedAt : "2021-07-05T21:15:00.117Z"
                                            },
                                            {
                                                node_id   : "f844eb36-0b70-45e5-9c64-2f0d6b7743e4",
                                                createdAt : "2021-07-05T21:15:00.129Z",
                                                updatedAt : "2021-07-05T21:15:00.129Z"
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    }
                },
                {
                    type    : "A_GEM",
                    id      : "1f205652-cc06-4763-bd2e-964c0853a13e",
                    assets  : {
                        items : []
                    },
                    proxies : {
                        items : []
                    },
                    edges   : {
                        items : [
                            {
                                edge_id : "a4b5fd21-9053-48d1-bce1-01bd651d1d51",
                                edge    : {
                                    type  : "HAS_CHILD",
                                    nodes : {
                                        items : [
                                            {
                                                node_id   : "longrandomstringthatsmyID1",
                                                createdAt : "2021-07-05T20:46:33.884Z",
                                                updatedAt : "2021-07-05T20:46:33.884Z"
                                            },
                                            {
                                                node_id   : "1f205652-cc06-4763-bd2e-964c0853a13e",
                                                createdAt : "2021-07-05T20:46:33.891Z",
                                                updatedAt : "2021-07-05T20:46:33.891Z"
                                            }
                                        ]
                                    }
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }
}

collapse(json1) //?
