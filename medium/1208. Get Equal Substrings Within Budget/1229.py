class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
        cost_array = []
        for i in range(len(s)):
            cost_array.append(abs(ord(t[i]) - ord(s[i])))
        left = 0
        right = 0
        max_length = -float("inf")
        while right < len(cost_array):
            maxCost -= cost_array[right]
            while maxCost < 0:
                maxCost += cost_array[left]
                left += 1
            max_length = max(max_length, right - left + 1)
            right += 1
        return max_length


print(Solution().equalSubstring("krrgw", "zjxss", 19))
