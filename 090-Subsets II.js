// Given a collection of integers that might contain duplicates, nums, return all possible subsets.

// Note: The solution set must not contain duplicate subsets.

// For example,
// If nums = [1,2,2], a solution is:

// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function subsetsWithDup(nums) {
    let res = [];
    let len = nums.length;
    nums.sort((a, b) => a - b);
    backTrace(res, new Array(), nums, 0);
    return res;

    function backTrace(res, resunit, nums, index) {
        res.push(resunit.slice());
        for(let i = index; i < len; i++) {
            if (i > index && nums[i] === nums[i - 1]) {
                continue;
            }
            resunit.push(nums[i]);
            backTrace(res, resunit, nums, i + 1);
            resunit.pop();
        }
    }
}