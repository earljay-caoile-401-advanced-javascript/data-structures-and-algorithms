'use strict';

const Node = require('./node.js');

class LinkedList {
  constructor(key, val) {
    this.head = key !== null ? new Node(key, val) : null;
  }

  insert(key, val) {
    const newNode = new Node(key, val);
    newNode.next = this.head;
    this.head = newNode;
  }

  findPair(key) {
    let current = this.head;
    while (current) {
      if (current.key === key) {
        return current;
      }
      current = current.next;
    }

    return null;
  }
}

module.exports = LinkedList;
