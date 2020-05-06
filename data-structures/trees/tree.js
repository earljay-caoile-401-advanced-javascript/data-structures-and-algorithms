'use strict';

const Node = require('./node.js');

class BinaryTree {
  constructor(rootVal) {
    this.root = rootVal || rootVal === 0 ? new Node(rootVal) : null;
  }

  // root, left, right traversal
  preOrder() {
    const res = [];

    function preHelper(node) {
      if (!node) {
        return;
      }

      res.push(node.val);
      preHelper(node.left);
      preHelper(node.right);
    }

    preHelper(this.root);
    return res;
  }

  // left, root, right traversal
  inOrder() {
    const res = [];

    function inHelper(node) {
      if (!node) {
        return;
      }

      inHelper(node.left);
      res.push(node.val);
      inHelper(node.right);
    }

    inHelper(this.root);
    return res;
  }

  // left, right, root traversal
  postOrder() {
    const res = [];

    function postHelper(node) {
      if (!node) {
        return;
      }

      postHelper(node.left);
      postHelper(node.right);
      res.push(node.val);
    }

    postHelper(this.root);
    return res;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor(root) {
    super(root);
  }

  add(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    addHelper(this.root);

    function addHelper(node) {
      if (val === node.val) {
        return;
      }

      if (val > node.val) {
        if (node.right) {
          addHelper(node.right);
        } else {
          node.right = newNode;
        }
      }

      if (val < node.val) {
        if (node.left) {
          addHelper(node.left);
        } else {
          node.left = newNode;
        }
      }
    }
  }

  contains(val) {
    if (!this.root) {
      return false;
    }

    return searchHelper(this.root);

    function searchHelper(node) {
      if (node) {
        if (val === node.val) {
          return true;
        }

        if (val < node.val) {
          return searchHelper(node.left);
        }

        if (val > node.val) {
          return searchHelper(node.right);
        }
      }

      return false;
    }
  }
}

module.exports = { BinaryTree, BinarySearchTree };
