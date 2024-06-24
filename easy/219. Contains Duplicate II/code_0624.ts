function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let map = new Map
    for (let i = 0; i < nums.length; i++) {
        if (map.get(nums[i]) !== undefined) {
            if (i - map.get(nums[i]) <= k) {
                return true
            } else {
                map.set(nums[i], i)
            }
        } else {
            map.set(nums[i], i)
        }
    }
    return false
};