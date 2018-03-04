// Given an integer n, generate a square matrix filled with elements from 1 to n^2 in spiral order.

// For example,
// Given n = 3,

// You should return the following matrix:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

/**
 * @param {number} n
 * @return {number[][]}
 */
function generateMatrix(n) {
    let res = [],
        tot = n * n,
        num = 0,
        row = 0,
        col = 0;
    for (let i = 0; i < n; i++) {
        res[i] = new Array(n).fill('*');
    }
    while (num < tot) {
        for (; col < n && res[row][col] === '*'; col++) {
            res[row][col] = ++num;
        }
        col--;
        row++;
        for (; row < n && res[row][col] === '*'; row++) {
            res[row][col] = ++num;
        }
        row--;
        col--;
        for (; col >= 0 && res[row][col] === '*'; col--) {
            res[row][col] = ++num;
        }
        col++;
        row--;
        for (; row >= 0 && res[row][col] === '*'; row--) {
            res[row][col] = ++num;
        }
        row++;
        col++;
    }
    return res;
}