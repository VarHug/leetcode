// Implement pow(x, n).


// Example 1:

// Input: 2.00000, 10
// Output: 1024.00000
// Example 2:

// Input: 2.10000, 3
// Output: 9.26100

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
    let pow = Math.abs(n);
    let i;
    let res = 1;
    while(pow > 1) {
        let resunit = x;
        for(i = 2; pow >= i; i *= 2) {
            resunit *= resunit;
        }
        pow -= (i / 2);
        res *= resunit;
    }
    if(pow === 1) res *= x;
    return n > 0 ? res : 1 / res;
}

//递归
function myPow(x, n) {
    if(n === 0) return 1;

    if(n < 0) {
        n = -n;
        x = 1 / x;
    }

    return n & 1 ? x * myPow(x * x, n / 2 | 0) : myPow(x * x, n / 2);
}