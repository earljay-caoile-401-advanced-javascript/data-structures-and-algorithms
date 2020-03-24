'use strict';

const LinkedList = require('../../../data-structures/linkedList/linked-list.js');

class LinkedListInsertions extends LinkedList {
  append(value) {
    const newNode = new Node(value);
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

  insertBefore(value, newValue) {
    if (this.head.value === value) {
      this.insert(newValue);
      return;
    }

    const newNode = new Node(newValue);
    let current = this.head;
    while (current.next) {
      if (current.next.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    throw new Error('value does not exist in linked list');
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;
    while (current) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }

    throw new Error('value does not exist in linked list');
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = LinkedListInsertions;
