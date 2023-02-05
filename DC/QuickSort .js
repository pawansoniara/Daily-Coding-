const arr = [
  4, 6, 1, 5, 10, 3, 12, 7, 2, 11, 9, 3, 2124, 5, 12, 5, 52646, 34, 6, 75, 8,
  1366, 35, 16, 6, 347667, 7, 13, 6234, 62, 6463,
];

swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

partition = (arr, start, end) => {
  let pivot = arr[end],
    i = start - 1,
    j = start;

  while (j < end) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
    j++;
  }
  swap(arr, i + 1, end);
  return i + 1;
};

let counter = 0;

const quickSort = (arr, beg, end) => {
  if (beg < end) {
    counter++;
    p = partition(arr, beg, end);
    quickSort(arr, beg, p - 1);
    quickSort(arr, p + 1, end);
  }
};

quickSort(arr, 0, arr.length - 1);
console.log(arr, counter, arr.length);
module.exports = { quickSort };
