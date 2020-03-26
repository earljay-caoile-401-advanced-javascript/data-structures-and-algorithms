'use strict';

class LinkedList {
  constructor(head) {
    // this.head = head ? (typeof head === Node) ? head : (typeof head === 'number') ? new Node(head) : null;
    if (head) {
      if (typeof head === 'object') {
        this.head = head;
      } else {
        this.head = new Node(head);
      }
    } else {
      this.head = null;
    }
  }

  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let res = '';
    let current = this.head;
    while (current) {
      res += `${current.value} -> `;
      current = current.next;
    }
    return res + 'NULL';
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = { LinkedList, Node };
