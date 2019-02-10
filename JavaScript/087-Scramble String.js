// Given a string s1, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively.

// Below is one possible representation of s1 = "great":

//     great
//    /    \
//   gr    eat
//  / \    /  \
// g   r  e   at
//            / \
//           a   t
// To scramble the string, we may choose any non-leaf node and swap its two children.

// For example, if we choose the node "gr" and swap its two children, it produces a scrambled string "rgeat".

//     rgeat
//    /    \
//   rg    eat
//  / \    /  \
// r   g  e   at
//            / \
//           a   t
// We say that "rgeat" is a scrambled string of "great".

// Similarly, if we continue to swap the children of nodes "eat" and "at", it produces a scrambled string "rgtae".

//     rgtae
//    /    \
//   rg    tae
//  / \    /  \
// r   g  ta  e
//        / \
//       t   a

/**
 * DP动态规划解法
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function isScramble(s1, s2) {
  if (s1.length !== s2.length) {
    return false
  }
  let len = s1.length
  let dp = new Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    dp[i] = new Array(len).fill(0)
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      dp[i][j] = new Array(len + 1).fill(0)
    }
  }
  for (let k = 1; k <= len; k++) {
    for (let i = 0; i + k <= len; i++) {
      for (let j = 0; j + k <= len; j++) {
        if (k === 1) {
          dp[i][j][k] = s1.charAt(i) === s2.charAt(j)
        } else {
          for (let q = 1; q < k && !dp[i][j][k]; q++) {
            dp[i][j][k] = (dp[i][j][q] && dp[i + q][j + q][k - q]) || (dp[i][j + k - q][q] && dp[i + q][j][k - q])
          }
        }
      }
    }
  }
  return dp[0][0][len]
}

/**
 * 递归解法：TLE
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
function isScramble(s1, s2) {
  let lettersArray = new Array(26).fill(0)
  return _isScramble(s1, 0, s1.length, s2, 0, s2.length, lettersArray)
  function _isEqualLetters(s1, l1, r1, s2, l2, r2, letters) {
    let ret = true
    for (let i = l1; i < r1; i++) {
      letters[s1.charAt(i) - 'a']++
    }
    for (let i = l2; i < r2; i++) {
      letters[s2.charAt(i) - 'a']--
    }
    for (let i = 0; i < 26; i++) {
      if (letters[i] !== 0) {
        letters[i] = 0
        ret = false
      }
    }
    return ret
  }
  function _isScramble(s1, l1, r1, s2, l2, r2, letters) {
    if (r1 - l1 === 1) {
      return s1[l1] === s2[l2]
    }

    if (!_isEqualLetters(s1, l1, r1, s2, l2, r2, letters)) {
      return false
    }

    for (let i = 1; i < r1 - l1; i++) {
      if (_isScramble(s1, l1, l1 + i, s2, l2, l2 + i, letters) && _isScramble(s1, l1 + i, r1, s2, l2 + i, r2, letters)) {
        return true
      }
      if (_isScramble(s1, l1, l1 + i, s2, r2 - i, r2, letters) && _isScramble(s1, l1 + i, r1, s2, l2, r2 - i, letters)) {
        return true
      }
    }
    return false
  }
}
