// Given an array nums containing n + 1 integers where each integer is between 1 and n (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.

// Example 1:

// Input: [1,3,4,2,2]
// Output: 2
// Example 2:

// Input: [3,1,3,4,2]
// Output: 3
// Note:

// You must not modify the array (assume the array is read only).
// You must use only constant, O(1) extra space.
// Your runtime complexity should be less than O(n2).
// There is only one duplicate number in the array, but it could be repeated more than once.

/**
 * 二分法
 * 数字范围[1, n]数组长度为n + 1,如果没有重复的数字，小于等n的数字出现的次数等于n
 * @param {number[]} nums
 * @return {number}
 */
function findDuplicate(nums) {
  let l = 1;
  let r = nums.length - 1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) {
        count++;
      }
    }
    if (count > mid) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return l;
}
