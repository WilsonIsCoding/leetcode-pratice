class Solution:
    def longestOnes(self, nums: List[int], k: int) -> int:
        curKnumber=left=maxLength=0
        for right in range(len(nums)):
            if(nums[right]==0):
                curKnumber+=1
            while curKnumber>k:
                if nums[left]==0:
                    curKnumber-=1
                left+=1
            maxLength=max(maxLength,right-left+1)
        return maxLength

print(Solution().longestOnes([1,1,1,0,0,0,1,1,1,1,0],2))