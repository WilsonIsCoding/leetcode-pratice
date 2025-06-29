class Solution:
    def maximumTastiness(self, price: List[int], k: int) -> int:
        price.sort()
        def isValid(mid):
            left = price[0]
            count = 1
            rightIndex = 1
            while count < k and rightIndex < len(price):
                if price[rightIndex] - left >= mid:
                    count += 1
                    left = price[rightIndex]
                rightIndex += 1
            return count >= k

        low = 0
        high = 10**9
        while low < high:
            mid = (low + high) // 2
            if isValid(mid):
                low = mid + 1
            else:
                high = mid
        return low - 1
