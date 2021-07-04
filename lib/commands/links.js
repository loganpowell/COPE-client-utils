import { gen_link_input } from "../utils";
export const linkCreate = ({ edge, nodes }) => {
    const inputs = gen_link_input({
        edge,
        nodes
    });
};
