'use strict';

class Queue {
  constructor() {
    this.storage = new Array();
  }

  enqueue(item) {
    this.storage.push(item);
  }

  dequeue() {
    return this.storage.shift();
  }

  peek() {
    return this.storage[0];
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  print() {
    let value;
    while ((value = this.dequeue())) {
      console.log(value);
    }
  }
}

module.exports = Queue;
