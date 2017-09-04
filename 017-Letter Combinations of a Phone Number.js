// Given a digit string, return all possible letter combinations that the number could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given below.

//队列
function letterCombinations(digits) {
    if(digits === '')
        return [];
    let map = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    let res = [''];
    for(let i = 0, len = digits.length; i < len; i++) {
        let x = map[+digits[i]];
        while(res[0].length === i) {
            let tmp = res.shift();
            for(let j = 0; j < x.length; j++) {
                res.push(tmp + x[j]);
            }
        }
    }
    return res;
}

//深度优先搜索(来源于网站js最快写法)
var letterCombinations = function(digits) {
    const numberToLetters = {
        '0': ' ',
        '1': '',
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    let result = [];
    if(digits.length === 0) return result;
    dfs(result, digits, 0, '');   
    
    function dfs(result, digits, index, current) {
        // when should I push?
        if(digits.length === index) {
            result.push(current);
            return;
        }

        const letters = numberToLetters[digits[index]];

        for(let i = 0; i < letters.length; i++) {
            dfs(result, digits, index + 1, current + letters[i]);
        }
    }
    return result;
};