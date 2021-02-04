const fName = process.argv[2].split("");
const abc = fName
let i = 0,
  maxSize = fName.length / 2;

function swap(s, d) {
  if (s == d) {
    return;
  }

  fName[s] = fName[s] + fName[d];
  fName[d] = fName[s].split("")[0];
  fName[s] = fName[s].split("")[1];
}

while (i < maxSize) {
  swap(i, fName.length - i - 1);
  i++;
}

console.log(fName.join(""));
