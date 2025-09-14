/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let left = 0;
  let right = 0;
  let zeroCount = 0;
  let maxLength = 0;
  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroCount++;
      while (zeroCount > k) {
        if (nums[left] === 0) {
          zeroCount--;
        }
        left++;
      }
    }
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }
  return maxLength;
};
let nums = [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1];
let k = 3;
console.log(longestOnes(nums, k));
