/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    const result = [];
    const numsSort = nums.sort((a, b) => a - b)

    function backtrack(start, path) {
        // 每次呼叫就加一次目前的組合
        result.push([...path]);

        // 從當前位置開始選擇元素
        for (let i = start; i < numsSort.length; i++) {
            const currentNum = numsSort[i];
            if (i > start && currentNum === numsSort[i - 1]) continue;
            path.push(currentNum);          // 選擇這個數字
            backtrack(i + 1, path);      // 往下繼續找
            path.pop();                  // 回溯，撤銷選擇
        }
    }

    backtrack(0, []);
    return result;
};
// input: [1,2,2]
// output: [[], [1], [1,2], [1,2,2], [2], [2,2]]
//第一層backtrack(0, [])
//for i=0:backtrack(1, [1]),currentNum:1,path:[1],result:[[], [1]]
//for i=1:backtrack(2, [2]),currentNum:2,path:[2],result:[[], [1], [2]]
//for i=2:觸碰if (i > start && currentNum === numsSort[i - 1]) continue;
//第二層backtrack(1, [1])
// for i=1:backtrack(2, [1,2]),currentNum:2,path:[1,2],result:[[], [1], [1,2]]
// for i=2:觸碰if (i > start && currentNum === numsSort[i - 1]) continue;
//第二層backtrack(2, [2])
//for i=2:backtrack(3, [2]),currentNum:2,path:[2],result:[[], [1], [2], [2,2]]
//for i=2:觸碰if (i > start && currentNum === numsSort[i - 1]) continue;
//第三層backtrack(2, [1,2])
//for i=2:backtrack(3, [1,2,2]),currentNum:2,path:[1,2,2],result:[[], [1], [1,2], [1,2,2]]
//for i=2:觸碰if (i > start && currentNum === numsSort[i - 1]) continue;
//第三層backtrack(2, [2])
//for i=2:backtrack(3, [2]),currentNum:2,path:[2],result:[[], [1], [2], [2,2]]
//for i=2:觸碰if (i > start && currentNum === numsSort[i - 1]) continue;
