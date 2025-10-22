/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function (nums, k, numOperations) {
  nums = nums.sort((a, b) => a - b);
  const ranges = nums.map((x) => [x - k, x + k]);
  let maxLength = 0;
  let left = 0;
  for (let right = 0; right < ranges.length; right++) {
    while (ranges[right][0] > ranges[left][1]) {
      left++;
    }
    maxLength = Math.max(
      maxLength,
      Math.min(right - left + 1, numOperations + 1)
    );
  }
  return maxLength;
};
let nums = [1, 90];
let k = 76;
let numOperations = 1;
console.log(maxFrequency(nums, k, numOperations));
