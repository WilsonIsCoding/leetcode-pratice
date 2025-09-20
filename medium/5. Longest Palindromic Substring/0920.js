/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length == 0) return "";
  let start = 0;
  let maxLen = "";
  let dp = Array.from({ length: s.length }, () => Array(s.length).fill(false));
  for (let L = 1; L <= s.length; L++) {
    for (let i = 0; i + L - 1 < s.length; i++) {
      let j = i + L - 1;
      if (L === 1) {
        dp[i][j] = true;
      } else if (L === 2) {
        dp[i][j] = s[i] === s[j];
      } else {
        dp[i][j] = s[i] === s[j] && dp[i + 1][j - 1];
      }
      if (dp[i][j] && L > maxLen) {
        start = i;
        maxLen = L;
      }
    }
  }
  return s.substring(start, start + maxLen);
};
let s = "babad";
console.log(longestPalindrome(s));
