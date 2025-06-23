/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
    const isValid = (stealMinMoney) => {
        let count = 0
        let i = 0;
        while (i < nums.length) {
            if (nums[i] <= stealMinMoney) {
                count++;
                i = i + 2
            } else {
                i++
            }
            if (count >= k) return true
        }
        return false
    }
    let low = Math.min(...nums);
    let high = Math.max(...nums);
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (isValid(mid)) {
            high = mid
        } else {
            low = mid + 1
        }
    }
    return high;
};