const moveToFront = (s) => {
  s = s.split("");
  let left = 0;
  let right = s.length;
  while (left < right) {
    while (s[left] == 0) {
      left++;
    }
    if (s[right] == 0) {
      let temp = s[left];
      s[left] = s[right];
      s[right] = temp;
    }
    right--;
  }
  return s.join('');
};
s = "0312345013021";

console.log(moveToFront(s));
