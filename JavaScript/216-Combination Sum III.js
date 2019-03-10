// Find all possible combinations of k numbers that add up to a number n, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.

// Note:

// All numbers will be positive integers.
// The solution set must not contain duplicate combinations.
// Example 1:

// Input: k = 3, n = 7
// Output: [[1,2,4]]
// Example 2:

// Input: k = 3, n = 9
// Output: [[1,2,6], [1,3,5], [2,3,4]]

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
function combinationSum3(k, n) {
  let ret = []
  backTrace(ret, new Array(), n, k, 1)
  return ret

  /**
   * @param {number[][]} res 结果数组
   * @param {number[]} resunit 组合
   * @param {number} remain
   * @param {number} num
   */
  function backTrace(res, resunit, remain, recount, num) {
    if (remain === 0 && recount === 0) {
      res.push(resunit.slice())
      return
    } else if (remain < 0 || recount === 0) {
      return
    } else {
      for (let i = num; i <= 9; i++) {
        resunit.push(i)
        backTrace(res, resunit, remain - i, recount - 1, i + 1)
        resunit.pop()
      }
    }
  }
}
