// Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this in place with constant memory.

// For example,
// Given input array nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively. It doesn't matter what you leave beyond the new length.
/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    let len = nums.length;
    if(len < 2) return len;
    let pointer = 1;
    for(let i = 1; i < len; i++) {
        if(nums[i] !== nums[i - 1]) nums[pointer++] = nums[i];
    }
    return pointer;
}

//正则单纯返回长度
function removeDuplicates(nums) {
    return nums.join('').replace(/(\d)\1+/g, '$1').length;
}
