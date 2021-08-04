/**
 * takes a title (string) and converts it into an ID by
 * adding a (default 12-digit) random string after a `~`
 * (used for splitting on the consuming/read client-side)
 * 
 * @example
 * shortUUID('Some Name') //=> some-name~NDZcJksmjcuG
 */
export const shortUUID = (title: string, hash_length = 12) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    const range = chars.length
    const url_compat = encodeURIComponent(title.toLowerCase().split(" ").join("-"))
    const hashFn = (n = hash_length, acc = `${url_compat}~`) => {
        if (n === 0) return acc
        return hashFn(n - 1, acc + chars.charAt(~~(Math.random() * range)))
    }
    return hashFn()
}
