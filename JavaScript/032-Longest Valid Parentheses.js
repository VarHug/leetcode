// Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.

// For "(()", the longest valid parentheses substring is "()", which has length = 2.

// Another example is ")()())", where the longest valid parentheses substring is "()()", which has length = 4.

/**
 * @param {string} s
 * @return {number}
 */

function longestValidParentheses(s) {
    let res = 0,
        stack = [];
    stack.push(-1);
    for(let i = 0, len = s.length; i < len; i++) {
        if(s[i] === ')' && stack.length > 1 && s[stack[stack.length - 1]] === '(') {
            stack.pop();
            res = Math.max(res, i - stack[stack.length - 1]);
        } else {
            stack.push(i);
        }
    }
    return res;
}