'use strict';

const mergeSort = require('./merge-sort.js');

describe('merge sort', () => {
  it('can sort the sample array', () => {
    const sampleArray = [8, 4, 23, 42, 16, 15];

    mergeSort(sampleArray);

    expect(sampleArray).toEqual([4, 8, 15, 16, 23, 42]);
  });

  it('can sort a reverse-sorted array', () => {
    const revSortedArr = [20, 18, 12, 8, 5, -2];

    mergeSort(revSortedArr);

    expect(revSortedArr).toEqual([-2, 5, 8, 12, 18, 20]);
  });

  it('can sort a nearly-sorted array', () => {
    const nearlySortedArr = [2, 3, 5, 7, 13, 11];

    mergeSort(nearlySortedArr);

    expect(nearlySortedArr).toEqual([2, 3, 5, 7, 11, 13]);
  });

  it('can accept a blank array', () => {
    const blankArr = [];
    
    mergeSort(blankArr);

    expect(blankArr).toEqual([]);
  });

  it('can accept a single element array', () => {
    const singleArr = [1];
    
    mergeSort(singleArr);

    expect(singleArr).toEqual([1]);
  });
});
