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
    firstNode.neighbors.push({ node: secondNode, weight });
    secondNode.neighbors.push({ node: firstNode, weight });
  }

  getNodes() {
    return this.vertices;
  }

  getNeighbors(node) {
    return node.neighbors;
  }

  size() {
    return this.vertices.length;
  }
}

module.exports = Graph;
