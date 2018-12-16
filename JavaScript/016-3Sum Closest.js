// Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

//     For example, given array S = {-1 2 1 -4}, and target = 1.

//     The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).

function threeSumClosest(nums, target) {
    if(nums.length < 3)
        return 0;
    let len = nums.length;
    let closest = -1 >>> 1;
    let preSum, curSum, curClosest;
    nums.sort((a,b) => a - b);
    for(let i = 0; i < len - 2; i++) {
        if(i > 0 && nums[i] === nums[i - 1])
            continue;
        let left = i + 1;
        let right = len - 1;
        while(left < right) {
            curSum = nums[i] + nums[left] + nums[right];
            curClosest = Math.abs(target - curSum);
            if(curClosest < closest) {
                closest = curClosest;
                preSum = curSum;
            }
            if(curSum < target) {
                left++;
            } else if(curSum > target) {
                right--;
            } else {
                return target;
            }
        }
    }
    return preSum;
}