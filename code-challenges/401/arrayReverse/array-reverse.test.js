const {
  arrayReverse,
  arrayReverse2,
  arrayReverse3,
} = require('./array-reverse.js');

const funcArr = [arrayReverse, arrayReverse2, arrayReverse3];

describe('arrayReverse', () => {
  it('can accept an empty array, null, or undefined', () => {
    funcArr.forEach(arrFunc => {
      const falsyArrList = [[], null, undefined];
      falsyArrList.forEach(falsyArr => {
        arrFunc(falsyArr);
        expect(falsyArr).toEqual(falsyArr);
      });
    });
  });

  it('can accept an array with 1 element', () => {
    funcArr.forEach(arrFunc => {
      let inputArr = [1];
      arrFunc(inputArr);
      expect(inputArr).toEqual([1]);
    });
  });

  it('can accept an array with 2 elements', () => {
    funcArr.forEach(arrFunc => {
      let inputArr = [1, 2];
      let expectedRes = [2, 1];
      arrFunc(inputArr);
      expect(inputArr).toEqual(expectedRes);
    });
  });

  it('can accept arrays of various lengths greater than 2', () => {
    funcArr.forEach(arrFunc => {
      const testInput1 = [1, 2, 3, 4, 5, 6];
      const testInput2 = [89, 2354, 3546, 23, 10, -923, 823, -12];
      const testInput3 = [
        2,
        3,
        5,
        7,
        11,
        13,
        17,
        19,
        23,
        29,
        31,
        37,
        41,
        43,
        47,
        53,
        59,
        61,
        67,
        71,
        73,
        79,
        83,
        89,
        97,
        101,
        103,
        107,
        109,
        113,
        127,
        131,
        137,
        139,
        149,
        151,
        157,
        163,
        167,
        173,
        179,
        181,
        191,
        193,
        197,
        199,
      ];
      const truthyArrList = [testInput1, testInput2, testInput3];

      const testOutput1 = [6, 5, 4, 3, 2, 1];
      const testOutput2 = [-12, 823, -923, 10, 23, 3546, 2354, 89];
      const testOutput3 = [
        199,
        197,
        193,
        191,
        181,
        179,
        173,
        167,
        163,
        157,
        151,
        149,
        139,
        137,
        131,
        127,
        113,
        109,
        107,
        103,
        101,
        97,
        89,
        83,
        79,
        73,
        71,
        67,
        61,
        59,
        53,
        47,
        43,
        41,
        37,
        31,
        29,
        23,
        19,
        17,
        13,
        11,
        7,
        5,
        3,
        2,
      ];
      const expectedRes = [testOutput1, testOutput2, testOutput3];

      let i = 0;
      truthyArrList.forEach(truthyArr => {
        arrFunc(truthyArr);
        expect(truthyArr).toEqual(expectedRes[i++]);
      });
    });
  });
});
