// Given a sorted array consisting of only integers where every element appears twice except for one element which appears once. Find this single element that appears only once.

// Example 1:
// Input: [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:
// Input: [3,3,7,7,10,11,11]
// Output: 10
// Note: Your solution should run in O(log n) time and O(1) space.

/**
 * @param {number[]} nums
 * @return {number}
 */
function singleNonDuplicate(nums) {
  let l = 0, r = nums.length - 1
  while (l < r) {
    let m = l + Math.floor((r - l) / 2)
    if (m & 1) {
      m--
    }
    if (nums[m] === nums[m + 1]) {
      l = m + 2
    } else {
      r = m
    }
  }
  return nums[l]
}
