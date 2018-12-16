// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

function isValid(s) {
    let arr = s.split(/\s*/);
    let stack = [];
    let top = -1;
    for(let i = 0, len = arr.length; i < len; i++) {
        switch(arr[i]) {
            case '{' :
                stack.push(arr[i]);
                top++;
                break;
            case '[' :
                stack.push(arr[i]);
                top++;
                break;
            case '(' :
                stack.push(arr[i]);
                top++;
                break;
            case '}' :
                if(stack[top] === '{') {
                    stack.pop();
                    top--;
                } else {
                    return false;
                }
                break;
            case ']' :
                if(stack[top] === '[') {
                    stack.pop();
                    top--;
                } else {
                    return false;
                }
                break;
            case ')' :
                if(stack[top] === '(') {
                    stack.pop();
                    top--;
                } else {
                    return false;
                }
                break;
        }
    }
    return top === -1;
}

//更快的方法(来源于网站)
const LP = '(';
const RP = ')';
const LR = '{';
const RR = '}';
const LB = '[';
const RB = ']';

function isLeftSymbol(ch) {
    return ch === LP || ch === LB || ch === LR;
}

function match(ch1, ch2) {
    // ch1 (
    // ch2 )
    if (ch1 === LP && ch2 === RP) return true;
    if (ch1 === LR && ch2 === RR) return true;
    if (ch1 === LB && ch2 === RB) return true;

    return false;
}

function isValid(input) {
    // input :: ([])
    let stack = [];
    // stack
        // 0 : (

    for (let i = 0; i < input.length; i++) {
        const el = input[i];
        // i  :: 3
        // el :: )

        // push in to the stack if its a left something
        if (isLeftSymbol(el)) {
            stack.push(el);
            continue;
        }

        // for each right something, the top of the stack must match it
        if (match(stack[stack.length - 1], el)) {
            stack.pop();
        } else {
            return false;
        }
    }

    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
}