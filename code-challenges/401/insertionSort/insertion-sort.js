'use strict';

module.exports = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let tmp = arr[i];

    while (j >= 0 && tmp < arr[j]) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = tmp;
  }
};
