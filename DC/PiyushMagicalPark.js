/*
Input Format
First line of input contains four integers – N,M,K and S.
Next N lines contains M space separated characters which can be '.', '*' or '#'.

Constraints
1 <= N,M,K,S <= 100

Output Format
Print "Yes" or "No" depending on whether Piyush can escape or not.
 If the answer is "Yes", also print the amount of strength he escaped with.

Sample Input
4 4 5 20
. . * .
. # . .
. * . .
. # * *

Sample Output
Yes
13 */

let m = 4,
  n = 4,
  s = 20,
  k = 5;

let arr = [
  [".", ".", "*", "."],
  [".", "#", ".", "."],
  [".", "*", ".", "."],
  [".", "#", "*", "*"],
];

for (let i = 0; i < arr.length; i++) {
  s++;
  if (i == arr.length - 1 && s > k) {
    console.log(s, "Yes");
    return;
  }

  if (s <= k) {
    console.log(s, "No");
    return;
  }

  for (let j = 0; j < arr[i].length; j++) {
    if (s <= k) {
      console.log(s, "No");
      return;
    }

    let obj = arr[i][j];
    if (obj === "#") {
      break;
    }
    if (obj === ".") {
      s -= 3;
    }
    if (obj === "*") {
      s += 4;
    }
    if (j == arr[i].length - 1) {
      s++;
    }
  }
}
