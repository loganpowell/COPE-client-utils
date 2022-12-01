/**
 * Recursive object entry walker that takes a target object
 * some keys to look for within its arbitrary depth
 * and a replacer function that is used on values of matched
 * keys
 * returns an Object
 */
export declare const enumerator: (target?: {}, find_keys?: string[], replacer?: (k: any, v: any) => any) => {};
