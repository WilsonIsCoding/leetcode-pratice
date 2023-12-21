function maxProfit(prices: number[]): number {
    //.  [3, 3, 5, 0, 0, 3, 1, 4]
    //low 3, 3, 3, 0, 0, 0, 0, 0
    //high.     5, 5, 5, 5, 5, 5
    //btime.    
    //stime.    
    //i.     1, 2, 3, 4, 5, 6, 7
    let low: number = prices[0];
    let high: number = null;
    let profit: number = null;
    let btime: number = 0;
    let stime: number = 0;
    for (let i: number = 1; i < prices.length; i++) {
        if (prices[i] <= low) {
            low = prices[i]
            btime = i
            high = null
            stime = 0
        } else if (prices[i] >= high) {
            high = prices[i]
            stime = i
        }
        if (high - low > profit && btime < stime) {
            profit = high - low
        }
    }
    return profit
};