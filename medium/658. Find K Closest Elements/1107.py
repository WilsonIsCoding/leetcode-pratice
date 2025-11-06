import heapq
class Solution:
    def findClosestElements(self, arr: List[int], k: int, x: int) -> List[int]:
        heap = []
        for i in range(len(arr)):
            heapq.heappush(heap,(-abs(arr[i] - x), -arr[i]))
            if len(heap) > k:
                heapq.heappop(heap)
        return sorted([-pair[1] for pair in heap])