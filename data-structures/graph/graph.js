'use strict';

const Node = require('./node.js');

class Graph {
  constructor() {
    this.vertices = [];
  }

  addNode(val) {
    const newNode = new Node(val);
    this.vertices.push(newNode);
    return newNode;
  }

  addEdge(firstNode, secondNode, weight) {
    firstNode.neighbors[secondNode.val] = {
      node: secondNode,
      weight: weight || null,
    };
    secondNode.neighbors[firstNode.val] = {
      node: firstNode,
      weight: weight || null,
    };
  }

  getNodes() {
    return this.vertices;
  }

  getNeighbors(node) {
    return Object.values(node.neighbors);
  }

  size() {
    return this.vertices.length;
  }
}

module.exports = Graph;
