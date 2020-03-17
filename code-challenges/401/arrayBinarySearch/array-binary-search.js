'use strict';

const arrayBinarySearch = (nums, target) => {
  let low = 0;
  let high = nums.length - 1;
  let mid;

  while (low <= high) {
    mid = Math.round((low + high) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      low = mid + 1;
    }

    if (nums[mid] > target) {
      high = mid - 1;
    }
  }

  return -1;
};

module.exports = { arrayBinarySearch };
