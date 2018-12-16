// Rotate an array of n elements to the right by k steps.

// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

// Note:
// Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//巧妙三转法
function rotate(nums, k) {
    k %= nums.length;
    nums.reverse();
    sortReverse(nums, 0, k - 1);
    sortReverse(nums, k, nums.length - 1);
    
    function sortReverse(arr, start, end) {
        for(let i = start, mid = ((end - start) >> 1) + start; i <= mid; i++) {
            arr[i] = [arr[end - i + start], arr[end - i + start] = arr[i]][0];
        }
    }
}

//巧秒利用内置函数直观法
function rotate(nums, k) {
    k %= nums.length;
    [].unshift.apply(nums, nums.splice(-k));
}