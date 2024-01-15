<h1>two pointer && slide window</h1>
<P>想到這邊順便來整理一下two pointer跟slide window的差別。</P>
<h3>Two Pointer (雙指針)</h3>
<ul>
<li>
<b>
定義</b>： 這種技巧涉及到使用兩個指針，通常是在陣列或字串中，分別指向不同的位置，並且這兩個指針可以同時向前移動，或者一前一後。</li>
<li>
<b>用途</b>： 常用於尋找一對數字的和、檢測陣列中是否存在特定元素、或者找到滿足某條件的兩個元素之間的最短距離等情境。</b>
</li>
<h3>Sliding Window (滑動窗口)</h3>
<ul>
<li>
<b>
定義</b>： 這種技巧涉及到定義一個視窗（窗口），使用兩個指針來維護這個窗口，並且可以根據問題的需求調整窗口的大小，通常是向右滑動。</li>
<li>
<b>用途</b>： 常用於解決一些子串（子陣列）的最大值、最小值、或滿足特定條件的問題，例如找到最長的連續子陣列，該子陣列滿足某種條件。</b>
</li>

<h3>那來看看424這題</h3>
<p>這題題目總結來說，就是要去計算一個字串中，最長重複單一字符的長度，且接受有Ｋ個修改機會，最後要回傳number來說最長字串是多長</p>

<h2>slide window的重點在於找到window 移動的關鍵和處理，而在這題的Point就是在重複字+k小於總長度+1時</h2>
<p>為什麼會是這樣呢？我們舉個例子</p>
<p>假設測試資料是"AABAARG" k=1</p>
<p>當我們到AABAA時，下一個迴圈跑的字是R，此時maxNum是4，因為hashMap[A]=4，而k是1，那maxNum + k=「5」，而到了'R'時，因為不是A所以hashMap[A]一樣是4，且rightPointer - leftPointer + 1=「6」，滿足條件，就會觸發window slide的移動條件，往右邊移動，且將hashMap最左邊的數字減一，並移動leftPointer的位置。</p>
<p>當然，每一次回圈都會需要去計算longest來保證答案持續是動態吻合的
</p>