function jump(nums: number[]): number {
    let step: number = 0;
    let nextSteps: number = 0;
    let currentIndex: number = 0;
    if (nums.length == 1) return 0
    //.       [2, 5, 1, 1, 0, 1, 3, 1]
    //i.       0. 1  2  3. 4  5  6  7
    //step. 0. 1. 1. 2  2. 2. 2. 3
    //CI.   0. 2. 2. 6. 6. 6. 6. 9
    //NS.   0. 2. 6  6  6  6  6. 9
    for (let i: number = 0; i < nums.length; i++) {
        if (nums.length - 1 <= i + nums[i]) {
            return step + 1
        }
        nextSteps = Math.max(nextSteps, i + nums[i])
        if (i == currentIndex) {
            step++
            currentIndex = nextSteps
        }
    }
    return step
};