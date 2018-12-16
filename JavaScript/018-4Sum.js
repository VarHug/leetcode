// Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

// Note: The solution set must not contain duplicate quadruplets.

// For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

// A solution set is:
// [
//   [-1,  0, 0, 1],
//   [-2, -1, 1, 2],
//   [-2,  0, 0, 2]
// ] 

function fourSum(nums, target) {
    let len = nums.length;
    let res = [];
    nums.sort((a,b) => a - b);
    for(let i = 0; i < len - 3; i++) {
        if(i > 0 && nums[i] === nums[i - 1])
            continue;
        for(let j = len - 1; j > i + 2; j--) {
            if(j < len - 1 && nums[j] === nums[j + 1])
                continue;
            let left = i + 1;
            let right = j - 1;
            while(left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                if(sum === target) {
                    res.push([nums[i], nums[left], nums[right], nums[j]]);
                    left++;
                    right--;
                    while(left < right && nums[left] === nums[left - 1]) {
                        left++;
                    }
                    while(left < right && nums[right] === nums[right + 1]) {
                        right--;
                    }
                } else if(sum > target) {
                    right--;
                } else {
                    left++;
                }
            }
        }
    }
    return res;
}