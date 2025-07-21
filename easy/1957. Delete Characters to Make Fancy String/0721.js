/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
    if (s.length < 3) return s;
    let stack = [s[0], s[1]]
    for (let i = 2; i < s.length; i++) {
        if (stack[stack.length - 2] === stack[stack.length - 1] && stack[stack.length - 1] === s[i]) {
            continue
        } else {
            stack.push(s[i])
        }
    }
    return stack.join('')
};