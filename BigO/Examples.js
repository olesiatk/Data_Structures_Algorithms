    // TIME COMPLEXITY
    console.log('--------TIME COMPLEXITY--------')
    // O(1)
    console.log('Example: --------O(1)--------')
function sayText(input) {
    console.log(input);
}

sayText('Hello!')


    // O(n)
    console.log('Example: --------O(n)--------')
function logAllItemsOfArray(array) {
    for (let item of array) {
        console.log('item:', item)
    }
}

logAllItemsOfArray([1,2,3,4,5]);


    // O(2+4*n) => O(n)
function funChallenge(input) {
    let a = 10;
    a = 50 + 3;
  
    for (let i = 0; i < input.length; i++) {
      anotherFunction();
      let stranger = true;
      a++;
    }
    return a;
}


    // O(a+b)
    console.log('Example: --------O(a+b)--------')
function compressTwoBoxed(box1, box2) {
    for(let i=0; i<box1.length; i++) {
        console.log('box1:', box1[i])
    }
    for(let i=0; i<box2.length; i++) {
        console.log('box2:', box2[i])
    }
}

compressTwoBoxed([1,2,3,4,5], [1,2,3])


    // O(n^2)
    console.log('Example: --------O(n^2)--------')
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log('Pair: ', array[i], array[j])
    }
  }
}

logAllPairsOfArray(['a', 'b', 'c', 'd', 'e'])


    // O(a*b)
    console.log('Example: --------O(a*b)--------')
function compressTwoInputBoxed(box1, box2) {
    for(let i=0; i<box1.length; i++) {
        for(let j=0; j<box2.length; j++) {
            console.log('box1:', box1[i])
            console.log('box2:', box2[j])
        }
    }

}

compressTwoInputBoxed([1,2,3,4,5], [1,2,3])


    // O(n!)
    console.log('Example: --------O(n!)--------')
let count = 0;
function logFactorial(n) {
    count++;
    console.log('count', count);
    for(let i=0; i<n; i++) {
        logFactorial(n-1);
    }
}

logFactorial(3)

    // SPACE COMPLEXITY
    console.log('--------SPACE COMPLEXITY--------')
    // Space complexity O(1)
    console.log('Example:--------Space complexity O(1)--------')
function boooo(n) {
    for (let i = 0; i < n; i++) {
        console.log('booooo');
    }
}
boooo(6)


    // Space complexity O(n)
    console.log('Example:--------Space complexity O(n)--------')
function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
        hiArray[i] = 'hi';
    }
    console.log(hiArray);
}

arrayOfHiNTimes(6)