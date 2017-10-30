// Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.


// A partially filled sudoku which is valid.

// Note:
// A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.

/**
 * @param {character[][]} board
 * @return {boolean}
 */

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