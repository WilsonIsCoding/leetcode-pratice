/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function (numBottles, numExchange) {
  let bottles = numBottles;
  let remain = 0;
  while (numBottles >= numExchange) {
    numBottles -= numExchange;
    numExchange++;
    remain++;
    if (numBottles < numExchange) {
      numBottles += remain;
      bottles += remain;
      remain = 0;
    }
  }
  return bottles;
};
console.log(maxBottlesDrunk(10, 3));
