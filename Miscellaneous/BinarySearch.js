let arr = []; // [11, 22, 33, 44, 55];

for (let i = 0; i < 5000000; i++) {
  arr[i] = i;
}

function binarySearch(arr, number, beg, end, counter = 0) {
  counter++;

  let mid = parseInt((beg + end) / 2);

  if (arr[mid] < number) {
    return binarySearch(arr, number, mid + 1, end, counter);
  }
  if (arr[mid] > number) {
    return binarySearch(arr, number, beg, mid - 1, counter);
  }
  if (arr[mid] == number) {
    return "index: " + mid + "  iteration: " + counter;
  }
  return "index: " + -1 + "  iteration: " + counter;
}

const a = binarySearch(arr, 256983, 0, arr.length);
module.exports = { binarySearch };
