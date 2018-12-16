// Implement atoi to convert a string to an integer.

// Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

// Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.

// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.

// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.

// If no valid conversion could be performed, a zero value is returned. If the correct value is out of the range of representable values, INT_MAX (2147483647) or INT_MIN (-2147483648) is returned.

function myAtoi(str) {
    if(str == null || str.length == 0)
        return 0;
    str = str.trim();
    const max = -1 >>> 1;
    const min = 1 << 31;
    var result = 0;
    var flag = null;
    var first = str.charAt(0);
    if(first == '+') {
        flag = '+';
    } else if(first == '-') {
        flag = '-';
    } else if(first < '0' || first > '9') {
        return result;
    } else {
        flag = '+';
        result = +first;
    }
    for(let i = 1, len = str.length; i < len; i++) {
        let digit = str[i];
        if(digit < '0' || digit > '9')
            break;
        if(flag == '+') {
            result = result * 10 + +digit;
            if(result > max)
                return max;
        } else {
            result = result * 10 - +digit;
            if(result < min)
                return min;
        }
    }
    return result;
}

//good idea
var myAtoi = function(str) {
    var sign = 0;
    var res = 0;
    var isStart = false;
    var len = str.length;
    var max = -1 >>> 1;
    var min = 1 << 31;
    for (var i = 0; i < len; i++) {
        var ch = str[i];
        if (ch === ' ') {
            if (isStart || sign) {
                break;
            }
            continue;
        } else if (ch === '+') {
            if(sign) {
                res = 0;
                break;
            }
            sign = +1;
        } else if (ch === '-') {
            if(sign) {
                res = 0;
                break;
            }
            sign = -1;
        } else if ('0' <= ch && ch <= '9') {
            isStart = true;
            res = res*10 + +ch;
        } else {
            break;
        }
    }
    return Math.min(Math.max(res * (sign? sign : 1), min), max);
};