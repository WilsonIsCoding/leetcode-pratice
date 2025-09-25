/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let map = new Map();
  const dp = (index, floor) => {
    if (!triangle[floor]) return 0;
    const cur = triangle[floor][index];
    const key = `${floor}_${index}`;
    if (map.has(key)) {
      return map.get(key);
    } else {
      let mapCount =
        cur +
        Math.min(dp(index, floor + 1, cur), dp(index + 1, floor + 1, cur));
      map.set(key, mapCount);
      return mapCount;
    }
  };
  return dp(0, 0);
};
let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
// Output: 11
// Explanation: The triangle looks like:
//    2
//   3 4
//  6 5 7
// 4 1 8 3
// The minimum path sum from top to bottom is 2 + 3 + 5 + 1 = 11 (underlined above).
console.log(minimumTotal(triangle));
