/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//  [-4,-1,1,2],1
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b);
  let closestDistinct = Infinity;
  let result = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    let detact = target - nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      let sum = nums[i] + nums[right] + nums[left];
      const diff = Math.abs(sum - target);
      if (diff < closestDistinct) {
        closestDistinct = diff;
        result = sum;
      }

      if (nums[left] + nums[right] > detact) {
        right--;
      } else if (nums[left] + nums[right] < detact) {
        left++;
      } else {
        return target;
      }
    }
  }

  return result;
};
const nums = [1, 1, -1];
const target = 2;
console.log(threeSumClosest(nums, target));
