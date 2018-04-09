// Write a function that takes a string as input and reverse only the vowels of a string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "leetcode", return "leotcede".

// Note:
// The vowels does not include the letter "y".

/**
 * @param {string} s
 * @return {string}
 */
function reverseVowels(s) {
    let vowels = 'aeiouAEIOU',
        head = 0,
        tail = s.length - 1,
        res = s.split('');
    while (tail > head) {
        while (tail > head && vowels.indexOf(s[head]) === -1) {
            head++;
        }
        while (tail > head && vowels.indexOf(s[tail]) === -1) {
            tail--;
        }
        res[head] = [res[tail], res[tail] = res[head]][0];
        head++;
        tail--;
    }
    return res.join('');
}