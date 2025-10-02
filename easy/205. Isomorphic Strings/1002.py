class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        smap = {}
        tmap = {}
        for i in range(len(s)):
            if s[i] not in smap and t[i] not in tmap:
                smap[s[i]] = t[i]
                tmap[t[i]] = s[i]
            else:
                if smap.get(s[i]) != t[i] or tmap.get(t[i]) != s[i]:
                    return False
        return True


print(Solution().isIsomorphic("badc", "baba"))
