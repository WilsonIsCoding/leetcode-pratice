/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countPairs = function (nums, k) {
    let pairMap = new Map();
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        let targetArr = pairMap.get(nums[i]);
        if (targetArr) {
            for (let j = 0; j < targetArr.length; j++) {
                if ((targetArr[j] * i) % k === 0) {
                    count++;
                }
            }
            targetArr.push(i);
            pairMap.set(nums[i], targetArr);
        } else {
            pairMap.set(nums[i], [i]);
        }
    }
    return count;
};