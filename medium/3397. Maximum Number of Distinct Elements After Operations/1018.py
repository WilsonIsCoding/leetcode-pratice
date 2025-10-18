from typing import List


class Solution:
    def maxDistinctElements(self, nums: List[int], k: int) -> int:
        nums.sort()
        count = 0
        last_pick = nums[0] - k - 1
        for num in nums:
            low = num - k
            high = num + k
            x = last_pick + 1
            if x < low:
                x = low
            if x <= high:
                count += 1
                last_pick = x
        return count


print(Solution().maxDistinctElements([8, 10], 0))
