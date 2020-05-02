'use strict';

const Node = require('./node.js');

class Stack {
  constructor() {
    this.top = null;
  }

  push(item) {
    const newNode = new Node(item);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    const delNode = this.top;
    this.top = this.top.next;
    delNode.next = null;
    return delNode.val;
  }

  peek() {
    return this.top ? this.top.val : null;
  }

  isEmpty() {
    return this.top === null;
  }

  print() {
    while (this.peek()) {
      const val = this.pop().val;
      console.log(val);
    }
  }
}

module.exports = Stack;
