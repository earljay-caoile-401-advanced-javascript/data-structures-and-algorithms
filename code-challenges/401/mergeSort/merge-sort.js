'use strict';

const mergeSort = (arr) => {
  let n = arr.length;

  if (n > 1) {
    const mid = n / 2;
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, n);

    mergeSort(left);
    mergeSort(right);
    mergeHelper(left, right, arr);
  }

  function mergeHelper(left, right, arr) {
    let i = 0,
      j = 0,
      k = 0;

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }

      k++;
    }

    if (i === left.length) {
      while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
      }
    } else {
      while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
      }
    }
  }
};

module.exports = mergeSort;
