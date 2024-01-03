function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => {
        return a - b
    })

    const result: number[][] = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                result.push([nums[i], nums[j], nums[k]])
                while (j < k && nums[j] === nums[j + 1]) j++;
                while (j < k && nums[j] === nums[k - 1]) j--;
                j++;
                k--;
            } else if (sum < 0) {
                j++
            } else {
                k--
            }
        }

    }
    return result
};