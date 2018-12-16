// Follow up for "Unique Paths":

// Now consider if some obstacles are added to the grids. How many unique paths would there be?

// An obstacle and empty space is marked as 1 and 0 respectively in the grid.

// For example,
// There is one obstacle in the middle of a 3x3 grid as illustrated below.

// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]

/**
 * 二维动态规划法
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles(obstacleGrid) {
    let row = obstacleGrid.length,
        col = obstacleGrid[0].length;
    let dp = new Array(row + 1).fill(0);
    for (let i = 0; i <= row; i++) {
        dp[i] = new Array(col + 1).fill(0);
    }
    dp[1][0] = 1;
    for (let i = 1; i <= row; i++) {
        for (let j = 1; j<= col; j++) {
            if (!obstacleGrid[i - 1][j - 1]) {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[row][col];
}