// Given an unsorted integer array, find the first missing positive integer.

// For example,
// Given [1,2,0] return 3,
// and [3,4,-1,1] return 2.

// Your algorithm should run in O(n) time and uses constant space.

/**
 * @param {number[]} nums
 * @return {number}
 */

function firstMissingPositive(nums) {
    let i = 0, len = nums.length;
    for(; i < len; i++) {
        while(nums[i] > 0 && nums[i] <= len && nums[nums[i] - 1] !== nums[i]) {
            nums[nums[i] - 1] = [nums[i], nums[i] = nums[nums[i] - 1]][0];
        }
    }

    for(i = 0; i < len; i++) {
        if(nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return len + 1
}

//法二：
var firstMissingPositive = function(nums) {
    const fakeBitArray = new Array(Math.pow(2, 32) - 1);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            fakeBitArray[nums[i]] = true;    
        }
    }
    
    for (let i = 1; i < Math.pow(2, 32) - 1; i++) {
        if (fakeBitArray[i] !== true) {
            return i;
        }
    }
}