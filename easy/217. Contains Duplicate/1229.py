from typing import List


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        map = {}
        for num in nums:
            if map.get(num):
                return True
            map[num] = True
        return False


print(Solution().containsDuplicate([1, 2, 3, 1]))
