/* eslint-disable indent */
/* eslint-disable no-case-declarations */
'use strict';

const shiftArray = (arr, num) => {
  if (!num && num !== 0) return arr;

  if (!arr && num !== 0) return [num];

  if (arr.length < 1) {
    arr[0] = num;
    return arr;
  }

  const mid = Math.round(arr.length / 2);
  let outside = num;

  for (let i = mid; i < arr.length; i++) {
    let inside = arr[i];
    arr[i] = outside;
    outside = inside;
  }

  arr.push(outside);
  return arr;
};

const removeMid = arr => {
  if (!arr) return arr;

  switch (arr.length) {
    case 1:
    case 2:
      arr.pop();
      break;
    case 3:
      arr[1] = arr.pop();
      break;
    default:
      const mid = Math.round(arr.length / 2);
      for (let i = arr.length - 1; i > mid; i--) {
        arr[i - 1] = arr.pop();
      }
      break;
  }

  return arr;
};

module.exports = { shiftArray, removeMid };
