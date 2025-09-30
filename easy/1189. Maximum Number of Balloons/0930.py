class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        dict={}
        str="balloon"
        for i in range(len(text)):
            if(text[i] in str):
               dict[text[i]]=dict.get(text[i],0) + 1
        minCount = len(text)
        for i in range(len(str)):
            if(str[i]=='l' or str[i]=='o'):
                value=dict.get(str[i],0)//2
            else:
                value=dict.get(str[i],0)
            minCount=min(minCount,value)
        return minCount
# time：O(N+7)
# opacity：O(N+1)
print(Solution().maxNumberOfBalloons("nlaebolko"))