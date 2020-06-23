'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor(key, val) {
    this.head = key === undefined ? null : new Node(key, val);
  }

  append(key, val) {
    const newNode = new Node(key, val);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    if (!current.next && current.key === key) {
      current.val = val;
      return;
    }

    while (current.next) {
      if (current.key === key) {
        current.val = val;
        return;
      }
      
      current = current.next;
    }

    current.next = newNode;
  }

  findPair(key) {
    let current = this.head;
    while (current) {
      if (current.key === key || JSON.stringify(current.key) === JSON.stringify(key)) {
        return current;
      }
      current = current.next;
    }

    return null;
  }
}

module.exports = LinkedList;
