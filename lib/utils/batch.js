import { __rest } from "tslib";
import { jsonToGraphQLQuery } from "json-to-graphql-query";
export const gen_GQL_batch_json = (q_array, type = "query") => {
    const json = q_array.reduce((a, c, i) => {
        const { q_name } = c, rest = __rest(c, ["q_name"]);
        a[`${q_name}_${i}`] = Object.assign({ __aliasFor: q_name }, rest);
        return a;
    }, {});
    return jsonToGraphQLQuery({ [type]: json });
};
