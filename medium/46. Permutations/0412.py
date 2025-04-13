from typing import List

class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        result = []

        def backtrack(path, remaining):
            if not remaining:
                result.append(path)
                return
            
            
            for i in range(len(remaining)):
                # 選擇一個元素加入 path，並繼續遞迴處理剩下的元素
                backtrack(path + [remaining[i]], remaining[:i] + remaining[i+1:])

        backtrack([], nums)
        return result

# 每個backtrack為將會執行的程式碼
# i1=0->ramaining[1,2,3]
# backtrack([1], [2,3])
# i1=0,i2=0 -> [2,3]
# backtrack([1,2], [3])
# i1=0,i2=0,i3=0->[3] -> 跑到for迴圈時會變成以下結果
# backtrack([1,2,3], [])
# i1=0,i2=1->[2,3]
# backtrack([1,3], [2])
# i1=0,i2=1,i3=0 -> [2] -> 跑到for迴圈時會變成以下結果
# backtrack([1,3,2], [])
# --------------------------
# i1=1,i2=0,i3=0->[1,2,3]
# backtrack([2], [1,3])

# i1=0,
# backtrack([1], [2,3])
# backtrack([1], [2,3])