// Given an array of strings, group anagrams together.

// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
// Return:

// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    let res = [], dic = {}, index = 0, pos = 1;
    for(let i = 0, len = strs.length; i < len; i++) {
        let arr = strs[i].split('');
        arr.sort();
        let key = arr.join('');
        if(dic[key]) {
            res[dic[key] - 1].push(strs[i]);
        } else {
            dic[key] = pos++;
            res[index++] = [];
            res[dic[key] - 1].push(strs[i]);
        }
    }
    return res;
}

//网站最快解法
var groupAnagrams = function(strs) {
    const lists = [];
    strs && strs.length > 0 && 
    strs.reduce((map, str)=>{
        let s = str === '' ? str :    
            str.split('').sort((a,b)=>{
                if(a < b) return -1;
                if(a > b) return 1;
                return 0;
            }).reduce((a,b)=>a+b);
        if(map.has(s)){
            map.get(s).push(str);
        } else {
            map.set(s, [str]);
        }
        return map;
    }, new Map()).forEach((v,k)=>{
        lists.push(v);
    });
    return lists;
};
