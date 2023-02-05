function fibonacci(n) {
  let arr = [0, 1],
    i = 2;

  while (i < n) {
    arr.push(arr[i - 2] + arr[i - 1]);
    i++;
  }
  return arr;
}

function findFibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return findFibonacci(n - 1) + findFibonacci(n - 2);
}


console.log(fibonacci(11));
console.log(findFibonacci(10));
