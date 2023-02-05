const { binarySearch } = require("./BinarySearch");

{
  /*
3. How to check if array contains a number in Java?
Another interesting array problem, because array doesn't provide any
built-in method to check if any number exists or not. 
This problem is essentially how to search an element in the array.
There are two options sequential search or binary search.
You should ask the interviewer about whether an array is sorted or not,   
if the array is sorted then you can use binary search to check if
given number is present in an array or not.The complexity of binary 
search is O(logN). BTW, if interviewer says that array is not sorted 
then you can still sort an perform binary search otherwise you can
use sequential search. Time complexity of sequential search in array is O(n).
*/
}

const arr = [
  0, 3, 23, 4, 553, 6, 678, 58, 9, 9, 6, 235, 125, 6, 37, 48, 34, 67, 5, 7, 616,
  346, 3, 1, 2, 4, 2, 6, 8, 5, 7, 4,
];

function linearSearch(arr, number, counter) {
  let i = 0;

  while (i < arr.length) {
    counter++;
    if (number == arr[i]) {
      return "index: " + i + "  iteration: " + counter;
    }
    i++;
  }
  return "index: " + -1 + "  iteration: " + counter;
}

const binaryIndex = binarySearch(
  arr.sort((a, b) => a - b),
  616,
  0,
  arr.length
);
const linearIndex = linearSearch(arr, 616, 0, arr.length);
console.log(binaryIndex + "  -- ----- --  " + linearIndex);
