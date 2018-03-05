// The set [1,2,3,…,n] contains a total of n! unique permutations.

// By listing and labeling all of the permutations in order,
// We get the following sequence (ie, for n = 3):

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

// Note: Given n will be between 1 and 9 inclusive.

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */


//回溯法（慢）
function getPermutation(n, k) {
    if (n === 1) {
        return '1';
    }
    let res = '',
        count = 0;
    const factorial = [0, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880],
        nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let start = Math.ceil(k / factorial[n - 1]) - 1;
    if (k % factorial[n - 1] === 0) {
        k = k - start * factorial[n - 1];
    } else {
        k %= factorial[n - 1];
    }
    backTrace(new Array(), nums, new Array(), start);
    return res;

    function backTrace(resunit, nums, visited, index) {
        if(resunit.length === n) {
            if ((++count) === k) {
                res = resunit.join('');
            }
        } else {
            for(let i = index; i < n; i++) {
                if (res) {
                    return;
                }
                if(visited[i]) {
                    continue;
                }
                resunit.push(nums[i]);
                visited[i] = true;
                backTrace(resunit, nums, visited, 0);
                resunit.pop();
                visited[i] = false;
            }
        }
    }
}