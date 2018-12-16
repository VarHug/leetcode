// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// For example,
// Given the following matrix:

// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// You should return [1,2,3,6,9,8,7,4,5]

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function spiralOrder(matrix) {
    if (matrix.length === 0 || !matrix) {
        return [];
    }
    let m = matrix.length,
        n = matrix[0].length;
    let res = [],
        total = m * n,
        row = 0,
        column = 0;
    while (res.length !== total) {
        for (; column < n && matrix[row][column] !== '.'; column++) {
            res.push(matrix[row][column]);
            matrix[row][column] = '.';
        }
        column--;
        row++;
        for (; row < m && matrix[row][column] !== '.'; row++) {
            res.push(matrix[row][column]);
            matrix[row][column] = '.';
        }
        row--;
        column--;
        for (; column >= 0 && matrix[row][column] !== '.'; column--) {
            res.push(matrix[row][column]);
            matrix[row][column] = '.';
        }
        column++;
        row--;
        for (; row >= 0 && matrix[row][column] !== '.'; row--) {
            res.push(matrix[row][column]);
            matrix[row][column] = '.';
        }
        row++;
        column++;
    }
    return res;
}