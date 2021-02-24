/**

Good morning! Here's your coding interview problem for today.
This problem was asked by Google.
Find the minimum number of coins required to make n cents.
You can use standard American denominations, that is, 1¢, 5¢, 10¢, and 25¢.
For example, given n = 16, return 3 since we can make it with a 10¢, a 5¢, and a 1¢.
**/

const n = 16;
let numberOfCoinsRequired = [];

let i = n;
while (i > 0) {
  if (i >= 10) {
    i = i - 10;
    numberOfCoinsRequired.push(10);
  } else if (i >= 5) {
    i = i - 5;
    numberOfCoinsRequired.push(5);
  } else if (i >= 2) {
    i = i - 2;
    numberOfCoinsRequired.push(2);
  } else if (i >= 1) {
    i = i - 1;
    numberOfCoinsRequired.push(1);
  }
}

console.log(
  "numberOfCoinsRequired",
  numberOfCoinsRequired.length,
  numberOfCoinsRequired
);
