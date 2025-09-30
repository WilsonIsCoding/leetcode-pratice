from typing import List
class Solution:
    def triangularSum(self, nums: List[int]) -> int:
        def recursive(arr ,length):
            if length==0:
                return arr[0]
            for i in range(length):
                arr[i]=(arr[i]+arr[i+1])%10
            return recursive(arr,length-1)
            
        return recursive(nums,len(nums)-1)
        
print(Solution().triangularSum([1,2,3,4,5]))