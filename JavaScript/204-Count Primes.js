// Count the number of prime numbers less than a non-negative number, n.

// Example:

// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let notPrimes = new Array(n).fill(false)
  let count = 0
  for (let i = 2; i < n; i++) {
    if (notPrimes[i]) {
      continue
    }
    count++
    for (let j = i * i; j < n; j += i) {
      notPrimes[j] = true
    }
  }
  return count
}
