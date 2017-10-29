// Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.


// A partially filled sudoku which is valid.

// Note:
// A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
//arr
function isValidSudoku(board) {
    let len = board.length;
    let mapRow = new Array(len),
        mapColumn = new Array(len),
        mapSubgird = new Array(len);
    for(let i = 0; i < len; i++) {
        mapRow[i] = new Array(len).fill(0);
        mapColumn[i] = new Array(len).fill(0);
        mapSubgird[i] = new Array(len).fill(0);
    }
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len; j++) {
            if(board[i][j] !== '.') {
                let num = board[i][j] - '0' - 1,
                    n = (i / 3 | 0) * 3 + (j / 3 | 0);
                if(mapRow[i][num] || mapColumn[j][num] || mapSubgird[n][num]) return false;
                mapRow[i][num] = mapColumn[j][num] = mapSubgird[n][num] = 1;
            }
        }
    }
    return true;
}
//map
function isValidSudoku(board) {
    let mapRow = {},
        mapColumn = {},
        mapSubgird = {};
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board.length; j++) {
            if(board[i][j] !== '.') {
                if(mapRow[board[i][j]]) return false;
                mapRow[board[i][j]] = true;
            }
            if(board[j][i] !== '.') {
                if(mapColumn[j][i]) return false;
                mapColumn[j][i] = true;
            }
            let row = (i / 3 | 0) * 3 + (j / 3 | 0);
            let column = i % 3 * 3 + j % 3;
            if(board[row][column] !== '.') {
                if(mapSubgird[board[row][column]]) return false;
                mapSubgird[row][column] = true;
            }
        }
    }
}