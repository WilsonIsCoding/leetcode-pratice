class Solution:
    def numWaterBottles(self, numBottles: int, numExchange: int) -> int:
        count = 0
        while numBottles >= numExchange:
            count+=numBottles // numExchange * numExchange
            numBottles=numBottles % numExchange + numBottles // numExchange
        count+=numBottles
        return count
print(Solution().numWaterBottles(9,3))