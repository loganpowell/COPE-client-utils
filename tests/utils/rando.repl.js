const URL_DATA = "data"
const DOM_HEAD = "head"
export const test = args => {
    if (!args || !Object.keys(args).length) return
    const data = args[URL_DATA] || null
    const head = data[DOM_HEAD] || null

    return head
}

test({ test: 1 }) //?
