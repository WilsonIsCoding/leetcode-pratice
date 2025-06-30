/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    //num = "231450", k = 3 ->140,從頭開始，遇到比自己大的，先存起來，遇到比自己小的，從剛剛塞進stack的數字慢慢由後面砍
    let stack = []
    for (let i = 0; i < num.length; i++) {
        while (k > 0 && stack && num[i] < stack[stack.length - 1]) {
            k--
            stack.pop()
        }
        stack.push(num[i]);
    }
    //全部遞增
    while (k > 0) {
        stack.pop()
        k--
    }
    let result = stack.join('').replace(/^0+/, '')
    return result === "" ? "0" : result
};