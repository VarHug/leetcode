// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// Example 1:
// nums1 = [1, 3]
// nums2 = [2]
// The median is 2.0

// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]
// The median is (2 + 3)/2 = 2.5

function findMedianSortedArrays(nums1, nums2) {
	var nums = merge(nums1,nums2);
	var len = nums.length;
	if(nums.length & 1) {
		return nums[Math.ceil(len / 2 - 1)];
	} else {
		return (nums[len / 2] + nums[len / 2 - 1]) / 2;
	}

	function merge(input1, input2) {
		var i = 0, j = 0;
		var output = [];
		while(i < input1.length || j < input2.length) {
			if (i == input1.length) {
				output.push(input2[j++]);
				continue;
			}
			if (j == input2.length) {
				output.push(input1[i++]);
				continue;
			}
			if (input1[i] < input2[j]) {
				output.push(input1[i++]);
			} else {
				output.push(input2[j++]);
			}
		}
		return output;
	}
}