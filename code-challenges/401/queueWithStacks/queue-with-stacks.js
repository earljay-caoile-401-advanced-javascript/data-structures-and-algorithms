'use strict';

const Stack = require('../../../data-structures/stackAndQueue/stack.js');

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    while (this.stack1.peek()) {
      this.stack2.push(this.stack1.pop());
    }

    const res = this.stack2.pop();

    while (this.stack2.peek()) {
      this.stack1.push(this.stack2.pop());
    }

    return res;
  }
}

module.exports = PseudoQueue;
