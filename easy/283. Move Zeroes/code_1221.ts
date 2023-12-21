/**
 Do not return anything, modify nums in-place instead.
 */
 function moveZeroes(nums: number[]): void {
    let writePointer: number = 0;
    for (let readPointer: number = 0; readPointer < nums.length; readPointer++) {
        const val: number = nums[readPointer]
        nums[readPointer] = 0;
        if (val !== 0) {
            nums[writePointer] = val
            writePointer++
        }
    }
};