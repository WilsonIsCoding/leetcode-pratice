/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function (s) {
  let stack = [];
  let position = [];
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
      position.push(i);
    }
  }
  stack = stack.sort((a, b) => b.charCodeAt(0) - a.charCodeAt(0));

  for (let i = 0; i < position.length; i++) {
    let str = stack.pop();
    s[position[i]] = str;
  }
  return s.join("");
};
let s = "lEetcOde";
console.log(sortVowels(s));
