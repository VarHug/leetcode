// Validate if a given string is numeric.

// Some examples:
// "0" => true
// " 0.1 " => true
// "abc" => false
// "1 a" => false
// "2e10" => true
// Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one.

/**
 * 正则
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    if (s.replace(/^\s*/g, '').length) {
        return !isNaN(Number(s));
    } else {
        return false;
    }
};

