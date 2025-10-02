class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) == 1 and s1 in s2:
            return True
        map = {}
        for str in s1:
            map[str] = map.get(str, 0) + 1
        left = 0
        need = {}
        for right in range(len(s2)):
            need[s2[right]] = need.get(s2[right], 0) + 1
            if right - left + 1 > len(s1):
                need[s2[left]] -= 1
                if need[s2[left]] == 0:
                    del need[s2[left]]
                left += 1
            if need == map:
                return True

        return False


print(Solution().checkInclusion("ab", "eidboaoo"))
