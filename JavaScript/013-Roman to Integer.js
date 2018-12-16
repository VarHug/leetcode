// Given a roman numeral, convert it to an integer.

// Input is guaranteed to be within the range from 1 to 3999.

function romanToInt(s) {
    let res = 0
    for(let i = s.length - 1; i >= 0; i--) {
        let c = s[i];
        switch(c) {
            case 'I' :
                res += (res >= 5 ? -1 : 1);
                break;
            case 'V' :
                res += 5;
                break;
            case 'X' :
                res += (res >= 50 ? -10 : 10);
                break;
            case 'L' :
                res += 50;
                break;
            case 'C' :
                res += (res >= 500 ? -100 : 100);
                break;
            case 'D' :
                res += 500;
                break;
            case 'M' :
                res += 1000;
                break;
        }
    }
    return res;
}

//good idea:
function romanToInt(s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let res = 0;
    
    for (let i = s.length - 1; i >= 0; i--) {
        let curr = map[s[i]];
        let prev =  map[s[i + 1]];
        //小的数字在大的数字的右边，所表示的数等于这些数字相加得到的数，如 Ⅷ=8、Ⅻ=12；
        //小的数字（限于 Ⅰ、X 和 C）在大的数字的左边，所表示的数等于大数减小数得到的数，如 Ⅳ=4、Ⅸ=9；
        res = curr < prev ? res - curr : res + curr;
    }
    
    return res;
}