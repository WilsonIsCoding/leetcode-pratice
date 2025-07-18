/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumLength = function (nums, k) {
    let map = Array(nums.length).fill(0).map(() => new Map());
    let res = 1
    for (let i = 0; i < nums.length; i++) {
        map[i].set(null, 1);
        for (let j = 0; j < i; j++) {
            let count = (nums[i] + nums[j]) % k
            let prefix = map[j].get(count) || 1
            let current = map[i].get(count) || 1
            map[i].set(count, Math.max(prefix + 1, current))
            res = Math.max(res, Math.max(prefix + 1, current))
        }
    }
    return res
};

console.log(maximumLength([1, 1, 2, 2], 3));
