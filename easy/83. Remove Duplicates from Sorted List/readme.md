<h1>解題思路</h1>
<p>遍歷整個linked list，並且檢查當前節點的值是否與下一個節點的值相同，如果相同，則刪除下一個節點，並且將當前節點的next指針指向下一個節點的next指針，這樣就可以達到刪除重複節點的目的。</p>
<p>時間複雜度：O(n)</p>
<p>空間複雜度：O(1)</p>
<br/>

