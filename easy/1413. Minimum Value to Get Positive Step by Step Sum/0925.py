from typing import List
class Solution:
    def minStartValue(self, nums: List[int]) -> int:
        smallestSun = 0
        for i in range(len(nums)):
            if(i>0):
                nums[i] = nums[i] + nums[i - 1]
            else:
                nums[i] = nums[i]
            smallestSun = min(smallestSun, nums[i])
        return 1 - smallestSun
print(Solution().minStartValue([1,2]))

#  Input: nums = [-3,2,-3,4,2]
#  Output: 5
#  Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.
#  step by step sum
#  startValue = 4 | startValue = 5 | nums
#    (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
#    (1 +2 ) = 3  | (2 +2 ) = 4    |   2
#    (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
#    (0 +4 ) = 4  | (1 +4 ) = 5    |   4
#    (4 +2 ) = 6  | (5 +2 ) = 7    |   2