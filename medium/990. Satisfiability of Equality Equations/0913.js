/**
 * @param {string[]} equations
 * @return {boolean}
 */
var equationsPossible = function (equations) {
  equations = equations.sort((x, y) => {
    const hasBangX = x.includes("!");
    const hasBangY = y.includes("!");

    if (hasBangX && !hasBangY) return 1; // x 有 !, y 沒有 → x 在前
    if (!hasBangX && hasBangY) return -1; // y 有 !, x 沒有 → y 在前
    return 0; // 兩個都一樣 → 保持順序
  });
  let connectionMap = new Map();
  for (const equation of equations) {
    if (equation[1] === "!") {
      console.log(connectionMap);
      if (equation[0] === equation[3]) return false;
      const connectTargets = connectionMap.get(equation[0]) || [];
      if (connectTargets.length === 0) continue;
      if (
        connectTargets.indexOf(equation[0]) === -1 &&
        connectionMap.get(equation[3])
      )
        return false;
    } else {
      let equation0 = connectionMap.get(equation[0]) || [];
      let equation3 = connectionMap.get(equation[3]) || [];
      equation0.push(equation[3]);
      equation3.push(equation[0]);
      connectionMap.set(equation[0], equation0);
      connectionMap.set(equation[3], equation3);
    }
  }
  return true;
};
let equations = ["c==c", "f!=a", "f==b", "b==c"];
// let equations = ["a==b", "b!=a"];

// Output: false
console.log(equationsPossible(equations));
