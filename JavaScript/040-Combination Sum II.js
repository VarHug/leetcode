// Given a collection of candidate numbers (C) and a target number (T), find all unique combinations in C where the candidate numbers sums to T.

// Each number in C may only be used once in the combination.

// Note:
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// For example, given candidate set [10, 1, 2, 7, 6, 1, 5] and target 8, 
// A solution set is: 
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
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
                if(i > index && candidates[i] === candidates[i - 1]) continue;
                resunit.push(candidates[i]);
                backTrace(res, resunit, remain - candidates[i], i + 1);
                resunit.pop();
            }
        }
    }
}