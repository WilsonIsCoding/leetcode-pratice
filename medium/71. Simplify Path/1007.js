/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let result = [];
  path = path.split("/");
  for (const str of path) {
    if (!str.length) continue;
    if (str === "..") {
      result.pop();
      continue;
    } else if (str === ".") {
      continue;
    }
    result.push(str);
  }
  return `/${result.join("/")}`;
};
let path = "/home//foo/";
console.log(simplifyPath(path));
