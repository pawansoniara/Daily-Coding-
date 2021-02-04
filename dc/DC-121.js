let arr = "waterrbladoetddwawedrdf".split("");

let i = 0;

let maxSize = arr.length / 2;

let loop = 0;
let removed = [];
console.log("SIZE :: " + arr.length);

while (i < maxSize) {
  let last = arr.length - i - 1;

  while (i < last && arr[i] != arr[last]) {
    loop++;

    removed.push(arr.splice(last, 1));

    last--;
  }
  loop++;

  i++;
}

console.log("complex :: " + loop, arr.join(""));
console.log("removed :: "+removed.length, removed);
