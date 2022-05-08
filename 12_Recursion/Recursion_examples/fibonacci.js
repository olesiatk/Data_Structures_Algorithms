// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

// Mine
function fibonacciIterativeMine(n) {
  if (n < 2) return 1;
  let sum2 = 1;
  let sum1 = 0;
  for (let k = 2; k < n; k++) {
    const temp = sum2;
    sum2 += sum1;
    sum1 = temp;
  }
  return sum1 + sum2;
}

console.log(fibonacciIterativeMine(6));

function fibonacciRecursiveMine(n) {
  if (n <= 2) return 1;
  return fibonacciRecursiveMine(n - 1) + fibonacciRecursiveMine(n - 2);
}

console.log(fibonacciRecursiveMine(6));


// ZTM
function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}
fibonacciIterative(3);

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}