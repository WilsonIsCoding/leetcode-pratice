/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

//The solution set must not contain duplicate subsets. Return the solution in any order.

//Input: nums = [2,2,2,4]
//Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
//[2(第一個2)],[1,2]
//[2(第二個2)],[1,2]
var subsetsWithDup = function (nums) {
  const result = [];
  const numsSort = nums.sort((a, b) => a - b);
  const backtrack = (start, path) => {
    result.push([...path]); //result:[[]],numsSort:[1,2,2]
    for (let i = start; i < numsSort.length; i++) {
      const currentNum = numsSort[i];
      if (i > start && currentNum === numsSort[i - 1]) continue;
      path.push(currentNum);
      //backtrack([2,2],[2,4])
      //backtrack([2,2,2],[4])->這個東西不會出現
      backtrack(i + 1, path);
      path.pop();
    }
  };
  backtrack(0, []);
  return result;
};

//input1:[1,1,2,2,4]
//input2:4

//output:[[1,1,2],[2,2],[4]]
