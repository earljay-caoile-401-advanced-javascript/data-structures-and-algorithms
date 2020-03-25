'use strict';

const LinkedListInsertions = require('./linked-list-insertions.js');

describe('linkedListInsertions', () => {
  let llInsertions = new LinkedListInsertions();

  afterEach(() => {
    llInsertions = new LinkedListInsertions();
  });

  it('can instantiate an empty linked list', () => {
    expect(llInsertions.head).toEqual(null);
  });

  it('can add values to the end of a linked list with append()', () => {
    llInsertions.append(1);
    expect(llInsertions.head.value).toEqual(1);

    llInsertions.append(2);
    expect(llInsertions.head.value).toEqual(1);
    expect(llInsertions.head.next.value).toEqual(2);

    llInsertions.append(3);
    expect(llInsertions.head.value).toEqual(1);
    expect(llInsertions.head.next.value).toEqual(2);
    expect(llInsertions.head.next.next.value).toEqual(3);
  });

  it('can add a new node with a given value before an existing node with another given value with insertBefore()', () => {
    llInsertions.insert(4);

    llInsertions.insertBefore(4, 3);
    expect(llInsertions.head.value).toEqual(3);
    expect(llInsertions.head.next.value).toEqual(4);

    llInsertions.insertBefore(3, 5);
    expect(llInsertions.head.value).toEqual(5);
    expect(llInsertions.head.next.value).toEqual(3);
    expect(llInsertions.head.next.next.value).toEqual(4);

    llInsertions.insertBefore(4, 6);
    expect(llInsertions.head.value).toEqual(5);
    expect(llInsertions.head.next.value).toEqual(3);
    expect(llInsertions.head.next.next.value).toEqual(6);
    expect(llInsertions.head.next.next.next.value).toEqual(4);
    expect(llInsertions.head.next.next.next.next).toEqual(null);
  });

  it('can add a new node with a given value after an existing node with another given value with insertAfter()', () => {
    llInsertions.insert(4);

    llInsertions.insertAfter(4, 3);
    expect(llInsertions.head.value).toEqual(4);
    expect(llInsertions.head.next.value).toEqual(3);

    llInsertions.insertAfter(3, 5);
    expect(llInsertions.head.value).toEqual(4);
    expect(llInsertions.head.next.value).toEqual(3);
    expect(llInsertions.head.next.next.value).toEqual(5);

    llInsertions.insertAfter(4, 6);
    expect(llInsertions.head.value).toEqual(4);
    expect(llInsertions.head.next.value).toEqual(6);
    expect(llInsertions.head.next.next.value).toEqual(3);
    expect(llInsertions.head.next.next.next.value).toEqual(5);
  });

  it('can delete a node', () => {
    llInsertions.insert(3);
    llInsertions.insert(2);
    llInsertions.insert(1);
    llInsertions.delete(2);

    expect(llInsertions.head.value).toEqual(1);
    expect(llInsertions.head.next.value).toEqual(3);

    llInsertions.delete(1);
    expect(llInsertions.head.value).toEqual(3);
    expect(llInsertions.head.next).toEqual(null);

    llInsertions.delete(3);
    expect(llInsertions.head).toEqual(null);
  });

  it('will generate exceptions for insertBefore(), insertAfter(), and delete() for invalid values (does not exist in LL)', () => {
    expect(() => llInsertions.insertBefore(4, 5)).toThrow();
    expect(() => llInsertions.insertAfter(4, 5)).toThrow();
    expect(() => llInsertions.delete(1)).toThrow();

    llInsertions.insert(1);
    llInsertions.insert(2);
    llInsertions.insert(3);

    expect(() => llInsertions.insertBefore(4, 5)).toThrow();
    expect(() => llInsertions.insertAfter(4, 5)).toThrow();
    expect(() => llInsertions.delete(4)).toThrow();
  });
});
