from typing import List
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        anagrams = {} 
        result=[]
        for s in strs:
            sortStr = ''.join(sorted(s))
            if sortStr in anagrams:
                anagrams[sortStr].append(s)
            else:
                anagrams[sortStr] = [s]
        return list(anagrams.values())
print(Solution().groupAnagrams(["eat","tea","tan","ate","nat","bat"]))