// Write a function to find the longest common prefix string amongst an array of strings.

//
function longestCommonPrefix(strs) {
    if(!strs || strs.length === 0) 
        return '';
    let len = strs.length;
    let pre = strs[0];
    for(let i = 1; i < len; i++) {
        while(strs[i].indexOf(pre) !== 0) {
            pre = pre.substring(0, pre.length - 1);
        }
    }
    return pre;
}

function longestCommonPrefix(strs) {
    if(!strs || strs.length === 0) 
        return '';
    let pre = strs[0];
    let res = '';
    for(let i = 0, len1 = pre.length; i < len1; i++) {
        let mod = pre[i];
        for(let j = 1, len2 = strs.length; j < len2; j++) {
            if(mod !== strs[j][i]) {
                return res;
            }
        }
        res += pre[i];
    }
    return res;
}