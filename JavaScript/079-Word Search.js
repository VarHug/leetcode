// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

// Example:

// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  function letterExist(board, i, j, word, len) {
    if (len === word.length) {
      return true;
    }
    if (i < 0 || j < 0 || i === board.length || j === board[i].length) {
      return false;
    }
    if (board[i][j] !== word[len]) {
      return false;
    }
    let temp = board[i][j];
    board[i][j] = '';
    let flag = letterExist(board, i, j + 1, word, len + 1) ||
              letterExist(board, i, j - 1, word, len + 1) ||
              letterExist(board, i + 1, j, word, len + 1) ||
              letterExist(board, i - 1, j, word, len + 1);
    board[i][j] = temp;
    return flag;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (letterExist(board, i, j, word, 0)) {
        return true;
      }
    }
  }
  return false;
};
