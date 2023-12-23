function topKFrequent(nums: number[], k: number): number[] {
    const numMap: Map<number, number> = new Map();
    for (let num of nums) {
        numMap.set(num, (numMap.get(num) || 0) + 1);
    }
    return Array.from(numMap.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(([num]) => num);
}