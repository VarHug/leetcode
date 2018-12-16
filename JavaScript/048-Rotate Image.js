// You are given an n x n 2D matrix representing an image.

// Rotate the image by 90 degrees (clockwise).

// Note:
// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Example 1:

// Given input matrix = 
// [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ],

// rotate the input matrix in-place such that it becomes:
// [
//   [7,4,1],
//   [8,5,2],
//   [9,6,3]
// ]
// Example 2:

// Given input matrix =
// [
//   [ 5, 1, 9,11],
//   [ 2, 4, 8,10],
//   [13, 3, 6, 7],
//   [15,14,12,16]
// ], 

// rotate the input matrix in-place such that it becomes:
// [
//   [15,13, 2, 5],
//   [14, 3, 4, 1],
//   [12, 6, 8, 9],
//   [16, 7,10,11]
// ]

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

//巧换
function rotate(matrix) {
    matrix.reverse();
    for(let i = 0, len = matrix.length; i < len; i++) {
        for(let j = i + 1; j < len; j++) {
            matrix[i][j] = [matrix[j][i], matrix[j][i] = matrix[i][j]][0];
        }
    }
}

//硬换
function rotate(matrix) {
    let size = matrix.length;
    for(let x = 0; x < size / 2; x++) {
        for(let y = x; y < size-1-x; y++) {            
            let temp = matrix[x][y];
            matrix[x][y] = matrix[size-y-1][x];
            matrix[size-y-1][x] = matrix[size-x-1][size-y-1];
            matrix[size-x-1][size-y-1] = matrix[y][size-x-1];
            matrix[y][size-x-1] = temp;
        }
    }
};