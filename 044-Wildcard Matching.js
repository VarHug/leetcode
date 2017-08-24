// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).

// The matching should cover the entire input string (not partial).

// The function prototype should be:
// bool isMatch(const char *s, const char *p)

// Some examples:
// isMatch("aa","a") → false
// isMatch("aa","aa") → true
// isMatch("aaa","aa") → false
// isMatch("aa", "*") → true
// isMatch("aa", "a*") → true
// isMatch("ab", "?*") → true
// isMatch("aab", "c*a*b") → false

function isMatch(s, p) {
    var i = 0;
    var j = 0;
    var match = 0;
    var starIdx = -1;
    while(i < s.length) {
        if(j < p.length && (s[i] === p[j] || p[j] === '?')) {
            i++;
            j++;
        } else if(j < p.length && p[j] === '*') {
            starIdx = j;
            match = i;
            j++;
        } else if(starIdx !== -1) {
            j = starIdx + 1;
            match++;
            i = match;
        } else {
            return false;   
        }
    }

    while(j < p.length) {
        if(p[j] !== '*') {
            return false;
        } else {
            j++;
        }
    }

    return true;
}