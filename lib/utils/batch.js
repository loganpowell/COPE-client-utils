export const gen_GQL_batch_string = some_array => some_array.reduce((a, c, i) => a.concat(`
    ${i}: ${c}
    `), "");
