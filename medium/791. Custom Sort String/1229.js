/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    let count = new Map();
    for (let ch of s) {
        count.set(ch, (count.get(ch) || 0) + 1);
    }

    let res = "";
    // 先按照 order 排序
    for (let ch of order) {
        if (count.has(ch)) {
            res += ch.repeat(count.get(ch));
            count.delete(ch);
        }
    }

    // 再加上剩下的字母
    for (let [ch, c] of count) {
        res += ch.repeat(c);
    }

    return res;
};