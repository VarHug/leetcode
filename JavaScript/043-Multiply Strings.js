// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2.

// Note:

// The length of both num1 and num2 is < 110.
// Both num1 and num2 contains only digits 0-9.
// Both num1 and num2 does not contain any leading zero.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

function multiply(num1, num2) {
    let m = num1.length, 
        n = num2.length;
    let res = new Array(m + n).fill(0);

    for(let i = m - 1; i >= 0; i--) {
        for(let j = n - 1; j >= 0; j--) {
            let mul = num1[i] * num2[j];
            let left = i + j, right = i + j + 1;
            let sum = mul + res[right];
            res[right] = sum % 10;
            res[left] += sum / 10 | 0; 
        }
    }
    
    let resStr = res.join('').replace(/^[0]+/, '');
    return resStr === '' ? '0' : resStr;
}