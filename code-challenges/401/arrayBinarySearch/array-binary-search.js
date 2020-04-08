'use strict';

const arrayBinarySearch = (arr, target) => {
  if (!arr || !arr.length) return -1;

  let low = 0;
  let high = arr.length - 1;
  let mid;

  while (low <= high) {
    mid = low + ((high - low) >>> 1);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

module.exports = { arrayBinarySearch };
