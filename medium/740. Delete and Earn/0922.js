/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  let map = new Map();
  let maxNumber = 0;
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + nums[i]);
    maxNumber = Math.max(maxNumber, nums[i]);
  }
  let dp = new Array(maxNumber + 1).fill(0);
  dp[0] = 0;
  dp[1] = map.get(1) || 0;
  for (let i = 2; i < dp.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + (map.get(i) || 0));
  }
  return dp;
  //   return map;
};

let nums = [3, 4, 2];
console.log(deleteAndEarn(nums));
