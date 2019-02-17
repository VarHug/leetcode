// Given a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string. If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.

// Example 1:
// Input:
// s = "abpcplea", d = ["ale","apple","monkey","plea"]

// Output: 
// "apple"
// Example 2:
// Input:
// s = "abpcplea", d = ["a","b","c"]

// Output: 
// "a"
// Note:
// All the strings in the input will only contain lower-case letters.
// The size of the dictionary won't exceed 1,000.
// The length of all the strings in the input won't exceed 1,000.

/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
function findLongestWord(s, d) {
  let longest = ''
  for (let dicWord of d) {
    let i = 0
    for (let j = 0; j < s.length; j++) {
      if (s.charAt(j) === dicWord[i]) {
        i++
      }
    }
    // isValid
    if (i === dicWord.length) {
      // isLongest
      if (dicWord.length > longest.length || (dicWord.length === longest.length && dicWord.localeCompare(longest)) < 0) {
        longest = dicWord
      }
    }
  }
  return longest
}
