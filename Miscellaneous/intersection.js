const isPresent = (item, element, arr) => item == element; // && !arr.some(obj => obj === item)

function sym(...args) {
  const intersectionArr = [];
  let i = 0;
  while (i < args.length - 1) {
    const firstObj = i == 0 ? args[i] : [...new Set(intersectionArr)];
    const nextObj = args[i + 1];

    console.log(firstObj, nextObj);

    for (let j = 0; j < firstObj.length; j++) {
      if (!nextObj.some((item) => isPresent(item, firstObj[j])))
        intersectionArr.push(firstObj[j]);
      else {
        intersectionArr.splice(j, 1);
        const index = nextObj.find((item) => item === firstObj[j]);
        if (index != -1) {
          nextObj.splice(index, 1);
        }
      }
    }
    for (let k = 0; k < nextObj.length; k++) {
      if (!firstObj.some((item) => isPresent(item, nextObj[k])))
        intersectionArr.push(nextObj[k]);
    }
    i++;
  }

  console.log([...new Set(intersectionArr)]);
  return [...new Set(intersectionArr)];
}

sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
