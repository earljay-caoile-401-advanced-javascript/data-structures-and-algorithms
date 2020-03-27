'use strict';

const { LinkedList, Node } = require('../linked-list.js');

class LinkedListInsertions extends LinkedList {
  append(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  insertBefore(val, newVal) {
    if (this.head.val === val) {
      this.insert(newVal);
      return;
    }

    const newNode = new Node(newVal);
    let current = this.head;
    while (current.next) {
      if (current.next.val === val) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    throw new Error('value does not exist in linked list');
  }

  insertAfter(val, newVal) {
    const newNode = new Node(newVal);
    let current = this.head;
    while (current) {
      if (current.val === val) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    throw new Error('value does not exist in linked list');
  }

  delete(val) {
    let current = this.head;
    if (current.val === val) {
      this.head = current.next;
      current.next = null;
      return;
    }

    while (current.next) {
      if (current.next.val === val) {
        let oldNode = current.next;
        current.next = current.next.next;
        oldNode.next = null;
        return;
      }
      current = current.next;
    }

    throw new Error('value does not exist in linked list');
  }
}

module.exports = LinkedListInsertions;
