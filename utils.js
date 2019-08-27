/**
 * `mergeById()` Courtesy of StackOverflow, sadly not my own creation
 * This function simply takes two arrays and merges them when they pass the testing function
 * which in this case is item.set1_txt === itm.set1_txt
 */
/** */ 
const mergeById = (a1, a2) =>
a1.map(itm => ({
    ...a2.find((item) => (item.set1_txt === itm.set1_txt) && item),
    ...itm
}));

module.exports = mergeById;