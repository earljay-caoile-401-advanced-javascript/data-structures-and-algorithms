'use strict';

const Graph = require('../../../data-structures/graph/graph.js');
const Queue = require('../../../data-structures/stackAndQueue/queue.js');

class BreadtFirstGraph extends Graph {
  constructor() {
    super();
  }

  resetVisited(nodesArr) {
    for (let i = 0; i < nodesArr.length; i++) {
      nodesArr[i].visited = false;
    }
  }

  breadthFirst(rootNode) {
    const order = [];

    if (!rootNode) {
      return order;
    }

    const breadth = new Queue();

    rootNode.visited = true;
    breadth.enqueue(rootNode);

    while (breadth.peek()) {
      const front = breadth.dequeue();
      order.push(front);
      for (const nodeObj of Object.values(front.neighbors)) {
        const neighborNode = nodeObj.node;
        if (!neighborNode.visited) {
          neighborNode.visited = true;
          breadth.enqueue(neighborNode);
        }
      }
    }

    this.resetVisited(order);
    return order;
  }

  doesPathExist(node1, node2) {
    if (!node1 || !node2) {
      return false;
    }

    const order = [];

    const breadth = new Queue();

    node1.visited = true;
    breadth.enqueue(node1);

    while (breadth.peek()) {
      const front = breadth.dequeue();
      order.push(front);
      for (const nodeObj of Object.values(front.neighbors)) {
        const neighborNode = nodeObj.node;
        if (neighborNode === node2) {
          this.resetVisited(order);
          return true;
        }

        if (!neighborNode.visited) {
          neighborNode.visited = true;
          breadth.enqueue(neighborNode);
        }
      }
    }

    this.resetVisited(order);
    return false;
  }
}

module.exports = BreadtFirstGraph;
