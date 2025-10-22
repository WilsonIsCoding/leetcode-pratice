/**
 * @param {string} s
 * @return {boolean}
 */
var hasSameDigits = function (s) {
  while (s.length > 2) {
    let result = "";
    for (let i = 0; i < s.length - 1; i++) {
      result += String((Number(s[i]) + Number(s[i + 1])) % 10);
    }
    console.log(result);
    s = result;
  }
  console.log(s);
  return s[0] === s[1];
};
let s = "3902";
console.log(hasSameDigits(s));
