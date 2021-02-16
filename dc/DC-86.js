
/**
This problem was asked by Google.
Given a string of parentheses, write a function to compute the minimum number of parentheses to be removed to make the string valid (i.e. each open parenthesis is eventually closed).
For example, given the string "()())()", you should return 1. Given the string ")(", you should return 2, since we must remove all of them.
 */



const value=process.argv[2] || ")())(()";
const aa=[];

for (let index = 0; index < value.length; index++) {
    const element = value.substr(index,1);
    if(element===')' && aa[aa.length-1] === '('){        
        aa.pop()
    }else{
        aa.push(element);
    } 
}

console.log("result",aa,aa.length)

