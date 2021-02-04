let arr = [10, 80, 30, 90, 40, 50, 70, 1, 4, 356, 523, 4, 5, 23, 23, 6];

function swap(s, d) {
  const t = arr[s];
  arr[s] = arr[d];
  arr[d] = t;
}

let stack = 0;
let loop = 0;
function quickSort(start, end) {
  if (start >= end) return;
  stack++;

  let pivot = arr[end];
  let counter = start - 1;
  for (let i = start; i <= end; i++) {
    loop++;
    if (arr[i] <= pivot) {
      counter++;
      swap(i, counter);
    }
  }

  quickSort(start, counter - 1);
  quickSort(counter + 1, end);
}

console.log("before", "loop :" + loop, arr);
quickSort(0, arr.length - 1);
console.log("after", "loop :" + loop, arr);
