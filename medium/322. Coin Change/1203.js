/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let memo = new Array(amount + 1).fill(Infinity);
  memo[0] = 0;
  for (const coin of coins) {
    for (i = coin; i < amount + 1; i++) {
      memo[i] = Math.min(memo[i - coin] + 1, memo[i]);
    }
  }
  return memo[amount] === Infinity ? -1 : memo[amount];
};
let coins = [2];
let amount = 3;

console.log(coinChange(coins, amount));
