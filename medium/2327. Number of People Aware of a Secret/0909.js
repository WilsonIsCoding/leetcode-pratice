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
  let dp = Array.from({ length: n + 1 }, () => Array(forget).fill(0));
  dp[1][0] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j < forget; j++) {
      dp[i][j] = dp[i - 1][j - 1] % MOD;
    }
    let newPerson = 0;
    for (let k = delay; k < forget; k++) {
      newPerson = (newPerson + dp[i - 1][k - 1]) % MOD;
    }
    dp[i][0] = newPerson;
  }
  let result = 0;
  for (let i = 0; i < forget; i++) {
    result = (result + dp[n][i]) % MOD;
  }
  return result;
};
let n = 4;
let delay = 1;
let forget = 3;

console.log(peopleAwareOfSecret(n, delay, forget));
