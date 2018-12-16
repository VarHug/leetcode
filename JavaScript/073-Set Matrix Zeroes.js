// Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

// Example 1:

// Input: 
// [
//   [1,1,1],
//   [1,0,1],
//   [1,1,1]
// ]
// Output: 
// [
//   [1,0,1],
//   [0,0,0],
//   [1,0,1]
// ]
// Example 2:

// Input: 
// [
//   [0,1,2,0],
//   [3,4,5,2],
//   [1,3,1,5]
// ]
// Output: 
// [
//   [0,0,0,0],
//   [0,4,5,0],
//   [0,3,1,0]
// ]

// Follow up:

// A straight forward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 直观法:AC,88ms
 */
function setZeroes(matrix) {
  let row = [],
      col = [],
      m = matrix.length,
      n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        let rowIndex = row.findIndex((element) => {
          return element === i;
        });
        if (rowIndex === -1) {
          row.push(i);
        }
        let colIndex = col.findIndex((element) => {
          return element === j;
        });
        if (colIndex === -1) {
          col.push(j);
        }
      }
    }
  }
  row.forEach((i) => {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  });
  col.forEach((j) => {
    for (let i = 0; i < m; i++) {
      matrix[i][j] = 0;
    }
  });
}

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * 平移法(类比围棋算目):AC,84ms
 */
function setZeroes(matrix) {
  let setFirstCol = false;
      m = matrix.length,
      n = matrix[0].length;
  for (let i = 0; i < m; i++) {
    if (matrix[i][0] === 0) {
      setFirstCol = true;
    }
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0; // left
        matrix[0][j] = 0; // top
      }
    }
  }
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 1; j--) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
    if (setFirstCol) {
      matrix[i][0] = 0;
    }
  }
}

var matrix = [
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
];
