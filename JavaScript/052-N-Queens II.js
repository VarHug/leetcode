// Follow up for N-Queens problem.

// Now, instead outputting board configurations, return the total number of distinct solutions.

/**
 * @param {number} n
 * @return {number}
 */
function totalNQueens(n) {
    let res = 0;
    let resunit = new Array(n);
    for(let i = 0; i < n; i++) {
        resunit[i] = new Array(n).fill('.');
    } 
    let row = new Array(n).fill(1);
    let left = new Array(n + n - 1).fill(1);
    let right = new Array(n + n - 1).fill(1);

    backTrace(resunit, row, left, right, 0);

    return res;

    function backTrace(resunit, row, left, right, times) {
        if(times === n) {
            res++;
        }
        for(let i = times; i < n; i++) {
            for(let j = 0; j < n; j++) {
                if(row[j] && left[i + j] && right[n - 1 - i + j]) {
                    resunit[i][j] = 'Q';
                    row[j] = 0;
                    left[i + j] = 0;
                    right[n - 1 - i + j] = 0;
                    backTrace(resunit, row, left, right, ++times);
                    --times;
                    resunit[i][j] = '.';
                    row[j] = 1;
                    left[i + j] = 1;
                    right[n - 1 - i + j] = 1;
                }
            }
            return;
        }
        return;
    }
}