// Given an array of words and a length L, format the text such that each line has exactly L characters and is fully (left and right) justified.

// You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces ' ' when necessary so that each line has exactly L characters.

// Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.

// For the last line of text, it should be left justified and no extra space is inserted between words.

// For example,
// words: ["This", "is", "an", "example", "of", "text", "justification."]
// L: 16.

// Return the formatted lines as:

// [
//    "This    is    an",
//    "example  of text",
//    "justification.  "
// ]

// Note: Each word is guaranteed not to exceed L in length.

// click to show corner cases.

// Corner Cases:

// A line other than the last line might contain only one word. What should you do in this case?
// In this case, that line should be left-justified.

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
function fullJustify(words, maxWidth) {
    var res = [];
    for (let i = 0, j; i < words.length; i = j) {
        let len = -1;

        for (j = i; j < words.length && len + words[j].length + 1 <= maxWidth; j++) {
            len += words[j].length + 1;
        }

        let resunit = words[i],
            midSpace = 1,
            extraSpace = 0;
        //j !== i + 1(not one word), j !== words.length(not last line)
        if (j !== i + 1 && j !== words.length) {
            //+1(before add one space)
            midSpace = ((maxWidth - len) / (j - i - 1) | 0) + 1;
            extraSpace = (maxWidth - len) % (j - i - 1);
        }
        for (let k = i + 1; k < j; k++) {
            for (let num = midSpace; num > 0; num--) {
                resunit += ' ';
            }
            if (extraSpace-- > 0) {
                resunit += ' ';
            }
            resunit += words[k];
        }
        let surplusSpace = maxWidth - resunit.length;
        while (surplusSpace-- > 0) {
            resunit += ' ';
        }

        res.push(resunit);
    }

    return res;
}
