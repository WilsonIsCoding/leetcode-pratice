var isPossible = function (nums) {
  let count = new Map();
  let end = new Map();
  for (const num of nums) {
      count.set(num, (count.get(num) || 0) + 1);
  }
  for (let i = 0; i < nums.length; i++) {
      if (count.get(nums[i]) === 0) continue;
      if (end.get(nums[i] - 1) > 0) {
          count.set(nums[i], count.get(nums[i]) - 1);
          end.set(nums[i] - 1, (end.get(nums[i] - 1) || 0) - 1);
          end.set(nums[i], (end.get(nums[i]) || 0) + 1);
      } else if (count.get(nums[i] + 1) > 0 && count.get(nums[i] + 2) > 0) {
          end.set(nums[i] + 2, (end.get(nums[i] + 2) || 0) + 1);
          count.set(nums[i], count.get(nums[i]) - 1);
          count.set(nums[i] + 1, count.get(nums[i] + 1) - 1);
          count.set(nums[i] + 2, count.get(nums[i] + 2) - 1);
      } else {
          return false;
      }
  }
  return true;
};