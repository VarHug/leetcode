// Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together. You may assume the given string consists of lowercase English letters only and its length will not exceed 10000.

// Example 1:
// Input: "abab"
// Output: True
// Explanation: It's the substring "ab" twice.

// Example 2:
// Input: "aba"
// Output: False

// Example 3:
// Input: "abcabcabcabc"
// Output: True
// Explanation: It's the substring "abc" four times. (And the substring "abcabc" twice.)

var repeatedSubstringPattern = function(s) {
	var len = s.length;
	for(var slen = (len / 2)|0; slen >= 1; slen--) {
		if(len % slen === 0) {
			var n = len / slen;
			var str = s.substr(0, slen);
			var result = true;
			for(var j = slen; j < len; j += slen) {
				if(s.substr(j, slen) != str) {
					result = false;
					break;
				}
			}
			if(result)
				return true;
		}
	}
	return false;
}

