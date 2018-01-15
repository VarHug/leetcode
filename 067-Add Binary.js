// Given two binary strings, return their sum (also a binary string).

// For example,
// a = "11"
// b = "1"
// Return "100".

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
function addBinary(a, b) {
    let res = '', cur = 0, i = a.length - 1, j = b.length - 1;
    while(i >= 0 || j >= 0) {
        cur += i >= 0 ? +a[i--] : 0;
        cur += j >= 0 ? +b[j--] : 0;
        res = cur % 2 + res;
        cur = cur / 2 | 0;
    } 
    return cur === 1 ? cur + res : res;
}