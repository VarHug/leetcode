// Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.

// Example 1:

// Input: 2
// Output: 1
// Explanation: 2 = 1 + 1, 1 × 1 = 1.
// Example 2:

// Input: 10
// Output: 36
// Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
// Note: You may assume that n is not less than 2 and not larger than 58.

/**
 * 解法1：动态规划
 * @param {number} n
 * @return {number}
 */
function integerBreak(n) {
  let dp = new Array(n + 1).fill(0)
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i - 1; j++) {
      dp[i] = Math.max(dp[i], Math.max(dp[i - j] * j, (i - j) * j))
    }
  }
  return dp[n]
}

/**
 * 解法2：数学思维
 * @param {number} n
 * @return {number}
 */
function integerBreak(n) {
  if (n === 2) {
    return 1
  } else if (n === 3) {
    return 2
  } else if (n % 3 === 0) {
    return 3 ** (n / 3)
  } else if (n % 3 === 1) {
    return 2 * 2 * (3 ** ((n - 4) / 3))
  } else {
    return 2 * (3 ** ((n - 2) / 3))
  }
}
