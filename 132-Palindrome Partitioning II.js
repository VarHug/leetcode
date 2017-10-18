// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return the minimum cuts needed for a palindrome partitioning of s.

// For example, given s = "aab",
// Return 1 since the palindrome partitioning ["aa","b"] could be produced using 1 cut.

/**
 * @param {string} s
 * @return {number}
 */

//模板方法，TLE
function minCut(s) {
    let res = [];
    let len = s.length;
    let min = s.length;
    backTrace(res, new Array(), s, 0);
    res.forEach(function(item, index) {
        if(item.length < min) min = item.length;
    });
    return min - 1;

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
