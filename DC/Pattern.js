let arr = [
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
];

function makeLine(length) {
  var line = "";
  for (var i = 1; i <= length; i++) {
    line += "*".repeat(i) + "\n";
  }
  return line;
}


for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(makeLine(j));
    
  }
}
