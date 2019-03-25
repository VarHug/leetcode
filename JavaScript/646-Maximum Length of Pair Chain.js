// You are given n pairs of numbers. In every pair, the first number is always smaller than the second number.

// Now, we define a pair (c, d) can follow another pair (a, b) if and only if b < c. Chain of pairs can be formed in this fashion.

// Given a set of pairs, find the length longest chain which can be formed. You needn't use up all the given pairs. You can select pairs in any order.

// Example 1:
// Input: [[1,2], [2,3], [3,4]]
// Output: 2
// Explanation: The longest chain is [1,2] -> [3,4]
// Note:
// The number of given pairs will be in the range [1, 1000].

/**
 * dp
 * @param {number[][]} pairs
 * @return {number}
 */
function findLongestChain(pairs) {
  if (!pairs || pairs.length === 0) {
    return 0
  }
  let len = pairs.length
  let dp = new Array(len).fill(1)
  pairs.sort((a, b) => a[0] - b[0])
  for (let i = 1; i < pairs.length; i++) {
    for (let j = 0; j < i; j++) {
      if (pairs[j][1] < pairs[i][0]) {
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
  }
  return Math.max(...dp)
}

/**
 * @param {number[][]} pairs
 * @return {number}
 */
function findLongestChain(pairs) {
  if (!pairs || pairs.length === 0) {
    return 0
  }
  pairs.sort((a, b) => a[1] - b[1])
  let pre = pairs[0][1]
  let count = 1
  for (let i = 1; i < pairs.length; i++) {
    if (pre < pairs[i][0]) {
      pre = pairs[i][1]
      count++
    }
  }
  return count
}