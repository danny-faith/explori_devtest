// `mergeById()` Courtesy of StackOverflow, sadly not my own creation
const mergeById = (a1, a2) =>
a1.map(itm => ({
    ...a2.find((item) => (item.set1_txt === itm.set1_txt) && item),
    ...itm
}));

module.exports = mergeById;