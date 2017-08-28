// Given an integer, convert it to a roman numeral.

// Input is guaranteed to be within the range from 1 to 3999.

function intToRoman(num) {
    let res = '';
    let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let integer = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    for(let i = 0; num !== 0; i++) {
        if(num < integer[i])
            continue;
        while(num >= integer[i]) {
            res += roman[i];
            num -= integer[i];
        }
    }
    return res;
}

function intToRoman(num) {
    let res = '';
    let roman = [
        ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'], 
        ['', 'M', 'MM', 'MMM']
    ];
    let d3 = num / 1000 | 0;
    num %= 1000;
    let d2 = num / 100 | 0;
    num %= 100;
    let d1 = num / 10 | 0;
    num %= 10;
    let d0 = num;
    res = roman[3][d3] + roman[2][d2] + roman[1][d1] + roman[0][d0];
    return res;
}