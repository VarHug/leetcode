// A string S of lowercase letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

// Example 1:
// Input: S = "ababcbacadefegdehijhklij"
// Output: [9,7,8]
// Explanation:
// The partition is "ababcbaca", "defegde", "hijhklij".
// This is a partition so that each letter appears in at most one part.
// A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
// Note:

// S will have length in range [1, 500].
// S will consist of lowercase letters ('a' to 'z') only.

/**
 * 最左边的第一个字母一定是S的第一个字母，检索该字母在S中最后的位置i，如果区间内有一个字母在i右边，则更新i
 * @param {string} S
 * @return {number[]}
 */
function partitionLabels(S) {
  let len = S.length
  let lastIndexOfChar = new Array(26).fill(-1)
  for (let i = 0; i < len; i++) {
    lastIndexOfChar[S.charCodeAt(i) - S.charCodeAt('a')] = i
  }
  let partitions = []
  let firstIndex = 0
  while (firstIndex < len) {
    let lastIndex = firstIndex
    for (let i = firstIndex; i < len && i <= lastIndex; i++) {
      let index = lastIndexOfChar[S.charCodeAt(i) - S.charCodeAt('a')]
      if (index > lastIndex) {
        lastIndex = index
      }
    }
    partitions.push(lastIndex - firstIndex + 1)
    firstIndex = lastIndex + 1
  }
  return partitions
}
