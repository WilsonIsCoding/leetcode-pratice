from typing import List


class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        left = 0
        right = 0
        count = 0
        minLength = float("inf")
        while right < len(nums):
            count += nums[right]
            while count >= target:
                minLength = min(minLength, right - left + 1)
                count -= nums[left]
                left += 1
            right += 1

        return 0 if minLength == float("inf") else minLength


print(Solution().minSubArrayLen(11, [1, 2, 3, 4, 5]))
