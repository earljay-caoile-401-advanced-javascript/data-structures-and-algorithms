'use strict';
const { LinkedList } = require('../linked-list.js');

class LLKthFromEnd extends LinkedList {
  kthFromEnd(k) {
    if (k < 0) {
      throw new Error('input value out of range');
    }

    let walker = this.head;
    let runner = this.head;
    let distance = 1;

    while (runner.next) {
      runner = runner.next;
      distance++;
    }

    if (k > distance) {
      throw new Error('input value out of range');
    }

    let diff = distance - k;

    while (diff > 1) {
      diff--;
      walker = walker.next;
    }

    return walker.value;
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
