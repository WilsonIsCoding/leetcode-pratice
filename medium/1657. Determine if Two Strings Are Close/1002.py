from collections import Counter
class Solution:
    def closeStrings(self, word1: str, word2: str) -> bool:
        word1_dict = {}
        word2_dict = {}
        for ch in word1:
            word1_dict[ch] = word1_dict.get(ch, 0) + 1
        for ch in word2:
            word2_dict[ch] = word2_dict.get(ch, 0) + 1
        if set(word1_dict.keys()) == set(word2_dict.keys()) and Counter(word1_dict.values()) == Counter(word2_dict.values()):
            return True
        return False


print(Solution().closeStrings("abc", "bca"))
