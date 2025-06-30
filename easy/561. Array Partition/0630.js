/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    nums = nums.sort((a, b) => a - b);
    let count = 0
    for (let i = 0; i < nums.length; i=i+2) {
        count+=nums[i]
    }
    return count;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    const offset = 10000
    //[-4,-2,0,2,4,6]
    const count = new Array(20001).fill(0);
    for (let num of nums) {
        count[offset + num]++
    }
    let sum = 0
    let odd = true
    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            if (odd) {
                sum += i - offset
            }
            odd = !odd
            count[i]--
        }
    }
    return sum

};