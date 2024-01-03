function lengthOfLongestSubstring(s: string): number {
  let maxStr: number = 0;
  let currentArr: string[] = [];
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (currentArr.indexOf(char) === -1) {
      currentArr.push(char);
    } else {
      const index = currentArr.indexOf(char);
      currentArr = currentArr.slice(index + 1);
      currentArr.push(char);
    }
    maxStr = Math.max(maxStr, currentArr.length);
  }
  return maxStr;
}
