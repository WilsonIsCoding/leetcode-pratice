/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let arrayAnswer = new Map();
    for (let str of strs) {
        let sortedStr = str.split('').sort().join('')
        if (!arrayAnswer.has(sortedStr)) {
            arrayAnswer.set(sortedStr,[])
        }
        arrayAnswer.get(sortedStr).push(str)
    }
    return Array.from(arrayAnswer.values());
};