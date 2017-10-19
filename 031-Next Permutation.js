// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place, do not allocate extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//本质算法
function nextPermutation(nums) {
    let n = nums.length;
    if(n < 2) return;
    let index = n - 1;
    while(index > 0) {
        if(nums[index - 1] < nums[index]) break;
        index--;
    }
    if(index === 0) {
        reverseSort(nums, 0, n - 1);
    } else {
        let val = nums[index - 1],
            j = n - 1;
        while(j >= index) {
            if(nums[j] > val) break;
            j--;
        }
        swap(nums, j, index - 1);
        reverseSort(nums, index, n - 1);
        return;
    }

    function swap(nums, i, j) {
        nums[i] = [nums[j], nums[j] = nums[i]][0];
    }

    function reverseSort(nums, start, end) {
        if(start > end) return;
        for(let i = start; i < (end + start) / 2; i++) {
            swap(nums, i, start + end - i);
        }
    }
};

//优化
function nextPermutation(nums) {
    let n = nums.length;
    if(n < 2) return;
    let i = n - 1;
    while(i > 0) {
        if(nums[i - 1] < nums[i]) break;
        i--;
    }
    if(i === 0) {
        nums.sort((a, b) => a - b);
    } else {
        let val = nums[i - 1],
            j = n - 1;
        while(j >= i) {
            if(nums[j] > val) break;
            j--;
        }
        nums[j] = [nums[i - 1], nums[i - 1] = nums[j]][0];
        j = n - 1;
        while(i < n - 1) {
            nums[i] = [nums[j], nums[j] = nums[i]][0]
            j--;
            i++;
        }
        return;
    }
};