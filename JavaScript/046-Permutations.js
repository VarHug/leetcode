// Given a collection of distinct numbers, return all possible permutations.

// For example,
// [1,2,3] have the following permutations:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function permute(nums) {
    let res = [];
    let len = nums.length;
    backTrace(res, new Array(), nums, new Array());
    return res;

    function backTrace(res, resunit, nums, visited) {
        if(resunit.length === len) {
            res.push(resunit.slice());//数组深复制
        } else {
            for(let i = 0; i < len; i++) {
                if(visited[i]) {
                    continue;
                }
                resunit.push(nums[i]);
                visited[i] = true;
                backTrace(res, resunit, nums, visited);
                resunit.pop();
                visited[i] = false;
            }
        }
    }
}