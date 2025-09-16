/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  let count = 0;
  let texts = text.split(" ");
  brokenLetters = brokenLetters.split("");
  for (const text of texts) {
    for (let i = 0; i < brokenLetters.length; i++) {
      if (text.indexOf(brokenLetters[i]) !== -1) break;
      if (i == brokenLetters.length - 1) {
        count++;
      }
    }
  }
  return count;
};
let text = "hello world";
let brokenLetters = "ad";
console.log(canBeTypedWords(text, brokenLetters));
