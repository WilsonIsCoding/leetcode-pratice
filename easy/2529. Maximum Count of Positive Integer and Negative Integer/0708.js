/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumCount = function (nums) {
    const findFirstPositive = () => {
        let left = 0, right = nums.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (nums[mid] <= 0) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        return left;
    }
    const findFistZeroOrPositive = () => {
        let left = 0, right = nums.length;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            //[-2,-1,0,1,2]
            if (nums[mid] < 0) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        return left;
    }
    return Math.max(nums.length - findFirstPositive(), findFistZeroOrPositive())
};