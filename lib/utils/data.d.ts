export const log: {
    (...data: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
};
export function json(arg: any): string;
export function JL(arg: any): void;
export function isEmpty(coll: any): boolean;
export function collapse(coll: any, sep?: string, crumbs?: any[], acc?: {}): {};
export function prune(coll: any, sep?: string, acc?: {}): {};
export function collect_by_path(path: any, entries?: any[]): {};
export function aggregate_by_key(reports?: any[]): {};
export function apply_kv_ops(key_reduction_map?: {}): (aggregate?: {}) => {};
