// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
// Write the code that will take a string and make this conversion given a number of rows:
// string convert(string text, int nRows);
// convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR"

function convert(s, numRows) {
    var len = s.length;
    if(len === 0 || numRows <= 1)
    	return s;
    var turn = new Array(numRows).fill("");
    var row = 0, dire = 1;
    for(let i = 0; i < len; i++) {
    	turn[row] += s.charAt(i);
    	row += dire;
    	if(row == numRows) {
    		row = numRows - 2;
    		dire = -1;
    	}
    	if(row < 0) {
    		row = 1;
    		dire = 1;
    	}
    }
    var result = "";
    turn.forEach(function(item) {
    	result += item;
    })
    return result;
}