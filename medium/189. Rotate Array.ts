/**
 Do not return anything, modify nums in-place instead.
 */
 function rotate(nums: number[], k: number): void {
    if (nums.length > k) {
        let pushArr: number[] = nums.splice(nums.length - k, k)
        nums.unshift(...pushArr)
    } else {
        for (let i: number = 1; i <= k; i++) {
            let prop: number[] = nums.splice(nums.length - 1, 1)
            nums.unshift(...prop)
        }
    }
};