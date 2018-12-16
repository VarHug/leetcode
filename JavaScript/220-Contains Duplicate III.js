// Given an array of integers, find out whether there are two distinct indices i and j in the array such that the absolute difference between nums[i] and nums[j] is at most t and the absolute difference between i and j is at most k.

function containsNearbyAlmostDuplicate(nums , k , t) {
	if(k < 1 || t < 0)
		return false;
	var map = {};
	var mapsize = 0;
	const MIN_VALUE = -Math.pow(2,32);
	for(var i = 0, len = nums.length; i < len; i++) {
		var num = nums[i] - MIN_VALUE;
		var bucket = (num / (t + 1)) | 0;
		if(map.hasOwnProperty(bucket)
			|| (map.hasOwnProperty(bucket - 1) && num - map[bucket - 1] <= t)
			|| (map.hasOwnProperty(bucket + 1) && map[bucket + 1] - num <= t))
			return true;
		if(mapsize >= k) {
			var headbucket = (((nums[ i - k]) - MIN_VALUE) / (t + 1)) | 0;
			delete map[headbucket];
			mapsize--;
		}
		map[bucket] = num;
		mapsize++;
	}
	return false;
}