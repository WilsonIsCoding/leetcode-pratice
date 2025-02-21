class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._bubbleUp();
    }

    pop() {
        if (this.size() === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown();
        return min;
    }

    size() {
        return this.heap.length;
    }

    _bubbleUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx][0] >= this.heap[parentIdx][0]) break;
            [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
            idx = parentIdx;
        }
    }

    _bubbleDown() {
        let idx = 0;
        const length = this.heap.length;
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let smallest = idx;

            if (leftIdx < length && this.heap[leftIdx][0] < this.heap[smallest][0]) {
                smallest = leftIdx;
            }
            if (rightIdx < length && this.heap[rightIdx][0] < this.heap[smallest][0]) {
                smallest = rightIdx;
            }
            if (smallest === idx) break;

            [this.heap[idx], this.heap[smallest]] = [this.heap[smallest], this.heap[idx]];
            idx = smallest;
        }
    }
}

var kSmallestPairs = function(nums1, nums2, k) {
    if (!nums1.length || !nums2.length) return [];
    
    let minHeap = new MinHeap();
    let result = [];

    // 先將 (nums1[i], nums2[0]) 放入堆
    for (let i = 0; i < Math.min(k, nums1.length); i++) {
        minHeap.push([nums1[i] + nums2[0], i, 0]);  // [sum, i, j]
    }

    while (k > 0 && minHeap.size()) {
        let [sum, i, j] = minHeap.pop();
        result.push([nums1[i], nums2[j]]);

        if (j + 1 < nums2.length) {
            minHeap.push([nums1[i] + nums2[j + 1], i, j + 1]);
        }
        k--;
    }
    
    return result;
};
