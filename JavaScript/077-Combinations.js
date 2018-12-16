// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

// For example,
// If n = 4 and k = 2, a solution is:

// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = [];
    backTrace(res, new Array(), 1);
    return res;

    /**
     * 
     * 
     * @param {number[][]} res 
     * @param {number[]} resunit 
     * @param {num} index 
     */
    function backTrace(res, resunit, index) {
        if (resunit.length === k) {
            res.push(resunit.slice());
        } else {
            for (let i = index; i <= n; i++) {
                resunit.push(i);
                backTrace(res, resunit, ++index);
                resunit.pop();
            }
        }
    }
};