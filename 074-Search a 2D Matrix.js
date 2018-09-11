// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.
// The first integer of each row is greater than the last integer of the previous row.
// Example 1:

// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 3
// Output: true
// Example 2:

// Input:
// matrix = [
//   [1,   3,  5,  7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 50]
// ]
// target = 13
// Output: false

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  if (matrix.length === 0) {
    return false;
  }
  let row = matrix.length, col = matrix[0].length, start = 0, end = row * col - 1;
  while (start <= end) {
    let mid = (start + end) >> 1;
    if (matrix[mid / col | 0][mid % col] < target) {
      start = mid + 1;
    } else if (matrix[mid / col | 0][mid % col] > target) {
      end = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};
