// Given a string s consists of upper/lower-case alphabets and empty space characters ' ', return the length of last word in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a character sequence consists of non-space characters only.

// Example:

// Input: "Hello World"
// Output: 5

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
    let res = 0, right = s.length - 1;
    while (right >= 0 && s[right] === ' ') {
        right--;
    }
    while (right >= 0 && s[right] !== ' ') {
        right--;
        res++;
    }
    return res;
}

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
    s = s.trim();
    return s.length - s.lastIndexOf(' ') - 1;
}

