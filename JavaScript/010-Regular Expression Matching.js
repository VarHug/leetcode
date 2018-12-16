// Implement regular expression matching with support for '.' and '*'.

// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.

// The matching should cover the entire input string (not partial).

// The function prototype should be:
// bool isMatch(const char *s, const char *p)

// Some examples:
// isMatch("aa","a") → false
// isMatch("aa","aa") → true
// isMatch("aaa","aa") → false
// isMatch("aa", "a*") → true
// isMatch("aa", ".*") → true
// isMatch("ab", ".*") → true
// isMatch("aab", "c*a*b") → true

//recursive
function isMatch(s, p) {
    if(p.length === 0)
        return s.length === 0;

    if(p[1] === '*') {
        return(s.length !== 0 && (s[0] === p[0] || p[0] === '.') && isMatch(s.substr(1), p) || isMatch(s, p.substr(2)));
    } else {
        return s.length !== 0 && (s[0] === p[0] || p[0] === '.') && isMatch(s.substr(1), p.substr(1));
    }
}

//DP:
function isMatch(s, p) {
    var m = s.length, n = p.length;
    var dp = new Array(m + 1);
    for(let i = 0; i <= m; i++) {
        dp[i] = new Array(n + 1);
    }

    dp[0][0] = true;
    for(let i = 1; i <= m; i++) {
        dp[i][0] = false;
    }
    for(let j = 1; j <= n; j++) {
        dp[0][j] = j > 1 && p[j - 1] === '*' && dp[0][j - 2];
    }

    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++) {
            if(p[j - 1] !== '*') {
                dp[i][j] = dp[i - 1][j - 1] && (s[i - 1] === p[j - 1] || p[j - 1] === '.');
            } else {
                dp[i][j] = dp[i][j - 2] || (s[i - 1] === p[j - 2] || p[j - 2] === '.') && dp[i - 1][j];
            }
        }
    }

    return dp[m][n];
}