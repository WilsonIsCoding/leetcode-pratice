/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  let dp = Array.from({ length: nums1.length + 1 }, () =>
    Array(nums2.length + 1).fill(0)
  );
  let count = 0;
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        count = Math.max(count, dp[i][j]);
      }
    }
  }
  return count;
};

// let nums1 = [1, 2, 3, 2, 1];
// let nums2 = [3, 2, 1, 4, 7];
let nums1 = [0, 0, 0, 0, 0];
let nums2 = [0, 0, 0, 0, 0];

console.log(findLength(nums1, nums2));
