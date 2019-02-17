// Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a2 + b2 = c.

// Example 1:

// Input: 5
// Output: True
// Explanation: 1 * 1 + 2 * 2 = 5
 

// Example 2:

// Input: 3
// Output: False

/**
 * @param {number} c
 * @return {boolean}
 */
function judgeSquareSum(c) {
  let i = 0
  let j = Math.sqrt(c) | 0
  while (i <= j) {
    let sos = i * i + j * j
    if (sos === c) {
      return true
    } else if (sos < c) {
      i++
    } else {
      j--
    }
  }
  return false
}
