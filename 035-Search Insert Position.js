// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You may assume no duplicates in the array.

// Here are few examples.
// [1,3,5,6], 5 → 2
// [1,3,5,6], 2 → 1
// [1,3,5,6], 7 → 4
// [1,3,5,6], 0 → 0

function searchInsert(nums, target) {
    let start = 0,
        end = nums.length - 1,
        res = -1;
    if(target > nums[end]) {
        return end + 1;
    } else if(target <= nums[0] ) {
        return 0;
    }
    while(start < end) {
        let mid = (start + end) >> 1;
        if(target === nums[mid]) {
            return mid;
        } else if(target < nums[mid]) {
            res = mid;
            end = mid;
        } else {
            res = mid + 1;
            start = mid + 1;
        }
    }
    return res;
}

//优化后:
function searchInsert(nums, target) {
    let start = 0,
        end = nums.length - 1;
    while(start <= end) {
        let mid = (start + end) >> 1;
        if(target === nums[mid]) {
            return mid;
        } else if(target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return start;
}