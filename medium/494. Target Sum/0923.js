/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const totalCount = nums.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
  let dp = Array.from({ length: nums.length + 1 }, () =>
    Array(2 * totalCount).fill(null)
  );
  const backtrack = (i, total) => {
    if (i === nums.length) {
      return total === target ? 1 : 0;
    }
    if (dp[i][total + totalCount]) {
      return dp[i][total + totalCount];
    }
    dp[i][total + totalCount] =
      backtrack(i + 1, total + nums[i]) + backtrack(i + 1, total - nums[i]);
    return dp[i][total + totalCount];
  };
  return backtrack(0, 0);
};
let nums = [1, 1, 1, 1, 1];
let target = 3;

console.log(findTargetSumWays(nums, target));
