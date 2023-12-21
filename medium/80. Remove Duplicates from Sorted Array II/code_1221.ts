function removeDuplicates(nums: number[]): number {
    let k: number = 1;
    let n: number = 1;
    //   [0, 0, 1, 1, 1, 1, 2, 3, 3]
    //.  [0, 0, 1, 1, 2, 3, 3]
    // i. 0, 1, 2, 3, 4, 5, 6, 7, 8
    // n. 1, 2, 1, 2, 3, 4, 1, 1,  
    // k. 1, 2, 3, 4, 4, 4, 5, 6,
    for (let i: number = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            n++
        } else {
            n = 1
        }
        if (n <= 2) {
            nums[k] = nums[i]
            k++;
        }
    }
    return k;
};