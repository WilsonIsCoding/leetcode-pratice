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
//set功能：紀錄已經使用過的數字，避免重複使用
//input: [1,1,2]
//output: [[1,1,2], [1,2,1], [2,1,1]]
// 第一層 permutations([], [1,1,2])
// for i=0: pickNum=1, used=[1], newRemaining=[1,2], path=[1], permutations([1], [1,2])
// for i=1: pickNum=1, used.has(1)==true, continue
// for i=2: pickNum=2, used=[1,2], newRemaining=[1,1], path=[2], permutations([2], [1,1])

//第二層：permutations([1], [1,2])
// for i=0: pickNum=1, used=[1], newRemaining=[2], path=[1,1], permutations([1,1], [2])
// for i=1: pickNum=2, used=[1,2], newRemaining=[1], path=[1,2], permutations([1,2], [1])

//第三層：permutations([1,1], [2])
// for i=0: pickNum=2, used=[2], newRemaining=[1], path=[1,1,2], permutations([1,1,2], [])

//第四層：permutations([1,2], [1])
// for i=0: pickNum=1, used=[1], newRemaining=[2], path=[1,2,1], permutations([1,2,1], [])

//第二層：permutations([2], [1,1])
// for i=0: pickNum=1, used=[1], newRemaining=[1], path=[2,1], permutations([2,1], [1])
// for i=1: pickNum=1, used.has(1)==true, continue

//第三層：permutations([2,1], [1])
// for i=0: pickNum=1, used=[1], newRemaining=[], path=[2,1,1], permutations([2,1,1], [])
