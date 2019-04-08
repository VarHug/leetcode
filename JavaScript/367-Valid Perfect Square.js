// Given a positive integer num, write a function which returns True if num is a perfect square else False.

// Note: Do not use any built-in library function such as sqrt.

// Example 1:

// Input: 16
// Output: true
// Example 2:

// Input: 14
// Output: false

/**
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare(num) {
  let root = num ** 0.5;
  return Number.parseInt(root) === root;
}

/**
 * 利用数学等差数列
 * @param {number} num
 * @return {boolean}
 */
function isPerfectSquare(num) {
  let subNum = 1;
  while (num > 0) {
    num -= subNum;
    subNum += 2;
  }
  return num === 0;
}
