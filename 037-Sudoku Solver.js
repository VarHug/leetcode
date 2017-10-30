// Write a program to solve a Sudoku puzzle by filling the empty cells.

// Empty cells are indicated by the character '.'.

// You may assume that there will be only one unique solution.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

function solveSudoku(board) {
    backTrace(board);

    function backTrace(board) {
        for(let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++) {
                if(board[i][j] === '.') {
                    for(let num = 1; num <= 9; num++) {
                        if(isValid(board, i, j, num + '')) {
                            board[i][j] = num + '';
                            
                            if(backTrace(board)) {
                                return true;
                            } else {
                                board[i][j] = '.';
                            }
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
    
    function isValid(board, row, col, num) {
        for(let i = 0; i < 9; i++) {
            if(board[i][col] !== '.' && board[i][col] === num) {
                return false;
            }
            if(board[row][i] !== '.' && board[row][i] === num) {
                return false;
            }
            if(board[3 * (row / 3 | 0) + (i / 3 | 0)][3 * (col / 3 | 0) + i % 3] !== '.' && 
            board[3 * (row / 3 | 0) + (i / 3 | 0)][3 * (col / 3 | 0) + i % 3] === num) {
                return false; 
            } 
        }
        return true;
    }
}

board = [
    [".",".","9","7","4","8",".",".","."],
    ["7",".",".",".",".",".",".",".","."],
    [".","2",".","1",".","9",".",".","."],
    [".",".","7",".",".",".","2","4","."],
    [".","6","4",".","1",".","5","9","."],
    [".","9","8",".",".",".","3",".","."],
    [".",".",".","8",".","3",".","2","."],
    [".",".",".",".",".",".",".",".","6"],
    [".",".",".","2","7","5","9",".","."]
];