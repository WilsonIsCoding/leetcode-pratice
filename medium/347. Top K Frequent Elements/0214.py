class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count_map = Counter(nums)
        top_k = sorted(count_map.items(), key=lambda item: item[1], reverse=True)[:k]
        return [item[0] for item in top_k]
