//import { getIn, setIn } from "@thi.ng/paths"
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
/**
 * @example
 *
 * const coll = {
 *     one: 1,
 *     two: 2,
 *     three: [
 *         { a: 111, b: "🤞", c: "🕗" },
 *         { a: 333, b: "😻", c: "🍑" },
 *     ],
 *     four: {
 *         five: [
 *             {
 *                 id: 6,
 *                 bloop: "blop",
 *             },
 *             {
 *                 id: 7,
 *                 bloop: "poop",
 *             },
 *         ],
 *     },
 * }
 *
 *collapse(coll)
 * // => {
 *     "one": 1,
 *     "two": 2,
 *     "three/0/a": 111,
 *     "three/0/b": "🤞",
 *     "three/0/c": "🕗",
 *     "three/1/a": 333,
 *     "three/1/b": "😻",
 *     "three/1/c": "🍑",
 *     "four/five/0/id": 6,
 *     "four/five/0/bloop": "blop",
 *     "four/five/1/id": 7,
 *     "four/five/1/bloop": "poop"
 *  }
 */
export const collapse = (coll, sep = "/", crumbs = [], acc = {}) => {
    //log({ coll })
    coll = coll === null ? {} : coll;
    Object.entries(coll).forEach(([key, val]) => {
        isArray(val) || isPlainObject(val)
            ? collapse(val, sep, [...crumbs, key], acc)
            : (acc[[...crumbs, key].join(sep)] = val);
    });
    return acc;
};
/**
 * when all last key qualifiers are unique, this function
 * removes unnecessarily specific keys
 *
 * @example
 *
 * const coll = {
 *    "one": 1,
 *    "two": 2,
 *    "three/0/a": 111,
 *    "three/0/b": "🤞",
 *    "three/0/c": "🕗",
 *    "three/1/a": 333,
 *    "three/1/b": "😻",
 *    "three/1/c": "🍑",
 *    "four/five/0/id": 6,
 *    "four/five/0/bloop": "blop",
 *    "four/five/1/id": 7,
 *    "four/five/1/bloop": "poop"
 * }
 *
 * prune(coll)
 * // => { one: 1, two: 2, a: 333, b: '😻', c: '🍑', id: 7, bloop: 'poop' }
 */
export const prune = (coll, sep = "/", acc = {}) => {
    Object.entries(coll).forEach(([k, v]) => {
        const key = k.split(sep).slice(-1);
        acc[key] = v;
    });
    return acc;
};
/**
 * @example
 * let test = [{a:1, b:2, c:3}, {a:2, b:5, c:9}, {a:1, b:4, c:6}]
 *
 * collect_by_path(["a"], test) //?
 *
 * { 1: [{a:1, b:2, c:3}, {a:1, b:4, c:6}], 2: [{a:2, b:5, c:9}] }
 */
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
/**
 * @example
 * let test = [{a:1, b:2, c:3}, {a:2, b:5, c:9}, {a:1, b:4, c:6}]
 *
 * aggregate_by_key(test) //?
 *
 * { a: [ 1, 2, 1 ], b: [ 2, 5, 4 ], c: [ 3, 9, 6 ] }
 */
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
/**
 * @example
 * let ex = { a: [ 1, 2, 1 ], b: [ 2, 5, 4 ], c: [ 3, 9, 6 ] }
 * apply_kv_ops({a: [(a, c, i, d) => a + c, 0], b: [(a, c, i, d) => (a.push(c), a), []]})(ex) //?
 * { a: 4, b: [2, 5, 4] }
 */
export const apply_kv_ops = (key_reduction_map = {}) => (aggregate = {}) => {
    return Object.entries(aggregate).reduce((a, c) => {
        let [_key, arr] = c;
        if (key_reduction_map[_key]) {
            a[_key] = arr.reduce(...key_reduction_map[_key]);
        }
        return a;
    }, {});
};
