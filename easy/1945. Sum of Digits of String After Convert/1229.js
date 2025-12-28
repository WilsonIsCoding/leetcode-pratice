/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function (s, k) {
  let count = "";
  for (let i = 0; i < s.length; i++) {
    count += String(s.charCodeAt(i) - 96);
  }
  for (let i = 0; i < k; i++) {
    count = String(count);
    let sum = 0;
    for (let j = 0; j < count.length; j++) {
      sum += Number(count[j]);
    }
    count = sum;
  }
  return count;
};

let s = "dbvmfhnttvr";
let k = 5;
console.log(getLucky(s, k));
