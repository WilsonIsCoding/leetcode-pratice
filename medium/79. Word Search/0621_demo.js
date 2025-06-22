/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
//Given an m x n grid of characters board and a string word, return true if word exists in the grid.

//The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

//Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
//Output: true

var exist = function (board, word) {
  const length = board.length; //長方形的高
  const width = board[0].length; //長方形的寬
  const backtrack = (i, j, currentWordCount) => {
    if (currentWordCount == word.length) return true;
    //如果超出邊界，或者當前字符不匹配，則返回false
    if (i < 0 || i >= length || j < 0 || j >= width || board[i][j] !== word.charAt(currentWordCount)) return false;
    const currentWordIndex = board[i][j];
    board[i][j] = '\0';
    const result = backtrack(i + 1, j, currentWordCount + 1) ||
    backtrack(i - 1, j, currentWordCount + 1) ||
    backtrack(i, j + 1, currentWordCount + 1) ||
    backtrack(i, j - 1, currentWordCount + 1)
    board[i][j] = currentWordIndex;//
    return result;
  };
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < width; j++) {
      if (backtrack(i, j, 0)) {
        return true;
      }
    }
  }
  return false;
};

//[1,  2,   3, 4,  5]
//[6,   7,  8, 9,  10]
//[11, 12, 13, 14, 15]
//input:8->7->12->13