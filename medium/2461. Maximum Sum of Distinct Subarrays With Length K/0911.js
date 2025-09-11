/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  let set = new Set();
  let left = 0;
  let right = 0;
  let currentTotal = 0;
  let maxNumber = 0;
  while (right < nums.length) {
    while (set.has(nums[right]) || right - left >= k) {
      set.delete(nums[left]);
      currentTotal -= nums[left];
      left++;
    }
    set.add(nums[right]);
    currentTotal += nums[right];
    if (right - left === k - 1) {
      maxNumber = Math.max(maxNumber, currentTotal);
    }
    right++;
  }
  return maxNumber;
};
let nums = [1, 5, 4, 2, 9, 9, 9];
let k = 3;
console.log(maximumSubarraySum(nums, k));
// Output: 15
