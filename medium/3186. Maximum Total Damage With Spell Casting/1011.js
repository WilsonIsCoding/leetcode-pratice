/**
 * @param {number[]} power
 * @return {number}
 */
var maximumTotalDamage = function (power) {
  let map = new Map();
  let maxNum = 0;
  for (let i = 0; i < power.length; i++) {
    map.set(power[i], (map.get(power[i]) || 0) + power[i]);
    maxNum = Math.max(maxNum, power[i]);
  }
  let dp = new Array(maxNum + 1);
  dp[0] = 0;
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Math.max(
      (dp[i - 3] || 0) + (map.get(i) || 0),
      dp[i - 2] || 0,
      dp[i - 1] || 0
    );
  }
  return dp[dp.length - 1];
};
power = [1,1,3,4]
console.log(maximumTotalDamage(power));
