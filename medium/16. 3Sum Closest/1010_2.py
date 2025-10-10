from typing import List
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        closestSum = float("inf")
        result = float("inf")
        for i in range(len(nums)-2):
            left = i+1
            right = len(nums)-1
            while(left<right):
                sum = nums[i]+nums[left]+nums[right]
                if abs(sum-target)<closestSum:
                    closestSum=abs(sum-target)
                    result=sum
                if sum == target:
                    return target
                elif sum > target:
                    right-=1
                else:
                    left+=1
        return result
print(Solution().threeSumClosest([-1,2,1,-4],1))