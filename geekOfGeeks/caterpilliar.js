let leaves = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let c =3
let cs = [2, 3, 5];

let loopCount = 0;

for (let csObj of cs) {
  for (let [index, lObj] of leaves.entries()) {
    loopCount++;
    if (lObj % csObj == 0) {
      leaves.splice(index, 1);
    }
  }
}

// let leafIndex = 0;
// while (leafIndex < leaves.length) {
//   let c = 0;
//   let leaf = leaves[leafIndex];
//   while (c < cs.length) {
//     const csObj = cs[c];
//     if (leaf % csObj == 0) {
//       // console.log("leaf", leaf);
//       leaves.splice(leafIndex, 1);
//       leafIndex == -1;
//     }
//     // console.log("leafIndex ", leaf, leaves[leafIndex]);
//     c++;
//     if (cs[c] > leaf) {
//       // can't eat previous
//       c = 0;
//       break;
//     }
//   }

//   leafIndex++;
// }

console.log(leaves,leaves.length);


