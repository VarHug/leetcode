// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

function generateParenthesis(n) {
    let res = [];
    let len = 2 * n;
    backTrace(res, '', 0, 0, n);
    return res;

    function backTrace(res, str, left, right) {
        if(str.length === len) {
            res.push(str);
            return;
        }

        if(left < n) {
            backTrace(res, str + '(', left + 1, right);
        }
        if(right < left) {
            backTrace(res, str + ')', left, right + 1);
        }
    }
}