// Given an integer, write a function to determine if it is a power of three.

// Example 1:

// Input: 27
// Output: true
// Example 2:

// Input: 0
// Output: false
// Example 3:

// Input: 9
// Output: true
// Example 4:

// Input: 45
// Output: false

/**
 * 利用范围内3的最大n次幂结果约数
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
  return n > 0 && (1162261467 % n == 0);
}

/**
 * 利用对数
 * @param {number} n
 * @return {boolean}
 */
function isPowerOfThree(n) {
  let root = Math.log10(n) / Math.log10(3);
  return Number.parseInt(root) === root;
}
