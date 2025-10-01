class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        map = {}
        maxLength = 0
        left = 0
        for i in range(len(s)):
            while s[i] in map:
                del map[s[left]]
                left += 1
            map[s[i]] = True
            maxLength = max(maxLength, i - left + 1)
        return maxLength
print(Solution().lengthOfLongestSubstring("abcabcbb"))