// Given a set of candidate numbers (C) (without duplicates) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

// The same repeated number may be chosen from C unlimited number of times.

// Note:
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// For example, given candidate set [2, 3, 6, 7] and target 7, 
// A solution set is: 
// [
//     [7],
//     [2, 2, 3]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function combinationSum(candidates, target) {
    candidates.sort((a, b) => a - b);
    let res = [];
    let len = candidates.length;
    backTrace(res, new Array(), target, 0);
    return res;

    function backTrace(res, resunit, remain, index) {
        if(remain < 0) return;
        else if(remain === 0) res.push(resunit.slice());
        else {
            for(let i = index; i < len; i++) {
                resunit.push(candidates[i]);
                backTrace(res, resunit, remain - candidates[i], i);
                resunit.pop();
            }
        }
    }
}