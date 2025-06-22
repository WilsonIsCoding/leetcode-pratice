/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.
//Input: nums = [1,1,2]
//Output:
//[[1,1,2],
// [1,2,1],
// [2,1,1]]
var permuteUnique = function (nums) {
  const result = [];
  let nums = nums.sort((a, b) => a - b);
  const permutations = (path, remaining) => {
    if (remaining.length === 0) {
      result.push([...path]);
      return;
    }
    const used = new Set();
    for (let i = 0; i < remaining.length; i++) {
      const pickNum = remaining[i];
      if (used.has(pickNum)) continue;
      used.add(pickNum);
      const newRemaining = remaining
        .splice(0, i)
        .concat(remaining.slice(i + 1)); //=>remaining.length-1
      path.push(pickNum); //[1]
      permutations(path, newRemaining); //[1],[1,2]
      path.pop();
    }
  };
  permutations([], nums);
  return result;
};
//第一層 permutations([], [1,1,2])
//for i=0: pickNum=1, used=[1], newRemaining=[1,2], path=[1], permutations([1], [1,2])
//for i=1: pickNum=1, used.has(1)==true, continue
//for i=2: pickNum=2, used=[1,2], newRemaining=[1,1], path=[2], permutations([2], [1,1])
//newRemaining=[1,2]->a路線，path=[1]->path=[]
//newRemaining=[1,1]->b路線，path=[2]->path=[]