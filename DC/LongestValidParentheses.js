// Given a string S consisting of opening and closing parenthesis '(' and ')'.
//  Find length of the longest valid parenthesis substring.

// A parenthesis string is valid if:

// For every opening parenthesis, there is a closing parenthesis.
// Opening parenthesis must be closed in the correct order.

const S = '(((()()))())'
const maxLength = (s) => {
    let p = 0
    let arr = [];
    for (let i = 0; i <= s.split('').length - 1; i++) {
        if (arr[arr.length - 1] == "(" && s[i] === ")") {
            arr.pop();
            p += 2
            continue;
        }
        arr.push(s[i])
    }
    return p
}

console.log(maxLength(S));
