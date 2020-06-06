'use strict';

const insertionSort = require('./insertion-sort.js');

describe('insertion sort', () => {
  it('can sort the sample array', () => {
    const sampleArray = [8, 4, 23, 42, 16, 15];

    insertionSort(sampleArray);

    expect(sampleArray[0]).toEqual(4);
    expect(sampleArray[1]).toEqual(8);
    expect(sampleArray[2]).toEqual(15);
    expect(sampleArray[3]).toEqual(16);
    expect(sampleArray[4]).toEqual(23);
    expect(sampleArray[5]).toEqual(42);
  });
});
