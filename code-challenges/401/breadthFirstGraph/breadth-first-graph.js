'use strict';

const Graph = require('../../../data-structures/graph/graph.js');
const Queue = require('../../../data-structures/stackAndQueue/queue.js');

class BreadtFirstGraph extends Graph {
  constructor() {
    super();
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

    for (let i = 0; i < order.length; i++) {
      order[i].visited = false;
    }

    return order;
  }
}

module.exports = BreadtFirstGraph;
