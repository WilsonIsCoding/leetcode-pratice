/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const length = board.length;
    const width = board[0].length;
    const backtrack = (i, j, currentWordCount) => {
        if (currentWordCount == word.length) return true;
        if (i < 0 || i >= length || j < 0 || j >= width || board[i][j] !== word.charAt(currentWordCount)) return false;
        const currentWordIndex = board[i][j];
        board[i][j] = '\0';
        const result = backtrack(i + 1, j, currentWordCount + 1) ||
            backtrack(i - 1, j, currentWordCount + 1) ||
            backtrack(i, j + 1, currentWordCount + 1) ||
            backtrack(i, j - 1, currentWordCount + 1)
        board[i][j] = currentWordIndex;
        return result
    }
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < width; j++) {
            if (backtrack(i, j, 0)) {
                return true
            }
        }
    }
    return false
};