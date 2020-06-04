'use strict';

const { BinaryTree } = require('../../../data-structures/trees/tree.js');

class FindMaximumBinaryTree extends BinaryTree {
  findMaximumValue() {
    const helper = function (node) {
      return node
        ? Math.max(node.val, helper(node.left), helper(node.right))
        : -Infinity;
    };

    return this.root ? helper(this.root) : null;
  }
}

module.exports = FindMaximumBinaryTree;
