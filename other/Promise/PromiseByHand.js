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
      newPromise = new Promise((resolve, reject) => {
        let x = onFulfilled(this.value);
        resolve(x);
      });
    }
  }
}
var promise = new MyPromise((resolve, reject) => {
  setTimeout(function () {
    resolve("test MyPromise resolve");
  }, 100);
});

promise.then(
  function (value) {
    console.log("success:", value);
  },
  function (reason) {
    console.log("failed:", reason);
  }
);
