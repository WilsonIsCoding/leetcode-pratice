function longestConsecutive(nums: number[]): number {
    if (nums.length == 0) return 0;
    nums = nums.sort((a, b) => a - b)
    let maxLength: number = 1;
    let tempMaxLength: number = 1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i + 1] == nums[i]) continue
        if (nums[i + 1] - nums[i] == 1) {
            tempMaxLength++
        } else {
            if (maxLength < tempMaxLength) {
                maxLength = tempMaxLength
            }
            tempMaxLength = 1
        }
    }
    return maxLength
};