// Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

// Your algorithm's runtime complexity must be in the order of O(log n).

// If the target is not found in the array, return [-1, -1].

// For example,
// Given [5, 7, 7, 8, 8, 10] and target value 8,
// return [3, 4].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function searchRange(nums, target) {
    let start = 0, end = nums.length - 1;
    let res = [];
    while (start < end) {
        let mid = start + end >> 1;
        if(target > nums[mid]) start = mid + 1;
        else end = mid;
    }
    if(nums[start] !== target) return [-1,-1];
    res.push(start);
    end = nums.length - 1;
    while(start < end) {
        let mid = (start + end >> 1) + 1;
        if(target < nums[mid]) end = mid - 1;
        else start = mid;
    }
    res.push(end);
    return res;
};