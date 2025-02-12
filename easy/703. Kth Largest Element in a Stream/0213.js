class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return min;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }

    _heapifyUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[parentIdx] <= this.heap[idx]) break;
            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            idx = parentIdx;
        }
    }

    _heapifyDown() {
        let idx = 0;
        const length = this.heap.length;
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let smallestIdx = idx;

            if (leftIdx < length && this.heap[leftIdx] < this.heap[smallestIdx]) {
                smallestIdx = leftIdx;
            }
            if (rightIdx < length && this.heap[rightIdx] < this.heap[smallestIdx]) {
                smallestIdx = rightIdx;
            }
            if (smallestIdx === idx) break;
            [this.heap[idx], this.heap[smallestIdx]] = [this.heap[smallestIdx], this.heap[idx]];
            idx = smallestIdx;
        }
    }
}

class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinHeap();
        nums.forEach(num => this.add(num));
    }

    add(val) {
        if (this.minHeap.size() < this.k) {
            this.minHeap.push(val);
        } else if (val > this.minHeap.peek()) {
            this.minHeap.pop();
            this.minHeap.push(val);
        }
        return this.minHeap.peek();
    }
}
