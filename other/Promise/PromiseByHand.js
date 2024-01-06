const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    this.state = PENDING;
    this.onFulfilledCallBacks = [];
    this.onRejectedCallBacks = [];
    this.value = "";
    this.reason = "";

    try {
      executor(this._resolve.bind(this), this._reject.bind(this));
    } catch (e) {
      this._reject(e);
    }
  }

  _resolve(value) {
    if (this.status == PENDING) {
      this.status = FULFILLED;
      this.value = value;
      this.onFulfilledCallBacks.forEach((fn) => fn());
    }
  }

  _reject(reason) {
    if (this.status == PENDING) {
      this.status = REJECTED;
      this.value = reason;
      this.onRejectedCallBacks.forEach((fn) => fn());
    }
  }

  then(onFulfilled, onRejected) {

    if (this.status === FULFILLED) {
      console.log('1');
      setTimeout(() => {
        onFulfilled(this.value);
      });
    }
    if (this.status === REJECTED) {
      console.log('2');
      setTimeout(() => {
        onRejected(this.reason);
      });
    }
    if (this.status === PENDING) {
      console.log('3');
      this.onFulfilledCallbacks.push(() => {
        setTimeout(() => {
          onFulfilled(this.value);
        });
      });
      this.onRejectedCallbacks.push(() => {
        setTimeout(() => {
          onRejected(this.reason);
        });
      });
      return this;
    }
  }
}

const p1 = new MyPromise((resolve, reject) => {
  console.log("test");
  resolve("ok");
});

p1.then((res) => {
  console.log("res1", res);
  return "ok2";
});

// class MyPromise {
//   constructor(executor) {
//     this.state = 'pending';
//     this.value = "";
//     this.reason = "";
//     try {
//       executor(this.resolve.bind(this));
//     } catch (error) {
//       this.reject(error);
//     }
//   }
//   resolve(value) {
//     if (this.state === 'pending') {
//       this.value = value;
//       this.state = 'fulfilled';
//     }
//   }
//   reject(reason) {
//     if (this.state === 'pending') {
//       this.reason = reason;
//       this.state = 'rejected';
//     }
//   }
// }
// const myPromise = new MyPromise((resolve) => {
//   resolve("Resolved value");
// });