/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    const result = []
    let numsSort = nums.sort()
    const permutations = (path, remaining) => {
        if (remaining.length === 0) {
            result.push([...path]);
            return
        }
        const used = new Set();
        for (let i = 0; i < remaining.length; i++) {
            pickNum = remaining[i]
            if (used.has(pickNum)) continue;
            used.add(pickNum);
            const newRemaining = remaining.slice(0, i).concat(remaining.slice(i + 1))
            path.push(pickNum)
            permutations(path, newRemaining)
            path.pop()
        }
    }
    permutations([], numsSort)
    return result;
};