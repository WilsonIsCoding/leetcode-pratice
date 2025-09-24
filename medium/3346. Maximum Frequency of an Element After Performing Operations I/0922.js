/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} numOperations
 * @return {number}
 */
var maxFrequency = function (nums, k, numOperations) {
  if (nums.length == 1) return 1;
  nums = nums.sort((a, b) => a - b);
  let left = 0;
  let right = 0;
  let maxLength = 0;
  while (right < nums.length) {
    right++;
    if (nums[right] - nums[left] > k || numOperations < 0) {
      if (nums[right] - nums[left] < k && nums[right] - nums[left] > 0) {
        numOperations++;
      }
      left++;
    } else if (nums[right] - nums[left] <= k && nums[right] - nums[left] > 0) {
      numOperations--;
    }
    maxLength = Math.max(maxLength, right - left);
  }
  return maxLength;
};
let nums = [88, 53];
let k = 27;
let numOperations = 2;

console.log(maxFrequency(nums, k, numOperations));
