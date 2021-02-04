let arr = [10, 80, 30, 90, 40, 50, 70, 1, 4, 356, 523, 4, 5, 23, 23, 6];
let loop = 0;

function swap(s, d) {
  const t = arr[s];
  arr[s] = arr[d];
  arr[d] = t;
}

function bubbleSort(start, end) {
  while (start < end) {
    for (let i = start + 1; i <= end; i++) {
      loop++;
      if (arr[i] < arr[start]) {
        swap(start, i);
      }
    }
    start++;
  }
}

console.log("before", "loop :" + loop, arr);
bubbleSort(0, arr.length - 1);
console.log("after", "loop :" + loop, arr);

