/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let left = 0;
  let right = 0;
  let currentW = 0;
  let minNeedToB = k;
  while (right < blocks.length) {
    if (blocks[right] === "W") {
      currentW++;
    }
    if (right - left >= k) {
      if (blocks[left] === "W") {
        currentW--;
      }
      left++;
      minNeedToB = Math.min(minNeedToB, currentW);
    }
    right++;
    if (right - left + 1 === k) {
      minNeedToB = Math.min(minNeedToB, currentW);
    }
  }
  return minNeedToB;
};
let blocks = "BWWWBB";
let k = 6;
console.log(minimumRecolors(blocks, k));
