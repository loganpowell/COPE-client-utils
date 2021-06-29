import { __rest } from "tslib";
import { isPlainObject, isArray } from "@thi.ng/checks";
import { map, transduce, comp, push, scan } from "@thi.ng/transducers";
import { getIn } from "@thi.ng/paths";
export const log = console.log;
export const json = arg => JSON.stringify(arg, null, 2);
export const JL = arg => log(json(arg));
export const isEmpty = coll => {
    return isPlainObject(coll) && !Object.keys(coll).length
        ? true
        : isArray(coll) && !coll.length
            ? true
            : false;
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
export const augment = props => {
    const { opens_count, nonunique_opens_count, total_click_count, emails_delivered, unsubscribes, subject = "", addresses_count } = props, rest = __rest(props, ["opens_count", "nonunique_opens_count", "total_click_count", "emails_delivered", "unsubscribes", "subject", "addresses_count"]);
    const engagement_rate = ~~(((opens_count + total_click_count) / emails_delivered) *
        100);
    const subject_words = subject.split(" ").length;
    const unsubscribe_rate = (unsubscribes / emails_delivered) * 100;
    const impressions = total_click_count + nonunique_opens_count;
    return Object.assign(Object.assign(Object.assign(Object.assign({ emails_sent: addresses_count }, props), { unsubscribes,
        unsubscribe_rate,
        engagement_rate,
        impressions, avg_impressions: impressions, opens_count: nonunique_opens_count, unique_opens_count: opens_count, addresses_count }), (subject_words && { subject_words })), rest);
};
export const diff = [
    () => ({}),
    acc => acc,
    (acc, cur) => {
        const { created_at: c_a } = acc;
        const { created_at } = cur, rest = __rest(cur, ["created_at"]);
        const time_acc = new Date(c_a).getTime();
        const time_cur = new Date(created_at).getTime();
        const days_gap = Math.abs((time_cur - time_acc) / (1000 * 3600 * 24));
        return Object.assign({ days_gap: isNaN(days_gap) ? null : days_gap > 30 ? 30 : ~~days_gap, created_at }, rest);
    },
];
const divy = coll => {
    const { bulletins_sent: x, direct, overlay, signup, upload, other, all_network, deleted_subscriptions, new_subscriptions } = coll, rest = __rest(coll, ["bulletins_sent", "direct", "overlay", "signup", "upload", "other", "all_network", "deleted_subscriptions", "new_subscriptions"]);
    return Object.assign({ bulletins_sent: x, new_topic_subscriptions: new_subscriptions, subscriptions: ~~(new_subscriptions / x), deleted: -~~(deleted_subscriptions / x), network: ~~(all_network / x), direct: ~~(direct / x), upload: ~~(upload / x), overlay: ~~(overlay / x), signup: ~~(signup / x), other: ~~(other / x) }, rest);
};
const xform = comp(map(x => collapse(x)), map(x => prune(x)));
const augMap = comp(xform, map(augment), scan(diff));
const divyUp = comp(xform, map(divy));
export const squish = coll => transduce(divyUp, push(), coll);
export const squash = coll => transduce(augMap, push(), coll);
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
export const coll_by_path_aggregate = (path = [], entries = []) => {
    let coll = collect_by_path(path, entries);
    return Object.entries(coll).reduce((a, c, i, d) => {
        let [sender, reports] = c;
        a[sender] = { aggregate: aggregate_by_key(reports), reports };
        return a;
    }, {});
};
export const apply_kv_ops = (key_reduction_map = {}) => (aggregate = {}) => {
    return Object.entries(aggregate).reduce((a, c, i, d) => {
        let [_key, arr] = c;
        if (key_reduction_map[_key]) {
            a[_key] = arr.reduce(...key_reduction_map[_key]);
        }
        return a;
    }, {});
};
export const coll_aggregator_sender = data => {
    const filtered = data.filter(x => x.emails_sent > 100);
    const collection = coll_by_path_aggregate(["sender_email"], filtered);
    const avg = [(a, c, i, { length }) => ~~((a + c / length) * 100) / 100, 0];
    const sum = [(a, c, i, d) => a + c, 0];
    let out = {};
    Object.entries(collection).forEach(([sender, metrics]) => {
        out[sender] = {
            summary: apply_kv_ops({
                emails_sent: sum,
                success_count: sum,
                percent_emails_delivered: avg,
                percent_opened: avg,
                click_rate: avg,
                engagement_rate: avg,
                unsubscribe_rate: avg,
                impressions: sum,
                addresses_count: avg,
                emails_delivered: avg,
                opens_count: avg,
                unique_opens_count: avg,
                nonunique_clicks_count: avg,
                unique_click_count: avg,
                avg_impressions: avg,
            })(metrics["aggregate"]),
            reports: metrics["reports"],
        };
    });
    return out;
};
export const averaged = agr_coll => Object.entries(agr_coll).reduce((a, c, i, { length }) => {
    const [_, stats] = c;
    const { summary } = stats;
    Object.entries(summary).forEach(([k, v]) => {
        a[k] = a[k]
            ? ~~((a[k] + v / length) * 100) / 100
            : ~~((v / length) * 100) / 100;
    });
    return a;
}, {});
export const metric_name = k => k === "success_count"
    ? "Succeeded (#)"
    : k === "percent_emails_delivered"
        ? "Delivered (%)"
        : k === "percent_opened"
            ? "Opened (%)"
            : k === "click_rate"
                ? "Clicked (%)"
                : k === "unsubscribe_rate"
                    ? "Deleted (%)"
                    : k === "engagement_rate"
                        ? "Engaged (%)"
                        : k === "impressions"
                            ? "Impressions (#)"
                            : k === "addresses_count"
                                ? "Sent (#)"
                                : k === "emails_delivered"
                                    ? "Delivered (#)"
                                    : k === "opens_count"
                                        ? "Opens (#)"
                                        : k === "unique_opens_count"
                                            ? "Unique Opens (#)"
                                            : k === "nonunique_clicks_count"
                                                ? "Clicks (#)"
                                                : k === "unique_click_count"
                                                    ? "Unique Clicks (#)"
                                                    : k === "avg_impressions"
                                                        ? "Impressions (#)"
                                                        : k === "emails_sent"
                                                            ? "Sent (#)"
                                                            : "(#)";
