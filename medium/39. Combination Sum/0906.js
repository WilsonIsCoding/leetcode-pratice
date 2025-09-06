/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let result = [];
  const backtrack = (currentArray, startIndex, remain) => {
    if (remain == 0) {
      result.push([...currentArray]);
      return;
    } else if (remain < 0) {
      return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
      currentArray.push(candidates[i]);
      let accRemain = remain - candidates[i];
      backtrack(currentArray, i, accRemain);
      currentArray.pop();
    }
  };
  backtrack([], 0, target);
  return result;
};
let candidates = [2, 3, 5];
let target = 8;
