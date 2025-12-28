/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function (customers) {
  let minLost = 0;
  let minLostIndex = 0;
  let score = 0;
  for (let i = 0; i < customers.length; i++) {
    if (customers[i] === "Y") {
      score++;
    } else {
      score--;
    }
    if (score > minLost) {
      minLost = score;
      minLostIndex = i + 1;
    }
  }
  return minLostIndex;
};
let customers = "YYNY";
console.log(bestClosingTime(customers));
