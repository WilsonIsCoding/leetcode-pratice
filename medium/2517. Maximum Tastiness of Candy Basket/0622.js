/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function (price, k) {
    price = price.sort((a, b) => a - b);
    const isValid = (testMid) => {
        let left = price[0];
        let count = 1;
        let rightIndex = 1;
        while (count < k && rightIndex < price.length) {
            if (price[rightIndex] - left >= testMid) {
                count++
                left = price[rightIndex];
            }
            rightIndex++
        }
        return count >= k
    }
    let low = 0;
    let high = 10 ** 9;
    while (low < high) {
        let mid = Math.floor((low + high) / 2)
        if (isValid(mid)) {
            low = mid + 1
        } else {
            high = mid 
        }
    }
    return low - 1
};