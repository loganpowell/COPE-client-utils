import { EnumType } from "json-to-graphql-query";
import { isPlainObject, isArray } from "@thi.ng/checks";
export const enumerator = (target = {}, find_keys = ["type", "sortDirection", "status"], replacer = (k, v) => (find_keys.includes(k) ? new EnumType(v) : v)) => {
    const replaced = obj => Object.entries(obj).reduce((a, c, i, d) => {
        const [k, v] = c;
        if (isArray(v)) {
            a[k] = v.map(_v => replaced(_v));
            return a;
        }
        if (isPlainObject(v)) {
            a[k] = replaced(v);
            return a;
        }
        if (!isPlainObject(v)) {
            a[k] = replacer(k, v);
            return a;
        }
        console.warn("no dice:", [k, v]);
    }, {});
    return replaced(target);
};
