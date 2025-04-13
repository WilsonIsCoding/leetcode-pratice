var subsets = function(nums) {
    const result = [];

    function backtrack(start, path) {
        // 每次呼叫就加一次目前的組合
        result.push([...path]);

        // 從當前位置開始選擇元素
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);          // 選擇這個數字
            backtrack(i + 1, path);      // 往下繼續找
            path.pop();                  // 回溯，撤銷選擇
        }
    }

    backtrack(0, []);
    return result;
};
// 以[1,2,3]為例子
// backtrack(0, []);
// result=[[]]
// backtrack(1, 1);
// backtrack(2, 2);
// backtrack(3, 3);
// result=[[],[1],[2],[3]]
// backtrack(1, 1)->後續
// backtrack(2, 1,2);
// backtrack(3, 1,2,3);
// backtrack(3, 1,3);
// result=[[],[1],[2],[3],[1,2],[1,3],[1,2,3]]
// backtrack(2, 2)->後續
// backtrack(3, 2,3);
// result=[[],[1],[2],[3],[1,2],[1,3],[1,2,3],[2,3]]

// backtrack(2, 2)->後續

