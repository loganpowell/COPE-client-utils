import * as mutations from "../graphql/mutations"
import * as api from "../graphql/API"

import { CRUD } from "../utils"
//
//                                       d8
//   e88~~\ 888-~\  e88~~8e    /~~~8e  _d88__  e88~~8e
//  d888    888    d888  88b       88b  888   d888  88b
//  8888    888    8888__888  e88~-888  888   8888__888
//  Y888    888    Y888    , C888  888  888   Y888    ,
//   "88__/ 888     "88___/   "88_-888  "88_/  "88___/
//
//

export const nodeCreate = async (args: api.CreateNodeInput) => {
    const newNode = await CRUD({
        query: mutations.createNode,
        variables: {
            input: args
        }
    })

    return newNode
}
