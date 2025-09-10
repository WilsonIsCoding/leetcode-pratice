/**
 * @param {number} n
 * @param {number[][]} languages
 * @param {number[][]} friendships
 * @return {number}
 */
var minimumTeachings = function (n, languages, friendships) {
  let friendshipsCannotSolves = [];
  for (let i = 0; i < friendships.length; i++) {
    let a = friendships[i][0] - 1;
    let b = friendships[i][1] - 1;
    const hasIntersection = languages[a].some((item) =>
      languages[b].includes(item)
    );
    if (!hasIntersection) {
      friendshipsCannotSolves.push(friendships[i]);
    }
  }
  if (friendshipsCannotSolves.length === 0) return 0;
  let studentSet = new Set();
  for (const friendshipsCannotSolve of friendshipsCannotSolves) {
    studentSet.add(friendshipsCannotSolve[0]);
    studentSet.add(friendshipsCannotSolve[1]);
  }
  let languagesMap = new Map();
  for (const item of studentSet.values()) {
    for (let i = 0; i < languages[item - 1].length; i++) {
      languagesMap.set(
        languages[item - 1][i],
        (languagesMap.get(languages[item - 1][i]) || 0) + 1
      );
    }
  }
  let teach = studentSet.size;
  for (const value of languagesMap.values()) {
    teach = Math.min(teach, studentSet.size - value);
  }
  return teach;
};
let n = 3;
let languages = [[2], [1, 3], [1, 2], [3]];
let friendships = [
  [1, 4],
  [1, 2],
  [3, 4],
  [2, 3],
];
console.log(minimumTeachings(n, languages, friendships));
