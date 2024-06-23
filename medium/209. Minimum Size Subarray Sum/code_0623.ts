const minSubArrayLen = (target: number, nums: number[]): number => {
    let left = 0, sum = 0, ans = Number.MAX_VALUE;

    for(let right = 0; right < nums.length; right++) {
        sum += nums[right];

        while(sum >= target) {
            ans = Math.min(ans, right - left + 1)
            sum -= nums[left];
            left++;
        }
    }

    return ans === Number.MAX_VALUE ? 0 : ans;
};