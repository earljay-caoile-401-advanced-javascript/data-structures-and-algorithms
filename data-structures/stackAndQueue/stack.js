'use strict';

class Stack {
  constructor() {
    this.storage = new Array();
  }

  push(item) {
    this.storage.push(item);
  }

  pop() {
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  print() {
    let value;
    while ((value = this.pop())) {
      console.log(value);
    }
  }
}

module.exports = Stack;
