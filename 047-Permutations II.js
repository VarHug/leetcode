// Given a collection of numbers that might contain duplicates, return all possible unique permutations.

// For example,
// [1,1,2] have the following unique permutations:
// [
//     [1,1,2],
//     [1,2,1],
//     [2,1,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function permuteUnique(nums) {
    nums.sort((a, b) => a - b);
    let res = [];
    let len = nums.length;
    backTrace(res, new Array(), nums, new Array());
    return res;

    function backTrace(res, resunit, nums, visited) {
        if(resunit.length === len) {
            res.push(resunit.slice());
        } else {
            for(let i = 0; i < len; i++) {
                if(!visited[i - 1] && nums[i] === nums[i - 1]) continue;
                if(visited[i]) continue;
                visited[i] = true;
                resunit.push(nums[i]);
                backTrace(res, resunit, nums, visited);
                visited[i] = false;
                resunit.pop();
            }
        }
    }
}