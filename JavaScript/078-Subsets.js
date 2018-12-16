// Given a set of distinct integers, nums, return all possible subsets.

// Note: The solution set must not contain duplicate subsets.

// For example,
// If nums = [1,2,3], a solution is:

// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function subsets(nums) {
    let res = [];
    let len = nums.length;
    backTrace(res, new Array(), nums, 0);
    return res;

    function backTrace(res, resunit, nums, index) {
        res.push(resunit.slice());
        for(let i = index; i < len; i++) {
            resunit.push(nums[i]);
            backTrace(res, resunit, nums, i + 1);
            resunit.pop();
        }
    }
}