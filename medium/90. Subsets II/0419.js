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
            if (i > start && numsSort[i] === numsSort[i - 1]) continue;
            path.push(numsSort[i]);          // 選擇這個數字
            backtrack(i + 1, path);      // 往下繼續找
            path.pop();                  // 回溯，撤銷選擇
        }
    }

    backtrack(0, []);
    return result;
};