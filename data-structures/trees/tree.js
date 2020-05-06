'use strict';

const Node = require('./node.js');

class BinaryTree {
  constructor(rootVal) {
    this.root = rootVal || rootVal === 0 ? new Node(rootVal) : null;
  }

  // root, left, right traversal
  preOrder(node) {
    if (!node) {
      return;
    }

    console.log(node.val);

    if (node.left) {
      this.preOrder(node.left);
    }

    if (node.right) {
      this.preOrder(node.right);
    }
  }

  // left, root, right traversal
  inOrder(node) {
    if (!node) {
      return;
    }

    if (node.left) {
      this.inOrder(node.left);
    }

    console.log(node.val);

    if (node.right) {
      this.inOrder(node.right);
    }
  }

  // left, right, root traversal
  postOrder(node) {
    if (!node) {
      return;
    }

    if (node.left) {
      this.postOrder(node.left);
    }

    if (node.right) {
      this.postOrder(node.right);
    }

    console.log(node.val);
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
