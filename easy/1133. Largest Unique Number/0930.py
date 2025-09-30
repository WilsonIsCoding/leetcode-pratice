from typing import List
class Solution:
    def largestUniqueNumber(self, nums: List[int]) -> int:
        dict = {}
        for i in range(len(nums)):
            dict[nums[i]]=dict.get(nums[i],0)+1
        max_number=-1
        for key,values in dict.items():
            if key>max_number and values==1:
                max_number=key
        return max_number
# time: O(2n)
# space:O(n+1)
print(Solution().largestUniqueNumber([5,7,3,9,4,9,8,3,1]))