/**
 * @param {number[]} energy
 * @param {number} k
 * @return {number}
 */
var maximumEnergy = function (energy, k) {
  let dp = new Array(energy.length - 1);
  for (let i = 0; i < energy.length; i++) {
    if (i >= k) {
      dp[i] = Math.max(dp[i - k] + energy[i], energy[i]);
    } else {
      dp[i] = energy[i];
    }
  }
  let max = -Infinity;
  for (let j = energy.length - 1; j >= energy.length - k; j--) {
    max = Math.max(dp[j], max);
  }
  return max;
};
let energy = [10, 0, -6, 1];
let k = 1;
console.log(maximumEnergy(energy, k));
