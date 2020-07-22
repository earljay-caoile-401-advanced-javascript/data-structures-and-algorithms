'use strict';

const depthFirst = (root) => {
  const res = [];

  const helper = (node) => {
    if (!node) {
      return;
    }

    node.visited = true;
    res.push(node);

    for (const obj of Object.values(node.neighbors)) {
      const nearNode = obj.node;

      if (!nearNode.visited) {
        helper(nearNode);
      }
    }
  };

  helper(root);

  for (const node of res) {
    node.visited = false;
  }

  return res;
};

module.exports = depthFirst;
