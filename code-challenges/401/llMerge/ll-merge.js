'use strict';

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

module.exports = mergeLists;
