const { LLKthFromEnd } = require('./ll-kth-from-end.js');

describe('LLKthFromEnd', () => {
  let kthFromEndLL;

  beforeEach(() => {
    kthFromEndLL = new LLKthFromEnd();
  });

  it('can return a value for LLs that contain input value', () => {
    kthFromEndLL.insert(2);
    kthFromEndLL.insert(8);
    kthFromEndLL.insert(3);
    kthFromEndLL.insert(1);

    expect(kthFromEndLL.kthFromEnd(0)).toEqual(2);
    expect(kthFromEndLL.kthFromEnd(1)).toEqual(8);
    expect(kthFromEndLL.kthFromEnd(2)).toEqual(3);
    expect(kthFromEndLL.kthFromEnd(3)).toEqual(1);
  });

  it('can throw an error for k values out of range', () => {
    kthFromEndLL.insert(2);
    kthFromEndLL.insert(8);
    kthFromEndLL.insert(3);
    kthFromEndLL.insert(1);

    expect(() => kthFromEndLL.kthFromEnd(-1)).toThrow();
    expect(() => kthFromEndLL.kthFromEnd(6)).toThrow();
  });
});
