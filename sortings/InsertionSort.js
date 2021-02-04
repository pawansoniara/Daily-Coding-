let arr = [10, 80, 30, 90, 40, 50, 70, 1, 4, 356, 523, 4, 5, 23, 23, 6];
let loop = 0;

function insertionSort(length) {
  for (let i = 0; i <= length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      
      loop++;
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
  }
}

console.log("before", "loop :" + loop, arr);
insertionSort(arr.length - 1);
console.log("after", "loop :" + loop, arr);
