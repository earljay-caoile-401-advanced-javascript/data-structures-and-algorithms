'use strict';

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
    const node = new Node(val);

    if (!this.root) {
      this.root = node;
      return;
    }

    const queue = [];
    queue.push(this.root);

    while (queue.length) {
      const front = queue.shift();

      if (val === front.val) {
        return;
      }

      if (val < front.val) {
        if (front.left) {
          queue.push(front.left);
        } else {
          front.left = node;
          return;
        }
      }

      if (val > front.val) {
        if (front.right) {
          queue.push(front.right);
        } else {
          front.right = node;
          return;
        }
      }
    }
  }

  contains(val) {
    if (!this.root) {
      return false;
    }

    return this.searchHelper(this.root, val);
  }

  searchHelper(node, val) {
    if (node) {
      if (val === node.val) {
        return true;
      }

      if (val < node.val) {
        return this.searchHelper(node.left, val);
      }

      if (val > node.val) {
        return this.searchHelper(node.right, val);
      }
    }

    return false;
  }
}

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };
