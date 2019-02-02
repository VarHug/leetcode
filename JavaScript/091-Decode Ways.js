// A message containing letters from A-Z is being encoded to numbers using the following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given a non-empty string containing only digits, determine the total number of ways to decode it.

// Example 1:

// Input: "12"
// Output: 2
// Explanation: It could be decoded as "AB" (1 2) or "L" (12).
// Example 2:

// Input: "226"
// Output: 3
// Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).

/**
 * @param {string} s
 * @return {number}
 */
function numDecodings(s) {
  let n = s.length
  if (n === 0) {
    return 0
  }
  let dp = new Array(n + 1).fill(0)
  dp[n] = 1
  dp[n - 1] = s.charAt(n - 1) === '0' ? 0 : 1
  for (let i = n - 2; i >= 0; i--) {
    if (s.charAt(i) === '0') {
      continue
    } else {
      dp[i] = s.substring(i, i + 2) <= '26' ? dp[i + 1] + dp[i + 2] : dp[i + 1]
    }
  }
  return dp[0]
}
