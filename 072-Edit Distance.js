// Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

// You have the following 3 operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character

// Example 1:

// Input: word1 = "horse", word2 = "ros"
// Output: 3
// Explanation: 
// horse -> rorse (replace 'h' with 'r')
// rorse -> rose (remove 'r')
// rose -> ros (remove 'e')

// Example 2:

// Input: word1 = "intention", word2 = "execution"
// Output: 5
// Explanation: 
// intention -> inention (remove 't')
// inention -> enention (replace 'i' with 'e')
// enention -> exention (replace 'n' with 'x')
// exention -> exection (replace 'n' with 'c')
// exection -> execution (insert 'u')

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
  let m = word1.length,
      n = word2.length,
      dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1);
  }
  dp[0][0] = 0;
  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 1; j <= n; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i -1][j - 1] + 1, dp[i - 1][j] + 1, dp[i][j - 1] + 1)
      }
    }
  }
  return dp[m][n]
};

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance2 = function(word1, word2) {
  let m = word1.length,
      n = word2.length,
      cur = new Array(m + 1).fill(0);
  for (let i = 1; i <= m; i++) {
    cur[i] = i;
  }
  for (let j = 1; j <= n; j++) {
    let pre = cur[0];
    cur[0] = j;
    for (let i = 1; i <= m; i++) {
      let temp = cur[i];  
      if (word1[i - 1] === word2[j - 1]) {
        cur[i] = pre;
      } else {
        cur[i] = Math.min(pre + 1, cur[i] + 1, cur[i - 1] + 1);  
        // cur[i]:dp[i][j - 1]; cur[i - 1]: dp[i - 1][j]
      }
      pre = temp;  // pre:dp[i - 1][j - 1]
    }
  }
  return cur[m];
};
