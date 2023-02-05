`How to find largest and smallest number in unsorted array? (solution)
This is a rather simple array interview question.
You have given an unsorted integer array and you need to find the largest and smallest element in the array. 
Of course, you can sort the array and then pick the top and bottom element but that would cost you O(NLogN)
because of sorting , getting element in array with index is O(1) operation.`;

const arr = [-200, 34, 21, -807, 92, 27, 2, 211, -90, 92, -87];

const findLargestAndSmallestNumber = (arr) => {
  let i = 0,
    small = -1,
    large = 0,
    counter = 0;

  while (i < arr.length) {
    counter++;

    if (arr[i] > large) {
      large = arr[i];
    }
    if (arr[i] < small) {
      small = arr[i];
    }
    // if (arr[i] > arr[arr.length - 1 - i]) {
    //   if (large < arr[i]) {
    //     large = arr[i];
    //   }
    //   if (small > arr[i]) {
    //     small = arr[i];
    //   }
    // }
    // if (arr[i] < arr[arr.length - 1 - i]) {
    //   if (large < arr[arr.length - 1 - i]) {
    //     large = arr[arr.length - 1 - i];
    //   }
    //   if (small > arr[arr.length - 1 - i]) {
    //     small = arr[arr.length - 1 - i];
    //   }
    // }

    i++;
  }

  return (
    "Largest: " +
    large +
    " ------ Smallest: " +
    small +
    " ------ iterations: " +
    counter
  );
};

const numbers = findLargestAndSmallestNumber(arr);
console.log(numbers);
