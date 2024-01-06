<h1>面試官們！這是一個手寫Promise，請接招！</h1>
<h3>為什麼要有Promise語法</h3>
<p>Promise語法的出現簡單來說是為了解決function參數彼此相依賴所產生的波動拳程式碼，什麼意思呢？</p>
<p>可以把它想像成，今天如果我有一個functionA跟functionB，而我functionB需要的參數需要functionA的結果，那我們可能會有以下的寫法</p>

```bash
getDataA((a)=>{
    getDataB(a,(b)=>{
        console.log(b)
    })
})
```

<p>像是上面的這層結構，我們就要先等getDataB先執行，然後才可以執行getDataA，可是這樣只有兩層，如果今天資料的相依性可能更大了，那這個function只會看起來越來越龐大，所以Promise語法就因此而誕生</p>

<p>在手寫出一個Promise一個以前，我們可以先看一下一個Promise的結構組成。</p>

```bash
// 創建一個Promise對象
const myPromise = new Promise((resolve, reject) => {
  // 模擬異步操作
  setTimeout(() => {
    const success = true;
    if (success) {
      // 成功時調用resolve
      resolve("操作成功");
    } else {
      // 失敗時調用reject
      reject("操作失敗");
    }
  }, 2000);
});

// 使用Promise
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

<p>我們在寫Promise有以下幾個重點</p>

<ul>
<li>最一開始我們在還沒有執行程式碼時，Promise會有狀態來表示程式碼的運作狀態 包含 Pending(尚未執行)、Fulfill(執行成功)、Reject(執行失敗)，且狀態的變化是單向的，從Pending變成Fulfill或Reject後就不會再變動了</li>
<li>Promise接受一個function的傳入，以下簡稱executive，並且這個executive內有兩個type為function的參數，而這個executive裡面則會放入我們要運行的程式碼(包含同步與非同步，但通常是非同步)，而我們則會在運作成功時，運行resolve的這個function ，失敗了則是reject。</li>
<li>因為Promise是鏈式結構，也就是說在第一輪function運作完後，我們可能會拿第一輪結束的value去進行下一輪的運算，所以then裡面應該會在包含一個Promise，並且拿取第一輪運算過後的value</li>
</ul>

<p>而根據上面這些推測，我們應該可以推敲出一個簡易版Promise(先做出不能用非同步的簡單版)</p>

```bash
class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = "";
    this.reason = "";
    try {
      executor(this.resolve.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(value) {
    if (this.state === 'pending') {
      this.value = value;
      this.state = 'fulfilled';
    }
  }
  reject(reason) {
    if (this.state === 'pending') {
      this.reason = reason;
      this.state = 'rejected';
    }
  }
}
```
<p>首先這個Promise接受一個executive，並且透過執行這個executive他能夠去變更狀態(state)，也可以變更value</p>

<p>我們可以用程式碼來測試看看</p>

```bash
const p1=new MyPromise((resolve,reject)=>{
 resolve('ok!')
})
//這樣這個promise內部的state跟value應該會個別變成fulfill跟ok!
```
<p>這樣我們就完成了這個Promise的 ！！ 1/3吧xDD</p>

<p>因為Promise還有一個重要的特型，那就是接受then去接受下一個Promise的串連<p>
<p>為了讓Promise能夠實作then方法，那我們就需要先保留第一次執行的結果</p>

<h3>支持異步！</h3>

```bash
//我們在construct裡面新增call Back Stack

this.onFulfilledCallbacks = []
this.onRejectedCallbacks = []
```

<h3>新增then方法</h3>

```bash
then (onFulfilled, onRejected) {
    if (this.status == 'fulfilled') {
        onFulfilled(this.value)
    }

    if (this.status == 'rejected') {
        onRejected(this.reason)
    }
    // 如果在第一次的executive後,state還是pending的話，就先儲存運算結果，並開始執行then裡面的function，直到state經過改動後才結束！
    if (this.status == 'pending') {
    this.onFulfilledCallbacks.push(function () {
        onFulfilled(this.value)
    })
    this.onRejectedCallbacks.push(function () {
        onRejected(this.reason)
    })
  }
}

```
