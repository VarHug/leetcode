// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// For example:
// A = [2,3,1,1,4], return true.

// A = [3,2,1,0,4], return false.

/**
 * @param {number[]} nums
 * @return {boolean}
 */

//CoolIdea
function canJump(nums) {
    for(let pointer = 0, reach = 0; pointer <= reach; pointer++) {
        reach = Math.max(pointer + nums[pointer], reach);
        if(reach >= nums.length - 1) {
            return true;
        }
    }
    return false;
}


//直观解法：TLE超时
function canJump(nums) {
    let pointer = 0,
        len = nums.length,
        res = false;
    
    jumping(nums, pointer, 1);
        
    function jumping(nums, pointer, jump) {
        jump = 1;
        if(pointer >= len - 1) {
            res = true;
        }
        if(nums[pointer] === 0 && pointer !== len - 1) {
            return;
        }
        while(jump <= nums[pointer]) {
            if(res) {
                return;
            }
            jumping(nums, pointer + jump, jump);
            jump++;
        }
    }
    return res;
}