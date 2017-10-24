// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

function search(nums, target) {
    let start = 0,
        n = nums.length,
        end = n - 1;
    while(start < end) {
        let mid = (start + end) >> 1;
        if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    let minIndex = start;
    if(target <= nums[n - 1]) {
        start = minIndex;
        end = n - 1;
    } else {
        start = 0;
        end = minIndex - 1;
    }
    while(start <= end) {
        let mid = (start + end) >> 1;
        if(nums[mid] === target) {
            return mid;
        } else if(nums[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

// clear idea:
function search(nums, target) {
    let start = 0,
        n = nums.length,
        end = n - 1;
    while(start < end) {
        let mid = (start + end) >> 1;
        if (nums[mid] > nums[end]) {
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    let minIndex = start;
    start = 0, end = n - 1;
    while(start <= end) {
        let mid = (start + end) >> 1;
        let realmid = (mid + minIndex) % n;
        if(nums[realmid] === target) return realmid;
        if(nums[realmid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}