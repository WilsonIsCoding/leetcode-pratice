/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */

// 這題應該會用dp跟移動窗格來解，需要先知道
// 在(n = 6), (k = 1), (maxPts = 10)的前提下
// 從k開始的每個位置，餘數比n大的就是0，而比n小的就是1
// 舉例來說，P(1)，因為我已經>=k了，所以不會再進行抽牌，那就是1，但假設我是P(7)，因為我已經在範圍以外，所以我的機率就是0
// 由此可推出P(0)的機率就是P(1)+P(2)+P(3)+P(4)+P(5)+P(6)+P(7)...+P(maxPts)，也就是1+1+1+1+1+1+0+0+0+0=6，所以P(0)的機率就是6/(maxPts)
// 那我們應該要維持一個長度為maxPts的窗格，他永遠會是當前index的下面maxPts個位置的機率，也會維持一個result，去儲存當前index的機率
/**
 * @param {number} n
 * @param {number} k
 * @param {number} maxPts
 * @return {number}
 */
var new21Game = function (n, k, maxPts) {
    if (k === 0 || k + maxPts < n) return 1
    //dp[0] from 1;
    let dp = new Array(maxPts).fill(0.0);
    let result = 0; let slideWindow = 1;
    dp[0] = 1.0;
    for (let i = 1; i <= n; i++) {
        let prod = slideWindow / maxPts
        if (i >= k) {
            result += prod
        } else {
            slideWindow += prod
        }
        if (i >= maxPts) {
            slideWindow -= dp[i % maxPts]
        }
        dp[i % maxPts] = prod
    }
    return result
};
