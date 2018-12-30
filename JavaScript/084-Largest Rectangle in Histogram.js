// Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.
/**
 * @param {number[]} heights
 * @return {number}
 */
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
