
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// Mine
function bubbleSortMine(arr) {
  let globalCount = 0;
  const array = arr;
  const sort = (length) => {
    let count = 0;
    for (let i = 1; i < length; i++) {
      if (array[i] < array[i - 1]) {
        const save = array[i];
        array[i] = array[i - 1];
        array[i - 1] = save;
        count++;
        globalCount++;
      }
    }
    return count;
  };

  let length = array.length;

  while (sort(length)) {
    length--;
  }

  console.log("globalCount", globalCount);
  return array;
}

// ZTM
function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        //Swap the numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
}

// bubbleSort(numbers);
// console.log(numbers);

bubbleSortMIne(numbers);
console.log(numbers);