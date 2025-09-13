/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  let vowelsMap = new Map();
  let othersMap = new Map();
  let vowelsMax = 0;
  let othersMax = 0;
  for (const str of s) {
    if (
      str === "a" ||
      str === "e" ||
      str === "i" ||
      str === "o" ||
      str === "u"
    ) {
      vowelsMap.set(str, (vowelsMap.get(str) || 0) + 1);
      vowelsMax = Math.max(vowelsMax, vowelsMap.get(str));
    } else {
      othersMap.set(str, (othersMap.get(str) || 0) + 1);
      othersMax = Math.max(othersMax, othersMap.get(str));
    }
  }
  return vowelsMax + othersMax;
};
let s = "successes";
console.log(maxFreqSum(s));
