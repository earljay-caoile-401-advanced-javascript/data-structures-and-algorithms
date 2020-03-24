'use strict';

const LinkedList = require('./linked-list.js');

describe('linkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  it('can instantiate an empty linked list', () => {
    expect(linkedList.head).toEqual(null);
  });

  it('can add values to a linked list with insert()', () => {
    linkedList.insert(3);
    expect(linkedList.head.value).toEqual(3);

    linkedList.insert(7);
    expect(linkedList.head.value).toEqual(7);
    expect(linkedList.head.next.value).toEqual(3);
  });

  it('can search for values in a linked list with includes()', () => {
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(-4);

    expect(linkedList.includes(1)).toEqual(true);
    expect(linkedList.includes(2)).toEqual(true);
    expect(linkedList.includes(3)).toEqual(true);
    expect(linkedList.includes(-4)).toEqual(true);
    expect(linkedList.includes(4)).toEqual(false);
    expect(linkedList.includes(0)).toEqual(false);
  });

  it('can create a string showing the list of node values with toString()', () => {
    expect(linkedList.toString()).toEqual('NULL');

    linkedList.insert(6);
    expect(linkedList.toString()).toEqual('6 -> NULL');

    linkedList.insert(5);
    expect(linkedList.toString()).toEqual('5 -> 6 -> NULL');

    linkedList.insert(4);
    expect(linkedList.toString()).toEqual('4 -> 5 -> 6 -> NULL');
  });
});
