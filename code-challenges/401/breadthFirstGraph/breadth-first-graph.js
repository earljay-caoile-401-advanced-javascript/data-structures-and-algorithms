'use strict';

const Graph = require('../../../data-structures/graph/graph.js');
const Queue = require('../../../data-structures/stackAndQueue/queue.js');

class BreadtFirstGraph extends Graph {
  constructor() {
    super();
  }

  breadthFirst(rootNode) {
    const order = [];
    const visited = {};

    if (!rootNode) {
      return order;
    }

    const breadth = new Queue();

    visited[rootNode.val] = true;
    breadth.enqueue(rootNode);

    while (breadth.peek()) {
      const front = breadth.dequeue();
      order.push(front);
      for (const nodeObj of Object.values(front.neighbors)) {
        const neighborNode = nodeObj.node;

        if (!visited[neighborNode.val]) {
          visited[neighborNode.val] = true;
          breadth.enqueue(neighborNode);
        }
      }
    }

    return order;
  }

  doesPathExist(node1, node2) {
    if (!node1 || !node2) {
      return false;
    }

    const visited = {};

    const breadth = new Queue();

    visited[node1.val] = true;
    breadth.enqueue(node1);

    while (breadth.peek()) {
      const front = breadth.dequeue();

      for (const nodeObj of Object.values(front.neighbors)) {
        const neighborNode = nodeObj.node;
        if (neighborNode === node2) {
          return true;
        }

        if (!visited[neighborNode.val]) {
          visited[neighborNode.val] = true;
          breadth.enqueue(neighborNode);
        }
      }
    }

    return false;
  }
}

module.exports = BreadtFirstGraph;
