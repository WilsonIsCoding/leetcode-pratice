/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
  let count = 0;
  for (let i = 0; i < fruits.length; i++) {
    for (let j = 0; j < baskets.length; j++) {
      if (fruits[i] <= baskets[j]) {
        baskets[j] = -1;
        count++;
        break;
      }
    }
  }
  return fruits.length - count;
};
console.log(numOfUnplacedFruits([3, 6, 1], [6, 4, 7]));
