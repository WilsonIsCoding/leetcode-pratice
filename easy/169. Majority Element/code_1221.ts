function majorityElement(nums: number[]): number {
    if (nums.length == 1) {
        return nums[0]
    }
    let ceil: number = Math.ceil(nums.length / 2);
    let obj: Object = {}
    for (let i: number = 0; i < nums.length; i++) {
        if (obj[nums[i]] == undefined) {
            obj[nums[i]] = 1
        } else {
            obj[nums[i]]++
            if (obj[nums[i]] >= ceil) {
                return nums[i]
            }
        }
    }

};