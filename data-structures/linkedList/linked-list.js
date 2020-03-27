'use strict';

class LinkedList {
  constructor(val) {
    this.head = val ? new Node(val) : null;
  }

  insert(val) {
    const newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
  }

  includes(val) {
    let current = this.head;
    while (current) {
      if (current.val === val) {
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
      res += `${current.val} -> `;
      current = current.next;
    }
    return res + 'NULL';
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

module.exports = { LinkedList, Node };
