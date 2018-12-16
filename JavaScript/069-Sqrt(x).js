// Implement int sqrt(int x).

// Compute and return the square root of x.

// x is guaranteed to be a non-negative integer.

// Example 1:

// Input: 4
// Output: 2
// Example 2:

// Input: 8
// Output: 2
// Explanation: The square root of 8 is 2.82842..., and since we want to return an integer, the decimal part will be truncated.

/**
 * 开平方根
 * @param {number} x
 * @return {number}
 */
function mySqrt(x) {
    let left = 1,
        right = x;
    while (left <= right) {
        let mid = left + ((right - left) / 2 | 0),
            div = x / mid | 0;
        if (mid === div) {
            return mid;
        } else if (mid < div) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
}