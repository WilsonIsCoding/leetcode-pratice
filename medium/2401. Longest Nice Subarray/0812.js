/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
  let left = 0;
  let right = 0;
  let maxDistance = 0;
  let currentNums = 0;
  while (right < nums.length) {
    if ((currentNums & nums[right]) === 0) {
      currentNums |= nums[right];
      right++;
    } else {
      while ((currentNums & nums[right]) != 0) {
        currentNums ^= nums[left];
        left++;
      }
    }
    maxDistance = Math.max(maxDistance, right - left);
  }
  return maxDistance;
};
nums = [1, 3, 8, 48, 10];
console.log(longestNiceSubarray(nums));
