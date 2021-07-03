import * as mutations from "../graphql/mutations"
import * as queries from "../graphql/queries"
import * as api from "../graphql/API"

import { CRUD, gen_link_input } from "../utils"
import { LinkInput } from "../api"
import { edgeCreate, edgeDelete, edgeNodeCreate, edgeNodeDelete, edgeNodeUpdate, edgeRead, edgeUpdate } from "./edges"

export const linkCreate = ({ edge, nodes }: LinkInput) => {
    const inputs = gen_link_input({
        edge,
        nodes
    })
}
