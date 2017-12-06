// The n-queens puzzle is the problem of placing n queens on an n×n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.

// For example,
// There exist two distinct solutions to the 4-queens puzzle:

[
 [".Q..",  // Solution 1
  "...Q",
  "Q...",
  "..Q."],

 ["..Q.",  // Solution 2
  "Q...",
  "...Q",
  ".Q.."]
]

/**
 * @param {number} n
 * @return {string[][]}
 */
function solveNQueens(n) {
    let res = [];
    let resunit = new Array(n);
    for(let i = 0; i < n; i++) {
        resunit[i] = new Array(n).fill('.');
    } 
    let row = new Array(n).fill(1);
    let left = new Array(n + n - 1).fill(1);
    let right = new Array(n + n - 1).fill(1);

    backTrace(res, resunit, row, left, right, 0);

    return res;

    function backTrace(res, resunit, row, left, right, times) {
        if(times === n) {
            let arr = [];
            for(let i = 0; i < n; i++) {
                arr[i] = resunit[i].join('');
            }
            res.push(arr);
        }
        for(let i = times; i < n; i++) {
            for(let j = 0; j < n; j++) {
                if(row[j] && left[i + j] && right[n - 1 - i + j]) {
                    resunit[i][j] = 'Q';
                    row[j] = 0;
                    left[i + j] = 0;
                    right[n - 1 - i + j] = 0;
                    backTrace(res, resunit, row, left, right, ++times);
                    --times;
                    resunit[i][j] = '.';
                    row[j] = 1;
                    left[i + j] = 1;
                    right[n - 1 - i + j] = 1;
                }
            }
            return;
        }
        return;
    }
}