// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// For example:
// Given array A = [2,3,1,1,4]

// The minimum number of jumps to reach the last index is 2. (Jump 1 step from index 0 to 1, then 3 steps to the last index.)

// Note:
// You can assume that you can always reach the last index.

/**
 * @param {number[]} nums
 * @return {number}
 */
//AC
function jump(nums) {
    let jumps = 0, currentReach = 0, reach = 0, i = 0, len = nums.length - 1;
    if(len < 1) return 0;
    while(true) {
        jumps++;
        for(; i <= currentReach; i++) {
            reach = Math.max(reach, i + nums[i]);
            if(reach >= len) return jumps;
        }
        currentReach = reach;
    }
}

//Single loop
function jump(nums) {
    let jumps = 0, curEnd = 0, curFarthest = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		curFarthest = curFarthest > i + nums[i] ? curFarthest : i + nums[i];
		if (i === curEnd) {
			jumps++;
			curEnd = curFarthest;
		}
	}
	return jumps;
}

//直观法:TLE
function jump(nums) {
    let jumps = new Array(nums.length).fill(0);
    for(let index = 0, len = nums.length; index < len; index++) {
        for(let j = index; j <= index + nums[index]; j++) {
            if(j > 0 && jumps[j] === 0) {
                jumps[j] = jumps[index] + 1;
            } else {
                jumps[j] = Math.min(jumps[j], jumps[index] + 1);
            }
        }
    }
    return jumps[nums.length - 1];
}