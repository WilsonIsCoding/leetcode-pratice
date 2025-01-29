<h1>hash表解法</h1>
<p>hash表解法，使用set去塞入已經紀錄的數值，每經過一個數字，就把那個linkedList給
塞進那個set，並進行檢驗，當今天有檢測到同樣的一個linked List時，代表回到原本的回權裡面，也就要回傳true</p>
<p>時間複雜度： O(n)</p>
<p>空間複雜度： O(n)</p>
<br/>
<h1>Floyd's Cycle Detection Algorithm（龜兔賽跑演算法）</h1>
<p>我們先做一個假設，有一個陣列長得像是下面這樣，並會在9時，被指向4</p>
<p>[1,2,3,4,5,6,7,8,<b>9</b>,10]</p>
<p>在第一輪</p>
<p>first：3 , second：1</p>
<p>在第二輪</p>
<p>first：5 , second：2</p>
<p>在第三輪</p>
<p>first：7 , second：3</p>
<p>在第三輪</p>
<p>first：9 , second：4</p>
<p>在第四輪</p>
<p>first：5 , second：5</p>
<p>回傳true</p>
<p>從這個邏輯可以看到，因為快指針會比曼指針還要更快進入到閉環裡面，他也會最終會從後面追趕上慢指針。</p>
<p>時間複雜度： O(n)</p>
<p>空間複雜度： O(1)</p>
