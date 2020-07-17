'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.neighbors = {};
    this.visited = false;
  }
}

module.exports = Node;
