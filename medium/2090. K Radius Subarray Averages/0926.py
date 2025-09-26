from typing import List
import math
class Solution:
    def getAverages(self, nums: List[int], k: int) -> List[int]:
        ans=[-1]*len(nums)
        left,count=0,0
        for i in range(len(nums)):
            count+=nums[i]
            if i - left > 2 * k:
                count-=nums[left]
                left+=1
            if i >= k * 2 :
                ans[i-k]=math.floor(count/(2*k+1))
        return ans

print(Solution().getAverages([7,4,3,9,1,8,5,2,6],3))
# Input: nums = [7,4,3,9,1,8,5,2,6], k = 3
# Output: [-1,-1,-1,5,4,4,-1,-1,-1]
