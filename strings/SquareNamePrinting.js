let arr = "Davinder".split(""),
  arrReverse = [...arr].reverse(),
  i = 0,
  j = 0,
  end = arr.length - 1;

console.log(arr.join(""));

while (i < end) {
  if (i < end - 1) {
    console.log(arr[(j += 1)] + " ".repeat(end - 1) + arr[end - j]);
  }
  i++;
}

console.log(arrReverse.join(""));
