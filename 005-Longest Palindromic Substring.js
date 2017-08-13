// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
// Example:
// Input: "babad"

// Output: "bab"

// Note: "aba" is also a valid answer.

// Input: "cbbd"

// Output: "bb"


//DP：
function longestPalindrome(str) {
	var len = str.length;
	var dp = new Array(len);
	var result = null;
	for(var i = 0; i < len; i++) {
		dp[i] = new Array(len);
	}
	for(var i = len - 1; i >= 0; i--) {
		for(var j = i; j < len; j++) {
			dp[i][j] = str[i] == str[j] && ( j - i < 3 || dp[i + 1][j - 1] );
			if(dp[i][j] && (result == null || j - i + 1 > result.length))
				result = str.substring(i, j + 1);
		}
	}
	return result;
}

// 优化后：
function longestPalindrome(str) {
	var len = str.length;
	var dp = new Array(1001);
	var result = "";
	for(let i = 0; i < len; i++) {
		dp[i] = new Array(1001);
	}
	for(let i = len - 1; i >= 0; i--) {
		let maxJ = i;
		for(let j = i; j < len; j++) {
			if(str[i] == str[j] && ( j - i < 3 || dp[i + 1][j - 1] )) {
				dp[i][j] = true;
				maxJ = j;
			}
		}
		if(maxJ - i + 1 > result.length) {
			result = str.substring(i, maxJ + 1);
		}
	}
	return result;
}

//AC
function longestPalindrome(str) {
	var len = str.length;
	if(len == 0)
		return "";
	if(len == 1)
		return str;
	var minStart = 0, maxLen = 1;
	for(let i = 0; i < len;) {
		if(len - i <= (maxLen / 2 | 0))
			break;
		let j = i, k = i;
		while(k < len - 1 && str[k] == str[k + 1])
			++k;
		i = k + 1;
		while(k < len - 1 && j > 0 && str[k + 1] == str[j - 1]) {
			++k;
			--j;
		}
		if(k - j + 1 > maxLen) {
			minStart = j;
			maxLen = k - j + 1;
		}
	}
	return str.substr(minStart, maxLen);
}
