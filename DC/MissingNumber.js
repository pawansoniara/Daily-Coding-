{
  /*How to find the missing number in integer array of 1 to 100? (solution)
This is one of the most simple array problems you will see, mostly asked in a telephonic round of Interview. 
You have given an integer array which contains numbers from 1 to 100 but one number is missing,
 you need to write a Java program to find that missing number in an array. 
 You cannot use any open source library or Java API method which solves this problem. 
 One trick to solve this problem is to calculate sum of all numbers in the array and 
 compare with expected sum, the difference would be the missing number.
*/
}

let arr = [];
for (let i = 0; i < 200; i++) {
  if (i == 79) {
    arr[i] = 0;
    continue;
  }
  arr[i] = i;
}
const naturalNumberSum = value => (value * (value + 1)) / 2;
let foundSum = 0;
for (let i = 1; i < 200; i++) {
  foundSum += arr[i];
}
let missingNumber = naturalNumberSum(199) - foundSum;

console.log(missingNumber);
