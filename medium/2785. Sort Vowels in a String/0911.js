/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
  let stack = [];
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (
      s[i].toLowerCase() === "a" ||
      s[i].toLowerCase() === "e" ||
      s[i].toLowerCase() === "i" ||
      s[i].toLowerCase() == "o" ||
      s[i].toLowerCase() === "u"
    ) {
      stack.push(s[i]);
    }
  }
  stack = stack.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));

  for (let i = 0; i < s.length; i++) {
    if (
      s[i].toLowerCase() === "a" ||
      s[i].toLowerCase() === "e" ||
      s[i].toLowerCase() === "i" ||
      s[i].toLowerCase() == "o" ||
      s[i].toLowerCase() === "u"
    ) {
      let str = stack.pop();
      s[i] = str;
    }
  }
  return s.join("");
};
let s = "lEetcOde";
console.log(sortVowels(s));
// 複雜度：O(n+ NlogN +n)
// 空間：O(2N)
