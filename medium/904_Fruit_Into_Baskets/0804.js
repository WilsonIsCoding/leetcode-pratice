/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  let left = 0;
  let right = 0;
  let maxNums = 0;
  let type = new Map();
  while (right < fruits.length) {
    if (!type.has(fruits[right])) {
      while (type.size >= 2) {
        let leftCurrent = fruits[left];
        type.set(leftCurrent, type.get(leftCurrent) - 1);
        left++;
        if (type.get(leftCurrent) === 0) {
          type.delete(leftCurrent);
        }
      }
    }
    type.set(fruits[right], (type.get(fruits[right]) || 0) + 1);
    maxNums = Math.max(maxNums, right - left + 1);
    right++;
  }
  return maxNums;
};
totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]);
