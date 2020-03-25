const { LLKthFromEnd } = require('./ll-kth-from-end.js');

describe('kthFromEnd', () => {
  let kthFromEndLL = new LLKthFromEnd();

  afterEach(() => {
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

describe('findMiddle', () => {
  let kthFromEndLL = new LLKthFromEnd();

  afterEach(() => {
    kthFromEndLL = new LLKthFromEnd();
  });

  it('can find middle node in a populated linked list', () => {
    kthFromEndLL.insert(4);
    let midNode = kthFromEndLL.findMiddle();
    expect(midNode.value).toEqual(4);

    kthFromEndLL.insert(3);
    kthFromEndLL.insert(2);
    kthFromEndLL.insert(1);
    midNode = kthFromEndLL.findMiddle();
    expect(midNode.value).toEqual(2);

    kthFromEndLL.insert(0);
    midNode = kthFromEndLL.findMiddle();
    expect(midNode.value).toEqual(2);
  });

  it('can return null for an empty linked list', () => {
    kthFromEndLL = new LLKthFromEnd();
    let midNode = kthFromEndLL.findMiddle();
    expect(midNode.value).toEqual(null);
  });
});
