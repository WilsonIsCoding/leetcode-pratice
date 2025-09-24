from typing import List

class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        maxCount = 0
        cur = 0
        for right in range(k):
            cur += nums[right]
        maxCount = cur
        for right in range(k, len(nums)):
            cur += nums[right] - nums[right - k]
            maxCount = max(maxCount, cur)
        return maxCount / k

        

print(Solution().findMaxAverage([1, 2, 3, 4], 2))
