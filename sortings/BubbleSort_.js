const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j].toString().charCodeAt(0) < arr[i].toString().charCodeAt(0)) {
        swap(arr, i, j);
      }
    }
  }

  return arr;
};

module.exports = { bubbleSort };
