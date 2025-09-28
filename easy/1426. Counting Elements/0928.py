from typing import List
class Solution:
    def countElements(self, arr: List[int]) -> int:
        count=0
        map={}
        for i in range(len(arr)):
            map[arr[i]]=(map.get(arr[i]) or 0)+1
        for i in range(len(arr)):
            if map.get(arr[i],0)>0 and map.get(arr[i]+1,0)>0:
                count+=1
                map[arr[i]]=map.get(arr[i])-1
        return map
print(Solution().countElements([1,3,2,3,5,0]))