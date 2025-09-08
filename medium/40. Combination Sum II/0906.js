/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates = candidates.sort();
  let result = [];
  const backtrack = (currentArray, startIndex, remain) => {
    if (remain == 0) {
      result.push([...currentArray]);
    } else if (remain < 0) {
      return;
    }
    for (let i = startIndex; i < candidates.length; i++) {
      if (i > startIndex && candidates[i] === candidates[i - 1]) continue;
      currentArray.push(candidates[i]);
      let accRemain = remain - candidates[i];
      backtrack(currentArray, i + 1, accRemain);
      currentArray.pop();
    }
  };
  backtrack([], 0, target);
  return result;
};
let candidates = [10, 1, 2, 7, 6, 1, 5]; //1,1,2,5,6,7,10
let target = 8;
console.log(combinationSum2(candidates, target));
