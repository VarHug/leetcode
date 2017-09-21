// Divide two integers without using multiplication, division and mod operator.

// If it is overflow, return MAX_INT.

function divide(dividend, divisor) {
    const INT_MIN = 1 << 31;
    const INT_MAX = -1 >>> 1;
    if(!divisor || (dividend === INT_MIN && divisor === -1)) return INT_MAX;
    let sign = ((dividend < 0) ^ (divisor < 0)) ? -1 : 1;
    let dvd = Math.abs(dividend);
    let dvs = Math.abs(divisor);
    let res = 0;
    while (dvd >= dvs) { 
        let temp = dvs, multiple = 1;
        while (dvd >= (temp << 1)) {
            if(temp << 1 > 0) {
                temp <<= 1;
                multiple <<= 1;
            } else {
                break;
            }
        }
        dvd -= temp;
        res += multiple;
    }
    return sign == 1 ? res : -res; 
}