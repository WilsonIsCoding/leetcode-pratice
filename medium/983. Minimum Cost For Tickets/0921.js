/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  let dp = new Array(days[days.length - 1] + 1).fill(
    costs[costs.length - 1] * days[days.length - 1]
  );
  dp[0] = 0;
  const daySet = new Set(days);
  const tickets = [
    { duration: 1, cost: costs[0] },
    { duration: 7, cost: costs[1] },
    { duration: 30, cost: costs[2] },
  ];
  for (let i = 1; i <= days[days.length - 1]; i++) {
    for (const ticket of tickets) {
      if (daySet.has(i)) {
        dp[i] = Math.min(dp[i], (dp[i - ticket.duration] || 0) + ticket.cost);
      } else {
        dp[i] = dp[i - 1];
      }
    }
  }
  return dp[dp.length - 1];
};
let days = [1, 4, 6, 7, 8, 20];
let costs = [2, 7, 15];
console.log(mincostTickets(days, costs));
