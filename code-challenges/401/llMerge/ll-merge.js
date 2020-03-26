'use strict';
const {
  LinkedList,
  Node,
} = require('../../../data-structures/linkedList/linked-list.js');

const mergeLists = (list1, list2) => {
  if (!list1 || !list1.head) return list2;
  if (!list2 || !list2.head) return list1;

  let curr1 = list1.head;
  let curr2 = list2.head;

  while (curr1 && curr2) {
    let tmp1 = curr1.next;
    curr1.next = curr2;
    curr2 = tmp1;
    curr1 = curr1.next;
  }

  if (curr2) {
    curr1.next = curr2;
  }

  return list1;
};

const mergeListsSorted = (list1, list2) => {
  if (!list1 || !list1.head) return list2;
  if (!list2 || !list2.head) return list1;

  let dummy = new Node(-1);
  let currRes = dummy;
  let curr1 = list1.head;
  let curr2 = list2.head;

  while (curr1 && curr2) {
    if (curr1.value < curr2.value) {
      currRes.next = curr1;
      curr1 = curr1.next;
    } else {
      currRes.next = curr2;
      curr2 = curr2.next;
    }
    currRes = currRes.next;
  }

  currRes.next = curr1 ? curr1 : curr2;
  return new LinkedList(dummy.next);
};

module.exports = { mergeLists, mergeListsSorted };
