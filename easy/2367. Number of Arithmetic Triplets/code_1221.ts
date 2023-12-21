function arithmeticTriplets(nums: number[], diff: number): number {
    let count: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i] - diff) !== -1 && nums.indexOf(nums[i] - 2 * diff) !== -1) {
            count++
        }
    }
    return count
};