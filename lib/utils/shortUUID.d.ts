export declare const url_compat: (title: any) => string;
/**
 * takes a title (string) and converts it into an ID by
 * adding a (default 12-digit) random string after a `~`
 * (used for splitting on the consuming/read client-side)
 *
 * @example
 * shortUUID('Some Name') //=> some-name~NDZcJksmjcuG
 */
export declare const shortUUID: (title: string, hash_length?: number) => any;
