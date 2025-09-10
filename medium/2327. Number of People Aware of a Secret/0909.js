/**
 * @param {number} n
 * @param {number} delay
 * @param {number} forget
 * @return {number}
 */
//answer=dp[4][0]+dp[4][1]+...+dp[4][forget-1]
// n = 4, delay = 1, forget = 3
// dp[1][0]=1
// dp[2][0]=1,dp[2][1]=1
// dp[3][0]=2,dp[3][1]=1,dp[3][2]=1
// dp[4][0]=3,dp[4][1]=2,dp[4][2]=1

// n = 6, delay = 2, forget = 4
// dp[1][0]=1
// dp[2][0]=0,dp[2][1]=1
// dp[3][0]=1,dp[3][1]=0,dp[3][2]=1
// dp[4][0]=1,dp[4][1]=1,dp[3][2]=0,dp[3][3]=1
var peopleAwareOfSecret = function (n, delay, forget) {
  const MOD = 1e9 + 7;
  let dp = Array(n + 1).fill(0);
  dp[1] = 1; // 第一天1個人知道秘密
  for (let i = 1; i <= n; i++) {
    const peopleToday = dp[i];
    if (!peopleToday) continue;

    // 從 i+delay 到 i+forget-1 這些天的人可以被分享秘密
    for (let j = i + delay; j < i + forget && j <= n; j++) {
      dp[j] = (dp[j] + peopleToday) % MOD;
    }
    console.log(dp);
  }

  // 統計最後一天還記得秘密的人
  let result = 0;
  for (let i = Math.max(1, n - forget + 1); i <= n; i++) {
    result = (result + dp[i]) % MOD;
  }
  return result;
};
let n = 12;
let delay = 1;
let forget = 9;

console.log(peopleAwareOfSecret(n, delay, forget));
