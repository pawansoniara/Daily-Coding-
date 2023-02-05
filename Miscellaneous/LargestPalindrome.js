`A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two n-digit numbers.
`;

function isPalindrome(number) {
  let i = 0;
  let arr = number.split("");
  while (i < arr.length / 2) {
    if (arr[i] != arr[arr.length - 1 - i]) {
      return false;
    }
    i++;
  }
  return true;
}

function getNDigitNumber(n) {
  let num = 1;
  for (let i = 0; i < n; i++) {
    num *= 10;
  }
  return num;
}

function largestPalindromeProduct(n) {
  let number = 0;
  const length = getNDigitNumber(n);
  for (let i = 1; i < length; i++) {
    for (let j = i; j < length; j++) {
      let sum = i * j;
      if (isPalindrome(sum.toString()) && number < sum) {
        number = sum;
      }
    }
  }
  return number;
}

const number = largestPalindromeProduct(3);
console.log(number)
