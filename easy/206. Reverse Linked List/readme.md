# 206. Reverse Linked List

## 題目

<p>給定一個單向鏈結串列，請反轉鏈結串列。</p>
<p>這題交換的重點在於將「指向下一個 head.next」改成指向「前一個節點 prev」：</p>

```python
next_node = current.next
current.next = prev
prev = current
current = next_node
```

<p>有三個指針：</p>

<ul>
<li>head：指向自己</li>
<li>head.next：指向下一個</li>
<li>prev：指向前一個</li>
</ul>
<p>我們需要將三個指針交換成：</p>

<ul>
<li>head：指向自己 → 指向下一個（head.next）</li>
<li>head.next：指向前一個（prev）</li>
<li>prev：指向前一個 → 指向自己（head）</li>
</ul>

<h3>next_node = current.next</h3>
<p>紀錄下一個節點的值，避免反轉後找不到下一個節點。</p>

<h3>current.next = prev</h3>
<p>將當前節點的 next 指向前一個節點，而這時候反轉的節點會與原節點斷開，但因為我們有透過next_node 紀錄下一個節點的值，所以不會找不到下一個節點，而這時候current是頭節點。</p>

<h3>prev = current</h3>
<p>因為我們已經有成功將第二個節點的指向第一個節點，所以我們可以將prev設為current，這樣prev會跟current一起，就會變成第一個節點。</p>

<h3>current = next_node</h3>
<p>將current指標指向下一個節點，這樣下一個節點就會變成current節點。</p>

<p>這樣就可以反轉鏈結串列了。</p>

參考：https://ithelp.ithome.com.tw/m/articles/10271920
