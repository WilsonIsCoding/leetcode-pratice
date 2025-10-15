/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxIncreasingSubarrays = function (nums) {
    let maxLength = 1;
    let array = new Array(nums.length).fill(1);
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            array[i] = array[i - 1] + 1;
            if (array[i] <= array[i - array[i]]) {
                maxLength = Math.max(maxLength, array[i]);
            } else {
                maxLength = Math.max(maxLength, Math.floor(array[i] / 2));
            }
        }
    }

    return maxLength;
};
console.log(maxIncreasingSubarrays([2, 5, 7, 8, 9, 2, 3, 4, 3, 1]));

// 時間複雜度 O(n)
// 空間複雜度 O(n+1)