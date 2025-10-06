/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {
    const m = heights.length,
      n = heights[0].length;
    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];
    const dfs = (startCells) => {
      const visited = Array.from({ length: m }, () => Array(n).fill(false));
      const stack = [...startCells];
      while (stack.length) {
        const [i, j] = stack.pop();
        if (visited[i][j]) continue;
        visited[i][j] = true;
        for (let [dx, dy] of directions) {
          const x = i + dx,
            y = j + dy;
          if (
            x >= 0 &&
            x < m &&
            y >= 0 &&
            y < n &&
            !visited[x][y] &&
            heights[x][y] >= heights[i][j]
          ) {
            stack.push([x, y]);
          }
        }
      }
      return visited;
    };
    const pacificStarts = [];
    for (let i = 0; i < n; i++) pacificStarts.push([0, i]);
    for (let i = 0; i < m; i++) pacificStarts.push([i, 0]);
    const atlanticStarts = [];
    for (let i = 0; i < n; i++) atlanticStarts.push([m - 1, i]);
    for (let i = 0; i < m; i++) atlanticStarts.push([i, n - 1]);
    let pacificStartsVisited = dfs(pacificStarts);
    let atlanticStartsVisited = dfs(atlanticStarts);
    let result = [];
  
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (pacificStartsVisited[i][j] && atlanticStartsVisited[i][j]) {
          result.push([i, j]);
        }
      }
    }
    return result;
  };
  heights = [[5,5,5,5],[4,4,4,4],[5,5,5,5]]
  console.log(pacificAtlantic(heights));
  