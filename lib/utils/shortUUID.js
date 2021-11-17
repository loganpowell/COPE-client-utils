export const url_compat = title => encodeURIComponent(title.toLowerCase().split(" ").join("-"));
export const shortUUID = (title, hash_length = 12) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const range = chars.length;
    const friendly = url_compat(title);
    const hashFn = (n, acc = `${friendly}~`) => {
        if (n === 0)
            return acc;
        return hashFn(n - 1, acc + chars.charAt(~~(Math.random() * range)));
    };
    return hashFn(hash_length);
};
