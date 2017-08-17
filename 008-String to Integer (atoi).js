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