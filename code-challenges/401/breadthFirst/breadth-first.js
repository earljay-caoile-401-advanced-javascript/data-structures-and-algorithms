const { BinaryTree } = require('../../../data-structures/trees/tree.js');
const Queue = require('../../../data-structures/stackAndQueue/queue.js');

class BreadthFirstBinaryTree extends BinaryTree {
  constructor(rootVal) {
    super(rootVal);
  }

  breadthFirst() {
    const res = new Array();
    const breadth = new Queue();
    breadth.enqueue(this.root);

    while (breadth.peek()) {
      const front = breadth.dequeue();
      res.push(front.val);

      if (front.left) {
        breadth.enqueue(front.left);
      }

      if (front.right) {
        breadth.enqueue(front.right);
      }
    }

    return res;
  }
}

module.exports = BreadthFirstBinaryTree;
