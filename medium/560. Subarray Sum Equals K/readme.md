<h1>560. Subarray Sum Equals K</h1>

<p>Given an array of integers <code>nums</code> and an integer <code>k</code>, return the total number of continuous subarrays whose sum equals to <code>k</code>.</p>

<p>題目會給定一串陣列，還有一個target Number，請你計算這串陣列中，有多少個連續子陣列的總和為target Number</p>

<h2>解題思路</h2>

<p>這一題的解題思路是使用前綴和，我們可以先建立一個前綴和的map，然後再遍歷陣列的時候，計算當前的前綴和，然後在map中查找是否存在前綴和減去target的值，如果存在，則將count加上map中對應的值，最後返回count</p>

<h2>程式碼</h2>

```javascript
function subarraySum(nums, k) {
    let prefixSumCount = new Map();
    prefixSumCount.set(0, 1);

    let prefixSum = 0;
    let count = 0;

    for (let num of nums) {
        prefixSum += num;

        if (prefixSumCount.has(prefixSum - k)) {
            count += prefixSumCount.get(prefixSum - k);
        }

        prefixSumCount.set(prefixSum, (prefixSumCount.get(prefixSum) || 0) + 1);
    }

    return count;
}
```
# 程式碼說明

- 我們先建立一個前綴和的map，並且將0設為1，因為當前綴和為0時，表示從頭到尾的總和為0
- 我們再遍歷陣列的時候，計算當前的前綴和，然後在map中查找是否存在前綴和減去target的值，如果存在，則將count加上map中對應的值
- 最後返回count

# 範例說明
<h2>範例1</h2>
<p>1. 輸入: nums = [1, -1, 0, 0], k = 0</p>
<p>2. 輸出: 6</p>
<p>3. 數組:[1, -1] , [0] , [1, -1, 0] , [0] , [0, 0] , [1, -1, 0, 0]</p>

```
| i  | nums[i] | prefixSum (当前前缀和) | prefixSum - k (期望的前缀和)     | prefixSumCount       | prefixSum - k 在 prefixSumCount 中的值 | count |
|----|---------|------------------------|------------------------------|----------------------|--------------------------------------|-------|
| 0  | 1       | 1                      | 1                            | `{0: 1, 1: 1}`       | `prefixSumCount.get(1) → 1`          | 0     |
| 1  | -1      | 0                      | 0                            | `{0: 2, 1: 1}`       | `prefixSumCount.get(0) → 2`          | 0+1=1     |
| 2  | 0       | 0                      | 0                            | `{0: 3, 1: 1}`       | `prefixSumCount.get(0) → 3`          | 1+2=3     |
| 3  | 0       | 0                      | 0                            | `{0: 4, 1: 1}`       | `prefixSumCount.get(0) → 4`          | 3+3=6     |
```

<h2>範例2</h2>
<p>1. 輸入: nums = [1, 2, 3], k = 3</p>
<p>2. 輸出: 2</p>
<p>3. 解釋: 有兩個連續子陣列的總和為3，分別是[1, 2]和[3]</p>

```
| i  | nums[i] | prefixSum (当前前缀和) | prefixSum - k (期望的前缀和) | prefixSumCount       | prefixSum - k 在 prefixSumCount 中的值 | count |
|----|---------|------------------------|------------------------------|----------------------|--------------------------------------|-------|
| 0  | 1       | 1                      | 1                            | `{0: 1, 1: 1}`       | `prefixSumCount.get(1) → 1`         | 0     |
| 1  | 2       | 3                      | 0                            | `{0: 1, 1: 1, 3: 1}` | `prefixSumCount.get(0) → 1`         | 0+1=1     |
| 2  | 3       | 6                      | 3                            | `{0: 1, 1: 1, 3: 1, 6: 1}` | `prefixSumCount.get(3) → 1`         | 1+1=2     |
```


<h2>時間複雜度</h2>

<p>這一題的時間複雜度是O(n)，因為我們只遍歷了一次陣列</p>

<h2>空間複雜度</h2>

<p>這一題的空間複雜度是O(n)，因為我們建立了一個map</p>

<h2>解題答案</h2>
