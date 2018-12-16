// Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.

function containsNearbyDuplicate(nums, k) {
	var counter = 0;
	var map = {}, distance = {};
	for(var i = 0, len = nums.length; i < len; i++) {
		var num = nums[i];
		if(map[num]) {
			if(i - distance[num] <= k) 
				return true;
			else 
				distance[num] = i;
		}
		else {
			map[num] = 1;
			distance[num] = i;
		}
	}
	return false;
}