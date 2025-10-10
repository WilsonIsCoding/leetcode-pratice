from typing import List 
class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        closestSum = float('inf')
        result = 0
        for i in range(len(nums)-2):
            left = i + 1
            right = len(nums)-1
            while left < right:
                sum = nums[i] + nums[left] + nums[right]
                if abs(target - sum) < closestSum:
                    closestSum=abs(target-sum)
                    result = sum
                if sum > target:
                    right-=1
                elif sum<target:
                    left+=1
                else:
                    return sum
        return result
print(Solution().threeSumClosest([0,1,2],  0))
                    