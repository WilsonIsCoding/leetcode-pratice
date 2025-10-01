from typing import List
class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        row_map={}
        for row in grid:
            key=tuple(row)
            row_map[key]=row_map.get(key,0)+1
        n=len(grid)
        count=0
        for j in range(n):
            col=tuple(grid[i][j] for i in range(n))
            if col in row_map:
                count+=row_map[col]
        return count
print(Solution().equalPairs([[3,2,1],[1,7,6],[2,7,7]]))