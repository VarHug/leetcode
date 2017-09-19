// Implement strStr().

// Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

function strStr(haystack, needle) {
    if(needle.length === haystack.length) return needle === haystack ? 0 : -1;
    if(haystack.length < needle.length) return -1;
    for(let i = 0; ;i++) {
        for(let j = 0; ;j++) {
            if(j === needle.length) return i;
            if(i + j === haystack.length) return -1;
            if(needle.charAt(j) !== haystack.charAt(i + j)) break;
        }
    }
}