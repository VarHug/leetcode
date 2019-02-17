// Share
// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

// Example 1:
// Input: "aba"
// Output: True
// Example 2:
// Input: "abca"
// Output: True
// Explanation: You could delete the character 'c'.
// Note:
// The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

/**
 * @param {string} s
 * @return {boolean}
 */
function validPalindrome(s) {
  function isPalindrome(str, i, j) {
    while (i < j) {
      if (s.charAt(i++) !== s.charAt(j--)) {
        return false
      }
    }
    return true
  }
  for (let head = 0, tail = s.length - 1; head < tail; head++, tail--) {
    if (s.charAt(head) !== s.charAt(tail)) {
      return isPalindrome(s, head + 1, tail) || isPalindrome(s, head, tail - 1)
    }
  }
  return true
}
