export const shortUUID = (title, hash_length = 12) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const range = chars.length;
    const url_compat = encodeURIComponent(title.toLowerCase().split(" ").join("-"));
    const hashFn = (n = hash_length, acc = `${url_compat}~`) => {
        if (n === 0)
            return acc;
        return hashFn(n - 1, acc + chars.charAt(~~(Math.random() * range)));
    };
    return hashFn();
};
