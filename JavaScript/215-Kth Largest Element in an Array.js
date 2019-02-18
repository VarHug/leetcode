// Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Example 1:

// Input: [3,2,1,5,6,4] and k = 2
// Output: 5
// Example 2:

// Input: [3,2,3,1,2,4,5,5,6] and k = 4
// Output: 4
// Note: 
// You may assume k is always valid, 1 ≤ k ≤ array's length.

/**
 * 排序
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  nums.sort((a, b) => a - b)
  return nums[nums.length - k]
}

/**
 * 快排思路
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function findKthLargest(nums, k) {
  function swap(arr, i, j) {
    let temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
  }

  function partition(arr, l, h) {
    let i = l
    let j = h + 1
    while (true) {
      while (arr[++i] < arr[l] && i < h);
      while (arr[--j] > arr[l] && j > l);
      if (i >= j) {
        break
      }
      swap(arr, i, j)
    }
    swap(arr, l, j)
    return j
  }

  let kth = nums.length - k
  let lo = 0
  let hi = nums.length - 1
  while (lo < hi) {
    let j = partition(nums, lo, hi)
    if (j === kth) {
      break
    } else if (j < kth) {
      lo = j + 1
    } else {
      hi = j - 1
    }
  }
  return nums[kth]
}
