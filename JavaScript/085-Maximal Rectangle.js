// Given a 2D binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

// Example:

// Input:
// [
//   ["1","0","1","0","0"],
//   ["1","0","1","1","1"],
//   ["1","1","1","1","1"],
//   ["1","0","0","1","0"]
// ]
// Output: 6

/**
 * @param {character[][]} matrix
 * @return {number}
 */
function maximalRectangle(matrix) {
  if (matrix.length === 0) {
    return 0
  }
  let area = 0
  let m = matrix.length
  let n = matrix[0].length
  let heights = []
  for (let i = 0; i < n; i++) {
    heights.push(0)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === '1') {
        heights[j]++
      } else {
        heights[j] = 0
      }
    }
    area = Math.max(area, largestRectangleArea(heights))
  }
  return area

  function largestRectangleArea(heights) {
    let stack = []
    let maxArea = 0
    let i = 0
    heights.push(0)
    while(i < heights.length) {
      if (stack.length === 0 || heights[stack[stack.length - 1]] < heights[i]) {
        stack.push(i++)
      } else {
        let index = stack.pop()
        maxArea = Math.max(maxArea, heights[index] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1))
      }
    }
    return maxArea
  }
}
