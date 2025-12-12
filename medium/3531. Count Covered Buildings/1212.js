/**
 * @param {number} n
 * @param {number[][]} buildings
 * @return {number}
 */
var countCoveredBuildings = function (n, buildings) {
  if (buildings.length < 4) return 0;
  let buildingSortByX = [
    ...buildings.sort((a, b) => {
      if (a[0] !== b[0]) {
        return a[0] - b[0];
      } else {
        return a[1] - b[1];
      }
    }),
  ];
  let buildingSortByY = [
    ...buildings.sort((a, b) => {
      if (a[1] !== b[1]) {
        return a[1] - b[1];
      } else {
        return a[0] - b[0];
      }
    }),
  ];
  let setX = new Set();
  let setY = new Set();
  for (let i = 1; i < buildingSortByX.length - 1; i++) {
    if (
      buildingSortByX[i][1] > buildingSortByX[i - 1][1] &&
      buildingSortByX[i][1] < buildingSortByX[i + 1][1] &&
      buildingSortByX[i][0] === buildingSortByX[i - 1][0] &&
      buildingSortByX[i][0] === buildingSortByX[i + 1][0]
    ) {
      setX.add(buildingSortByX[i]);
    }
  }
  for (let i = 1; i < buildingSortByY.length - 1; i++) {
    if (
      buildingSortByY[i][0] > buildingSortByY[i - 1][0] &&
      buildingSortByY[i][0] < buildingSortByY[i + 1][0] &&
      buildingSortByY[i][1] === buildingSortByY[i - 1][1] &&
      buildingSortByY[i][1] === buildingSortByY[i + 1][1]
    ) {
      setY.add(buildingSortByY[i]);
    }
  }
  return new Set([...setX].filter((x) => setY.has(x))).size;
};
let n = 3;
let buildings = [
  [1, 2],
  [2, 2],
  [3, 2],
  [2, 1],
  [2, 3],
];

console.log(countCoveredBuildings(n, buildings));
