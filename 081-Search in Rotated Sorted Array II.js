// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,0,1,2,2,5,6] might become [2,5,6,0,0,1,2]).

// You are given a target value to search. If found in the array return true, otherwise return false.

// Example 1:

// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true
// Example 2:

// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
function search(nums, target) {
  let start = 0,
    n = nums.length,
    end = n - 1,
    mid;
  while (start <= end) {
    mid = (start + end) >> 1;
    if (nums[mid] === target) {
      return true;
    }
    // 左中右均相等(e.g.[1, 1, 3, 1])
    if (nums[start] === nums[mid] && nums[end] === nums[mid]) {
      start++;
      end--;
    } else if (nums[start] <= nums[mid]) {
      // order
      if (nums[start] <= target && nums[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid] < target && nums[end] >= target) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return false;
}
