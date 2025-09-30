from typing import List
class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        dict={
            0:-1
        }
        maxLength=0
        prefix_sum=0
        for i,num in enumerate(nums):
            prefix_sum += 1 if num==1 else -1
            if prefix_sum in dict:
                maxLength=max(maxLength,i-dict.get(prefix_sum))
            else:
                dict[prefix_sum]=i
        return maxLength
print(Solution().findMaxLength([0,1]))
# [1,0,1,1,1,0,1,0]
# [0,1,0]