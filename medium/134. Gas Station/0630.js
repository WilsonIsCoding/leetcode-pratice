/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
//總油量-總里程>0 ->一定有解
//假性失敗條件->當前油量<0,起點錯誤
//真失敗條件，總油量-總需求<0,return -1
//[1,2,3,4,5]
//[8,1,1,1,2]
var canCompleteCircuit = function (gas, cost) {
    let currentGas = 0;
    let totalGas = 0
    let startIndex = 0
    for (let i = 0; i < gas.length; i++) {
        const gain = gas[i] - cost[i];
        totalGas += gain
        currentGas += gain
        if (currentGas < 0) {
            startIndex = i + 1;
            currentGas = 0
        }
    }
    return totalGas >= 0 ? startIndex : -1
};