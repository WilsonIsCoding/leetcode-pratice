class Solution:
    def removeAnagrams(self, words: List[str]) -> List[str]:
        def changeToArray(word: str) -> List[int]:
            count = [0] * 26
            for s in range(len(word)):
                count[ord(word[s]) - ord("a")] += 1
            return tuple(count)

        result = [words[0]]
        pre_count = changeToArray(words[0])
        for i in range(1, len(words)):
            current_count = changeToArray(words[i])
            if current_count != pre_count:
                result.append(words[i])
                pre_count = current_count
        return result
