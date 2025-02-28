function subarraySum(nums, k) {
    let prefixSumCount = new Map();
    prefixSumCount.set(0, 1);

    let prefixSum = 0;
    let count = 0;

    for (let num of nums) {
        prefixSum += num;

        if (prefixSumCount.has(prefixSum - k)) {
            count += prefixSumCount.get(prefixSum - k);
        }

        prefixSumCount.set(prefixSum, (prefixSumCount.get(prefixSum) || 0) + 1);
    }

    return count;
}