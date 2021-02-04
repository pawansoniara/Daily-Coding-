let arr = [10, 80, 30, 90, 40, 50, 70, 1, 4, 356, 523, 4, 5, 23, 23, 6];
let loop = 0;

function swap(s, d) {
  const t = arr[s];
  arr[s] = arr[d];
  arr[d] = t;
}

function selectionSort(length) {
  for (let i = 0; i < length; i++) {
    for (let j = i ; j <= length; j++) {
      loop++;
      if (arr[i] > arr[j]) {
        swap(i, j);
      }
    }
  }
}

console.log("before", "loop :" + loop, arr);
selectionSort(arr.length - 1);
console.log("after", "loop :" + loop, arr);
