/**
 * @param {number[]} nums
 * @param {number} value
 * @return {number}
 */
var findSmallestInteger = function (nums, value) {
    const count = Array(value).fill(0);
    for (const n of nums) {
        const mod = ((n % value) + value) % value;
        count[mod]++;
    }

    let minRemainder = -1;
    let minCount = Infinity;
    for (let i = value - 1; i >= 0; i--) {
        if (count[i] <= minCount) {
            minCount = count[i];
            minRemainder = i;
        }
    }

    return minCount * value + minRemainder;
};

let nums = [3, 0, 3, 2, 4, 2, 1, 1, 0, 4];
let value = 5;
console.log(findSmallestInteger(nums, value));
