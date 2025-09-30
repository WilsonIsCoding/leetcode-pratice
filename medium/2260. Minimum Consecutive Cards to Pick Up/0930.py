from typing import List
class Solution:
    def minimumCardPickup(self, cards: List[int]) -> int:
        dict={}
        maxLength= -1
        for i in range(len(cards)):
            if dict.get(cards[i]) is not None:
                if maxLength != -1:
                    maxLength=min(maxLength,i - dict.get(cards[i]) + 1)
                else:
                    maxLength= i - dict.get(cards[i]) + 1
            dict[cards[i]] = i
        return maxLength
        
print(Solution().minimumCardPickup([70,37,70,41,1,62,71,49,38,50,29,76,29,41,22,66,88,18,85,53]))