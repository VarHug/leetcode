// Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

// For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
// the contiguous subarray [4,-1,2,1] has the largest sum = 6.

/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    let dp = [];
    dp[0] = nums[0];
    for(let i = 1, len = nums.length; i < len; i++) {
        dp[i] = (dp[i - 1] > 0 ? dp[i - 1] : 0) + nums[i];
    }
    return Math.max.apply(this, dp);
}