
// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

// Example:

// Input: S = "ADOBECODEBANC", T = "ABC"
// Output: "BANC"
// Note:

// If there is no such window in S that covers all characters in T, return the empty string "".
// If there is such window, you are guaranteed that there will always be only one unique minimum window in S.

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const INT_MAX = -1 >>> 1;
  let dic = {}, d = INT_MAX, counter = t.length, begin = 0, end = 0, head = 0;
  for (let i = 0; i < counter; i++) {
    if (dic[t[i]]) {
      dic[t[i]]++;
    } else {
      dic[t[i]] = 1;
    }
  }
  while (end < s.length) {
    if (dic[s[end++]]-- > 0) {
      counter--;
    }
    while (counter === 0) {
      if (end - begin < d) {
        d = end - begin;
        head = begin;
      }
      if (dic[s[begin++]]++ === 0) {
        counter++;
      }
    }
  }
  return d === INT_MAX ? '' : s.substr(head, d);
};
