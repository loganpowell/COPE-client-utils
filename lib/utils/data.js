import { isPlainObject, isArray } from "@thi.ng/checks";
import { getIn } from "@thi.ng/paths";
export const log = console.log;
export const json = arg => JSON.stringify(arg, null, 2);
export const JL = arg => log(json(arg));
export const isEmpty = coll => {
    return isPlainObject(coll) && !Object.keys(coll).length
        ? true
        : isArray(coll) && !coll.length ? true : false;
};
export const collapse = (coll, sep = "/", crumbs = [], acc = {}) => {
    coll = coll === null ? {} : coll;
    Object.entries(coll).forEach(([key, val]) => {
        isArray(val) || isPlainObject(val)
            ? collapse(val, sep, [...crumbs, key], acc)
            : (acc[[...crumbs, key].join(sep)] = val);
    });
    return acc;
};
export const prune = (coll, sep = "/", acc = {}) => {
    Object.entries(coll).forEach(([k, v]) => {
        const key = k.split(sep).slice(-1);
        acc[key] = v;
    });
    return acc;
};
export const collect_by_path = (path, entries = []) => {
    let collection = {};
    entries.forEach(entry => {
        const prop = getIn(entry, path);
        if (collection[prop]) {
            return collection[prop].push(entry);
        }
        return (collection[prop] = [entry]);
    });
    return collection;
};
export const aggregate_by_key = (reports = []) => {
    let aggregates = {};
    reports.forEach(report => {
        Object.entries(report).forEach(([k, v]) => {
            if (aggregates[k]) {
                return aggregates[k].push(v);
            }
            return (aggregates[k] = [v]);
        });
    });
    return aggregates;
};
export const apply_kv_ops = (key_reduction_map = {}) => (aggregate = {}) => {
    return Object.entries(aggregate).reduce((a, c) => {
        let [_key, arr] = c;
        if (key_reduction_map[_key]) {
            a[_key] = arr.reduce(...key_reduction_map[_key]);
        }
        return a;
    }, {});
};
