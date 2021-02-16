/**
 * 
 * 
 This problem was asked by Airbnb.

We're given a hashmap associating each courseId key with a list of courseIds values, 
which represents that the prerequisites of courseId are courseIds. 
Return a sorted ordering of courses such that we can finish all courses.

Return null if there is no such ordering.

For example, given {'RIGHT': ['LEFT', 'TOP'], 'TOP': ['LEFT'], 'LEFT': []}, should return ['LEFT', 'TOP', 'RIGHT'].
 * 
 * 
 */




const param = { 'RIGHT': ['LEFT', 'TOP'], 'TOP': ['LEFT'], 'LEFT': ['AAA'] };

const total = [...new Set(Object.keys(param).reduce((p, c) => {

    return [c, ...p, ...param[c]];
}, []))];

console.log("total", total);
const result = [];


function cleanIfChildren(v) {
    
    if (!param[v] || param[v].length == 0) {
        delete param[v]
        Object.keys(param).forEach(k => {
            const index = param[k].findIndex(pk => pk == v);
            if (index > -1) param[k].splice(index, 1);
        });
        return true;
    }

    return false;
}

let counter = 0;
while (total.length) {
    const v = total[counter];
    if (cleanIfChildren(v)) {
        result.push(v);
        total.splice(counter, 1)
    }

    counter++;
    counter = counter>total.length-1 ? 0 : counter;

}


console.log("result", result);