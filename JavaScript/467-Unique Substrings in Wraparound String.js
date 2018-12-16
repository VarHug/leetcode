// Consider the string s to be the infinite wraparound string of "abcdefghijklmnopqrstuvwxyz", so s will look like this: "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".

// Now we have another string p. Your job is to find out how many unique non-empty substrings of p are present in s. In particular, your input is the string p and you need to output the number of different non-empty substrings of p in the string s.

// Note: p consists of only lowercase English letters and the size of p might be over 10000.

// Input: "a"
// Output: 1

// Explanation: Only the substring "a" of string "a" is in the string s.

// Input: "cac"
// Output: 2
// Explanation: There are two substrings "a", "c" of string "cac" in the string s.

// Input: "zab"
// Output: 6
// Explanation: There are six substrings "z", "a", "b", "za", "ab", "zab" of string "zab" in the string s.


function findSubstringInWraproundString(p) {
	var result = new Array(26).fill(0);
	var i, len, counter = 1, sum = 0;

	result[p.charCodeAt(0) - 97] = 1;
	for(i = 1, len = p.length; i < len; i++) {
		var asc1 = p.charCodeAt(i), asc2 = p.charCodeAt(i - 1);
		if(asc1 - asc2 == 1 || asc2 - asc1 == 25)
			counter++;
		else
			counter = 1;

		var index = asc1 - 97;
		result[index] = Math.max(result[index], counter);
	}

	return result.reduce((prev, cur) => prev + cur);
}