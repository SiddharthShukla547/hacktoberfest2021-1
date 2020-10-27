/// function that sorts an array using selection sort
const selectionSort = (inputArr) => {
  for (let i = 0; i < inputArr.length - 1; i++) {
    let foundMinimum = false;
    let minIndex = i;
    for (let j = i + 1; j < inputArr.length; j++) {
      if (inputArr[j] < inputArr[minIndex]) {
        foundMinimum = true;
        minIndex = j;
      }
    }
    if (foundMinimum) {
      inputArr = swap(inputArr, i, minIndex);
    }
  }
  return inputArr;
};

// swap function
const swap = (inputArr, i, minIndex) => {
  let temp = inputArr[i];
  inputArr[i] = inputArr[minIndex];
  inputArr[minIndex] = temp;
  return inputArr;
};

//test function
console.log(selectionSort([90, 12, 58, -2, -5, -30]));
