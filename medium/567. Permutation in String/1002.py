class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) == 1 and s1 in s2:
            return True
        map = {}
        for str in s1:
            map[str] = map.get(str, 0) + 1
        left = 0
        for right in range(len(s2)):
            if s2[right] in map:
                map[s2[right]] = map.get(s2[right]) - 1
                if map.get(s2[right]) < 0:
                    return False
                if right - left == len(s1):
                    return True
            else:
                while left != right:
                    if map.get(s2[left]) is not None:
                        map[s2[left]] = map.get(s2[left]) + 1
                    left += 1
        return False


print(Solution().checkInclusion("adc", "dcda"))
