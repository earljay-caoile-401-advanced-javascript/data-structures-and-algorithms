const { shiftArray, removeMid } = require('./array-shift.js');

describe('shiftArray', () => {
  it('can return a single element array even with a falsy array value', () => {
    const falsyArrList = [[], null, undefined];
    const num = 3;
    falsyArrList.forEach(falsyArr => {
      expect(shiftArray(falsyArr, num)).toEqual([num]);
    });
  });

  it('can return the original array even with a null or undefined num value', () => {
    const noNumList = [null, undefined];

    noNumList.forEach(falsyVal => {
      const arr = [1, 2, 3];
      expect(shiftArray(arr, falsyVal)).toEqual(arr);
    });
  });

  it('will add 0 to an array containing the value 0', () => {
    expect(shiftArray([0], 0)).toEqual([0, 0]);
  });

  it('can add a value to the middle of an array', () => {
    const num = 0;
    const evenLenArr = [1, 2, 3, 4];
    const oddLenArr = [5, 7, 13];
    const expectedArr1 = [1, 2, num, 3, 4];
    const expectedArr2 = [5, 7, num, 13];

    expect(shiftArray(evenLenArr, num)).toEqual(expectedArr1);
    expect(shiftArray(oddLenArr, num)).toEqual(expectedArr2);
  });
});

describe('removeMid', () => {
  it('can remove the middle element from an array with existing values', () => {
    const arr1 = [1];
    const arr2 = [1, 2];
    const arr3 = [1, 2, 3];
    const arr4 = [1, 2, 3, 4];

    expect(removeMid()).toEqual([]);
    expect(removeMid(arr1)).toEqual([]);
    expect(removeMid(arr2)).toEqual([1]);
    expect(removeMid(arr3)).toEqual([1, 3]);
    expect(removeMid(arr4)).toEqual([1, 2, 4]);
  });
});
