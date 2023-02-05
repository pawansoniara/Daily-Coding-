// Write a function that sorts array while keeping the array structure
// . Numbers should be first then letters both in ascending order.

// let arr = [
//   [1, 2, 4, 3, "a", "b"],
//   [6, "c", 5],
//   [7, "d"],
//   ["f", "e", 8],
// ];
// let output = [
//   [1, 2, 3, 4, 5, 6],
//   [7, 8, "a"],
//   ["b", "c"],
//   ["d", "e", "f"],
// ];
let arr = [
  [1, 2, 4.4, "f", "a", "b"],
  [0],
  [0.5, "d", "X", 3, "s"],
  ["f", "e", 8],
  ["p", "Y", "Z"],
  [12, 18],
];
let output = [
  [0, 0.5, 1, 2, 3, 4.4],
  [8],
  [12, 18, "X", "Y", "Z"],
  ["a", "b", "d"],
  ["e", "f", "f"],
  ["p", "s"],
];

const sort = (obj) => {
  for (let j = 0; j < obj.length; j++) {
    for (let k = j; k < obj.length; k++) {
      if (obj[j].toString().charCodeAt(0) > obj[k].toString().charCodeAt(0)) {
        swap(obj, j, k);
      }
    }
  }
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const swapArr = (arr1, arr2, j, k) => {
  let temp = arr1[j];
  arr1[j] = arr2[k];
  arr2[k] = temp;
};

let result = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    result.push(arr[i][j]);
  }
}

sort(result);

let m = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(m, i, j);
    arr[i][j] = result[m];
    m++;
  }
}

console.log(result);
console.log(arr);
console.log(output);
