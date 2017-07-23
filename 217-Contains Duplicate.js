// Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.S

function containsDuplicate(nums) {
	var map = {};
	for(var i = 0, len = nums.length; i < len; i++) {
		var num = nums[i];
		if(!map[num])
			map[num] = true;
		else
			return true;
	}
	return false;
}