/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  // time capacity:O(M * N * 26 * 26)
  const keywordArrays = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  let result = [];
  for (const word of words) {
    for (let j = 0; j < keywordArrays.length; j++) {
      for (let i = 0; i < word.length; i++) {
        if (!keywordArrays[j].includes(word[i].toLowerCase())) {
          break;
        } else if (i === word.length - 1) {
          result.push(word);
        }
      }
    }
  }
  return result;
};
let words = ["Hello", "Alaska", "Dad", "Peace"];
console.log(findWords(words));
