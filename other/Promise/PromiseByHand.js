const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
class MyPromise {
  constructor(executor) {
    this.state = PENDING;
    this.value = "";
    this.reason = "";
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    try {
      executor(this.resolve.bind(this));
    } catch (error) {
      this.reject(error);
    }
  }
  resolve(value) {
    if (this.state === PENDING) {
      this.value = value;
      this.state = FULFILLED;
      this.onFulfilledCallbacks.forEach((fn) => fn());
    }
  }
  reject(reason) {
    if (this.state === PENDING) {
      this.reason = reason;
      this.state = REJECTED;
      this.onRejectedCallbacks.forEach((fn) => fn());
    }
  }
  then(onFulfilled, onRejected) {
    let newPromise;
    if (this.state == PENDING) {
      newPromise = new MyPromise((resolve, reject) => {
        this.onFulfilledCallbacks.push(() => {
          let x = onFulfilled(this.value);
          resolve(x);
        });
        this.onRejectedCallbacks.push(() => {
          let x = onRejected(this.value);
          reject(x);
        });
      });
    }
    if (this.state == FULFILLED) {
      newPromise = new MyPromise((resolve, reject) => {
        let x = onFulfilled(this.value);
        resolve(x);
      });
    }
    if (this.state == REJECTED) {
      newPromise = new MyPromise((resolve, reject) => {
        let x = onRejected(this.value);
        reject(x);
      });
    }
    return newPromise;
  }
}
// var promise = new MyPromise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("test MyPromise resolve");
//   }, 100);
// });

// promise.then(
//   function (value) {
//     console.log("success:", value);
//   },
//   function (reason) {
//     console.log("failed:", reason);
//   }
// );
const p1 = new MyPromise((resolve, reject) => {
  resolve('ok');
});

p1.then((res) => {
  console.log('res1', res);
  return 'ok2';
})

// 异步resovle
const p2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('ok')
  }, 1000);
});

p2.then((res) => {
  console.log('res1', res);
  return 'ok2';
})