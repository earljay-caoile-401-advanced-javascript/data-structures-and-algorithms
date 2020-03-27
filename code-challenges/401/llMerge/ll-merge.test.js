'use strict';
const {
  LinkedList,
} = require('../../../data-structures/linkedList/linked-list.js');
const { mergeLists, mergeListsSorted } = require('./ll-merge.js');

describe('mergeLists', () => {
  let ll1 = new LinkedList();
  let ll2 = new LinkedList();

  afterEach(() => {
    ll1 = new LinkedList();
    ll2 = new LinkedList();
  });

  it('can merge 2 linked lists with values in both', () => {
    ll1.insert(5);
    ll1.insert(3);
    ll1.insert(1);

    ll2.insert(6);
    ll2.insert(4);
    ll2.insert(2);

    const mergeRes = mergeLists(ll1, ll2);

    expect(mergeRes.head.val).toEqual(1);
    expect(mergeRes.head.next.val).toEqual(2);
    expect(mergeRes.head.next.next.val).toEqual(3);
    expect(mergeRes.head.next.next.next.val).toEqual(4);
    expect(mergeRes.head.next.next.next.next.val).toEqual(5);
    expect(mergeRes.head.next.next.next.next.next.val).toEqual(6);
  });

  it('can return the populated linked list when one linked list is empty', () => {
    ll2.insert(3);
    ll2.insert(2);
    ll2.insert(1);

    const mergeRes1 = mergeLists(ll1, ll2);

    expect(mergeRes1).toEqual(ll2);
    expect(mergeRes1.head.val).toEqual(1);
    expect(mergeRes1.head.next.val).toEqual(2);
    expect(mergeRes1.head.next.next.val).toEqual(3);

    ll2 = new LinkedList();
    ll1 = new LinkedList();

    ll1.insert(5);
    ll1.insert(4);
    ll1.insert(3);

    const mergeRes2 = mergeLists(ll1, ll2);
    expect(mergeRes2).toEqual(ll1);
    expect(mergeRes2.head.val).toEqual(3);
    expect(mergeRes2.head.next.val).toEqual(4);
    expect(mergeRes2.head.next.next.val).toEqual(5);
  });

  it('can merge 2 linked lists with different amount of nodes', () => {
    ll1.insert(5);

    ll2.insert(6);
    ll2.insert(4);
    ll2.insert(2);
    ll2.insert(3);
    ll2.insert(1);

    const mergeRes1 = mergeLists(ll1, ll2);
    expect(mergeRes1.head.next).toEqual(ll2.head);
    expect(ll1.head.next).toEqual(ll2.head);
    expect(mergeRes1.head.val).toEqual(5);
    expect(mergeRes1.head.next.val).toEqual(1);
    expect(mergeRes1.head.next.next.val).toEqual(3);
    expect(mergeRes1.head.next.next.next.val).toEqual(2);
    expect(mergeRes1.head.next.next.next.next.val).toEqual(4);
    expect(mergeRes1.head.next.next.next.next.next.val).toEqual(6);

    ll2 = new LinkedList();
    ll1 = new LinkedList();

    ll1.insert(5);
    ll1.insert(4);

    ll2.insert(1);

    const mergeRes2 = mergeLists(ll1, ll2);

    expect(mergeRes2.head.val).toEqual(4);
    expect(mergeRes2.head.next.val).toEqual(1);
    expect(mergeRes2.head.next.next.val).toEqual(5);
  });
});

describe('mergeListsSorted', () => {
  let ll1 = new LinkedList();
  let ll2 = new LinkedList();

  afterEach(() => {
    ll1 = new LinkedList();
    ll2 = new LinkedList();
  });

  it('can take in two sorted lists and return a merged sorted list', () => {
    ll1.insert(8);
    ll1.insert(5);
    ll1.insert(4);
    ll1.insert(3);

    ll2.insert(7);
    ll2.insert(6);
    ll2.insert(2);
    ll2.insert(1);

    const mergeRes = mergeListsSorted(ll1, ll2);
    let currRes = mergeRes.head;

    for (let i = 1; i <= 8; i++) {
      expect(currRes.val).toEqual(i);
      currRes = currRes.next;
    }
  });

  it('can take in two merge lists of different sizes and return a sorted list', () => {
    ll1.insert(7);
    ll1.insert(5);
    ll1.insert(4);
    ll1.insert(1);

    ll2.insert(6);
    ll2.insert(3);
    ll2.insert(2);

    const mergeRes = mergeListsSorted(ll1, ll2);
    let currRes = mergeRes.head;

    for (let i = 1; i <= 7; i++) {
      expect(currRes.val).toEqual(i);
      currRes = currRes.next;
    }
  });
});
