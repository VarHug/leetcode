// Given an array and a value, remove all instances of that value in place and return the new length.

// Do not allocate extra space for another array, you must do this in place with constant memory.

// The order of elements can be changed. It doesn't matter what you leave beyond the new length.

// Example:
// Given input array nums = [3,2,2,3], val = 3

// Your function should return length = 2, with the first two elements of nums being 2.

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

function removeElement(nums, val) {
    let pointer = null;
    nums.sort((a,b) => a - b);
    for(let i = 0, len = nums.length; i < len; i++) {
        if(nums[i] === val) {
            if(pointer === null) pointer = i;
            continue;
        }
        if(pointer !== null && nums[i] !== val) {
            nums[pointer++] = nums[i];
        }
    }
    return pointer;
}