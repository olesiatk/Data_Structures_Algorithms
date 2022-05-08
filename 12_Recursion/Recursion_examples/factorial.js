
// Mine
function findFactorialRecursiveMine(number) {
  if (number == 2) return number;
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterativeMine(number) {
  let answer = 1;
  for (let i = number; i > 1; i--) {
    answer *= i;
  }
  return answer;
}

console.log(findFactorialRecursiveMine(5));
console.log(findFactorialIterativeMine(5));


// ZTM
function findFactorialIterative(number) {
  let answer = 1;
  // you actually no longer need the if statement because of the for loop
  // if (number === 2) {
  //   answer = 2;
  // }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

function findFactorialRecursive(number) {
  if (number === 2) {
    return 2;
  }
  return number * findFactorialRecursive(number - 1);
}

findFactorialIterative(5);