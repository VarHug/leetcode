// Given an absolute path for a file (Unix-style), simplify it.

// For example,
// path = "/home/", => "/home"
// path = "/a/./b/../../c/", => "/c"

// click to show corner cases.

// Corner Cases:

 

 

// Did you consider the case where path = "/../"?
// In this case, you should return "/".
// Another corner case is the path might contain multiple slashes '/' together, such as "/home//foo/".
// In this case, you should ignore redundant slashes and return "/home/foo".
/**
 * @param {string} path
 * @return {string}
 */
function simplifyPath(path) {
    let pathArr = path.split('/');
    for (let i = 0; i < pathArr.length; i++) {
        if (pathArr[i] === '' || pathArr[i] === '.') {
            pathArr.splice(i, 1);
            i--;
        } else if (pathArr[i] === '..') {
            if (i - 1 === -1) {
                pathArr.splice(i, 1);
                i--;  
            } else {
                pathArr.splice(i - 1, 2);
                i -= 2;
            }
        }
    }
    return '/' + pathArr.join('/');
}
