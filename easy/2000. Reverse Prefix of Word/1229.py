class Solution:
    def reversePrefix(self, word: str, ch: str) -> str:
        for i in range(len(word)):
            if word[i] == ch:
                prefix = "".join(reversed(word[: i + 1]))
                suffix = word[i + 1 :]
                return prefix + suffix

        return word


print(Solution().reversePrefix("abcdefd", "d"))
