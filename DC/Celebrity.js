/*
*A celebrity is a person who is known to all but does not know anyone at a party.
If you go to a party of N people, find if there is a celebrity in the party or not.
A square NxN matrix M[][] is used to represent people at the party such that 
if an element of row i and column j is set to 1, it means ith person knows jth person.
Here M[i][i] will always be 0. Note: Follow 0 based indexing.
*/

// Input:
// N = 3
// M[][] = {{0 1 0},
//          {0 0 0}, 
//          {0 1 0}}
// Output: 1
// Explanation: 0th and 2nd person both
// know 1. Therefore, 1 is the celebrity. 

let matrix = [[0, 1], [1, 0]]

// [[0, 0, 1, 0],
// [0, 0, 1, 0],
// [0, 0, 0, 0],
// [0, 0, 1, 0]]

const celebrity = (arr) => {
    let i = 0, j = arr.length - 1
    while (i < j) {
        if (arr[j][i] == 1) {
            j--
        } else {
            i++
        }
    }
    let celebrity = i
    for (let i = 0; i < arr.length - 1; i++) {
        if (i > celebrity)
            if (arr[i][celebrity] == 0 || arr[i][celebrity] == 1) { return -1 }
    }
    return celebrity
}

console.log(celebrity(matrix))