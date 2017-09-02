// Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

// Note: The solution set must not contain duplicate triplets.

// For example, given array S = [-1, 0, 1, 2, -1, -4],

// A solution set is:
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

function threeSum(nums) {
    let i = 0;
    let len = nums.length;
    let res = [];
    nums.sort((a, b) => a-b);    
    for(let i = 0; i < len - 2; i++) {
        if(i > 0 && nums[i] === nums[i - 1])
            continue;
        let left = i + 1;
        let right = len - 1;
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if(sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while(left < right && nums[left] === nums[left - 1]) {
                    left++;
                }
                while(left < right && nums[right] === nums[right + 1]) {
                    right--;
                }
            } else if(sum > 0) {
                right--;
            } else if(sum < 0) {
                left++;
            }
        }
    }
    return res;
}