function pairwise(arr, number) {
    let pairs = [];
    let indexes = [];
  
    let i = 0;
    while (i < arr.length) {
      let j = i + 1;
      while (j < arr.length) {
        if (arr[i] + arr[j] == number && !indexes.some((item) =>  item == j ||item == i)) {
          pairs.push(arr[i], arr[j]);
          indexes.push(i, j);
          break;
        }
        j++;
      }
  
      i++;
    }
  
    const sum = indexes.reduce((p, c) => {
      return c + p;
    }, 0);
  
    return sum;
  }
  
  pairwise([1, 4, 2, 3, 0, 5], 7);