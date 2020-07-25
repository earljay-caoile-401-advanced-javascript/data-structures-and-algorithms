'use strict';

const depthFirst = (root) => {
  const res = [];
  const visited = {};

  const helper = (node) => {
    if (!node) {
      return;
    }

    visited[node.val] = true;
    res.push(node);

    for (const obj of Object.values(node.neighbors)) {
      const nearNode = obj.node;

      if (!visited[nearNode.val]) {
        helper(nearNode);
      }
    }
  };

  helper(root);
  return res;
};

module.exports = depthFirst;
