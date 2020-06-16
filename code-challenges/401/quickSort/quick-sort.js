'use strict';

const quickSort = (arr) => {
  quickHelper(arr, 0, arr.length - 1);
};

const quickHelper = (arr, left, right) => {
  if (left < right) {
    const position = partition(arr, left, right);

    quickHelper(arr, left, position - 1);
    quickHelper(arr, position + 1, right);
  }
};

const partition = (arr, left, right) => {
  const pivot = arr[right];
  let low = left - 1;

  for (let i = left; i < right; i++) {
    if (arr[i] <= pivot) {
      low++;
      swap(arr, i, low);
    }
  }

  swap(arr, right, low + 1);
  return low + 1;
};

const swap = (arr, i, j) => {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
};

module.exports = quickSort;
