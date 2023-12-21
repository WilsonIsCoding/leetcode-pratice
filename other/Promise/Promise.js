const myName = function () {
  return new Promise(function (resolve, reject) {
    if ("1" !== "2") {
      reject("wrong");
    } else {
      resolve("true");
    }
  });
};

myName()
  .then((res) => console.log('成功：'+ res))
  .catch((error) => console.log('失敗：' + error));
