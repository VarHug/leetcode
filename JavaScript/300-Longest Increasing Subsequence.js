// Given an unsorted array of integers, find the length of longest increasing subsequence.

// Example:

// Input: [10,9,2,5,3,7,101,18]
// Output: 4 
// Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4. 
// Note:

// There may be more than one LIS combination, it is only necessary for you to return the length.
// Your algorithm should run in O(n2) complexity.
// Follow up: Could you improve it to O(n log n) time complexity?

/**
 * 动态规划
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
  let len = nums.length
  if (len === 0) {
    return 0
  }
  let dp = new Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    let max = 1
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        max = Math.max(dp[j] + 1, max)
      }
    }
    dp[i] = max
  }
  return Math.max(...dp)
}

/**
 * 二分
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS(nums) {
  let len = nums.length
  if (len === 0) {
    return 0
  }
  let tails = new Array(len).fill(0)
  let tailsLength = 0
  for (let num of nums) {
    let index = _binarySearch(tails, tailsLength, num)
    tails[index] = num
    if (index === tailsLength) {
      tailsLength++
    }
  }
  return tailsLength

  function _binarySearch(tails, tlen, key) {
    let l = 0, r = tlen
    while (l < r) {
      let mid = l + Math.floor((r - l) / 2)
      if (tails[mid] === key) {
        return mid
      } else if (tails[mid] > key) {
        r = mid
      } else {
        l = mid + 1
      }
    }
    return l
  }
}
