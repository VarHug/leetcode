// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return all possible palindrome partitioning of s.

// For example, given s = "aab",
// Return

// [
//   ["aa","b"],
//   ["a","a","b"]
// ]

/**
 * @param {string} s
 * @return {string[][]}
 */

function partition(s) {
    let res = [];
    let len = s.length;
    backTrace(res, new Array(), s, 0);
    return res;

    function backTrace(res, resunit, s, index) {
        if (index === len) {
            res.push(resunit.slice());
        } else {
            for(let i = index; i < len; i++) {
                if(isPalindrome(s, index, i)) {
                    resunit.push(s.substring(index, i + 1));
                    backTrace(res, resunit, s, i + 1);
                    resunit.pop();
                }
            }
        }
    }

    function isPalindrome(s, left, right) {
        while(left < right) {
            if(s[left++] !== s[right--]) return false;
        }
        return true;
    }
}