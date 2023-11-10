function canJump(nums: number[]): boolean {
    let left = nums[0]
    //    2,3,1,0,4
    //l 2,3,3,2,1,4 
    for (let i = 1; i < nums.length; i++) {
        if (left == 0) {
            return false
        }
        left = Math.max(left - 1, nums[i])
    }
    return true
};