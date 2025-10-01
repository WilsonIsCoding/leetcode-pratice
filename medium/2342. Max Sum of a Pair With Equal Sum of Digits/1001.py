from typing import List
class Solution:
    def maximumSum(self, nums: List[int]) -> int:
        dict={}
        for i in range(len(nums)):
            digit_sum = sum(int(d) for d in str(nums[i]))
            if digit_sum not in dict:
                dict[digit_sum]=[]
            dict[digit_sum].append(nums[i])
        maxCount=-1
        for key,value in dict.items():
            if len(value)>1:
                value.sort()
                maxCount=max(maxCount,value[-1]+value[-2])
        return maxCount
# time O(N+M+MlogM)
# space O(N+1)
print(Solution().maximumSum( [18,43,36,13,7]))