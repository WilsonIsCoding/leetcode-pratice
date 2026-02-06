/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minRemoval = function (nums, k) {
  nums = nums.sort((a, b) => a - b);
  let left = 0;
  let maxLen = 1;
  for (let right = 1; right < nums.length; right++) {
    while (nums[left] * k < nums[right]) {
      left++;
    }
    maxLen = Math.max(maxLen, right - left + 1);
  }
  return maxLen === 0 ? 0 : nums.length - maxLen;
};
// const nums = [2, 1, 5];
// const k = 2
// const nums = [1, 6, 2, 9];
// const k = 3;
// const nums = [4, 6];
// const k = 2;
const nums = [2, 12];
const k = 2;
console.log(minRemoval(nums, k));
