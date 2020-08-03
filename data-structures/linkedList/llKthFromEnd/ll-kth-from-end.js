'use strict';
const { LinkedList, Node } = require('../linked-list.js');

class LLKthFromEnd extends LinkedList {
  kthFromEnd(k) {
    if (k < 0) {
      throw new Error('input value out of range');
    }

    const dummy = new Node(0);
    dummy.next = this.head;
    let curr = this.head;
    let len = 0;

    while (curr) {
      len++;
      curr = curr.next;
    }

    if (k > len) {
      throw new Error('input value out of range');
    }

    len -= k;
    curr = dummy;

    while (len) {
      len--;
      curr = curr.next;
    }

    return curr.val;
  }

  findMiddle() {
    if (!this.head) {
      return null;
    }

    let walker = this.head;
    let runner = this.head;

    while (walker && runner) {
      runner = runner && runner.next ? runner.next.next : null;
      walker = runner ? walker.next : walker;
    }

    return walker;
  }
}

module.exports = { LLKthFromEnd };
