// Mine

function findFirstDouble(array) {
  const arrayAsObj = {};
  for (let i = 0; i < array.length; i++) {
    if (arrayAsObj.hasOwnProperty(array[i])) {
      return array[i];
    }
    arrayAsObj[array[i]] = true;
  }
}

const array = [2, 1, 2, 5, 5, 2, 4, 5];

function findFirstNextDouble(array) {
  const arrayAsObj = {};
  for (let i = 0; i < array.length; i++) {
    if (arrayAsObj.hasOwnProperty(array[i])) {
      if (i - arrayAsObj[array[i]] === 1) return array[i];
    }
    arrayAsObj[array[i]] = i;
  }
  return undefined;
}


function firstRecurringCharacter(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
}

alert(`first double of ${array} is ${findFirstDouble(array)}`);

alert(`solving by ZTM ${firstRecurringCharacter(array)}`);

alert(`first next double of ${array} is ${findFirstNextDouble(array)}`);


// ZTM

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if(input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined
}

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i;
    }
  }
  return undefined
}

firstRecurringCharacter2([1,5,5,1,3,4,6])


//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
