// Determine whether an integer is a palindrome. Do this without extra space.

// click to show spoilers.

// Some hints:
// Could negative integers be palindromes? (ie, -1)

// If you are thinking of converting the integer to string, note the restriction of using extra space.

// You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?

// There is a more generic way of solving this problem.

function isPalindrome(x) {
    if(x < 0 || (x !== 0 && x % 10 === 0))
        return false;
    let left = x;
    let right = 0;
    while(left > right) {
        right = right * 10 + left % 10;
        left = Math.floor(left / 10);
    }
    return (left === right || left === Math.floor(right / 10));
}