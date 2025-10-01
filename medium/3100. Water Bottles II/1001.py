class Solution:
    def maxBottlesDrunk(self, numBottles: int, numExchange: int) -> int:
        count=numBottles
        remain=0
        while numBottles>=numExchange:
            numBottles=numBottles-numExchange
            numExchange+=1
            remain+=1
            if numBottles<numExchange:
                count+=remain
                numBottles+=remain
                remain=0
        return count