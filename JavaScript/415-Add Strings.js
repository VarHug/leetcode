// Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

// Note:

// The length of both num1 and num2 is < 5100.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function addStrings(num1, num2) {
  let ret = ''
  let i = num1.length - 1
  let j = num2.length - 1
  let carry = 0
  while (carry === 1 || i >= 0 || j >= 0) {
    let n1 = i < 0 ? 0 : +num1.charAt(i--)
    let n2 = j < 0 ? 0 : +num2.charAt(j--)
    ret = ((carry + n1 + n2) % 10) + ret
    carry = Math.floor((carry + n1 + n2) / 10)
  }
  return ret
}
