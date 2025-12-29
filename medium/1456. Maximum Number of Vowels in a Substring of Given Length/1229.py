class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        left = 0
        right = 0
        current_vowel_count = 0
        max_vowel_count = 0
        vowels = set("aeiou")
        while right < len(s):
            if s[right] in vowels:
                current_vowel_count += 1
            right += 1
            if right - left > k:
                if s[left] in vowels:
                    current_vowel_count -= 1
                left += 1
            max_vowel_count = max(max_vowel_count, current_vowel_count)

        return max_vowel_count


print(Solution().maxVowels("abciiidef", 3))
