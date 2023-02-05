{
  /* 
How to find duplicate number on Integer array in Java? (solution)
An array contains n numbers ranging from 0 to n-2.
There is exactly one number is repeated in the array. 
You need to write a program to find that duplicate number.
For example, if an array with length 6 contains numbers {0, 3, 1, 2, 3}, 
then duplicated number is 3. Actually,
this problem is very similar to previous one and you can apply 
the same trick of comparing actual sum
of an array to expected sum of series to find out that duplicate.
This is generally asked as follow-up question of previous problem */
}

const arr = [0, 3, 1, 2, 4, 2, 6, 8, 5, 7, 4];
const duplicateNumbers = [];
let i = 0,
  j = 1;

while (i < arr.length) {
  let j = i + 1;
  while (j < arr.length) {
    if (arr[i] == arr[j]) {
      duplicateNumbers.push(arr[i]);
    }
    j++;
  }
  i++;
}

console.log(duplicateNumbers);
