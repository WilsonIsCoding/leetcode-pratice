/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
  let map = new Map();
  let maxCount = 0;
  let result = 0;
  for (const num of nums) {
    map.set(num, map.get(num) + 1 || 1);
    maxCount = Math.max(maxCount, map.get(num));
  }
  for (const [key, value] of map) {
    if (value === maxCount) {
      result += maxCount;
    }
  }
  return result;
};
let nums = [1, 2, 2, 3, 1, 4];
console.log(maxFrequencyElements(nums));
