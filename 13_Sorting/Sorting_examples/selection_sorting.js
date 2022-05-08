const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


// MINE 
function selectionSortMine(arr) {
  let globalCount = 0;
  const array = arr;
  const sort = (n) => {
    let count = 0;
    let min = n;
    for (let i = n + 1; i < array.length; i++) {
      if (array[i] < array[min]) {
        min = i;
        count++;
        globalCount++;
      }
    }
    let temp = array[n];
    array[n] = array[min];
    array[min] = temp;
    return count;
  };

  let startN = 0;

  while (sort(startN)) {
    startN++;
  }

  console.log("globalCount", globalCount);
  return array;
}

// ZTM
function selectionSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    // set current index as minimum
    let min = i;
    let temp = array[i];
    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        //update minimum if current is lower that what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

selectionSortMine(numbers);
console.log(numbers);
