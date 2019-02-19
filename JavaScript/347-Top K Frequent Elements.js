// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]
// Note:

// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  let dic = {}
  for (num of nums) {
    if (dic[num]) {
      dic[num]++
    } else {
      dic[num] = 1
    }
  }
  let bucket = new Array(nums.length + 1).fill(null)
  for (key in dic) {
    let val = dic[key]
    if (bucket[val] === null) {
      bucket[val] = []
    }
    bucket[val].push(parseInt(key))
  }
  let ret = []
  for (let i = bucket.length - 1; i >= 0 && ret.length < k; i--) {
    if (bucket[i] !== null) {
      ret.push(...bucket[i])
    }
  }
  return ret
}
