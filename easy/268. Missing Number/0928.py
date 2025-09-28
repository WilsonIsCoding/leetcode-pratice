from typing import List
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        set1 = set(nums)
        for i in range(len(nums)):
            if i not in set1:
                return i
print(Solution().missingNumber([3,0,1]))