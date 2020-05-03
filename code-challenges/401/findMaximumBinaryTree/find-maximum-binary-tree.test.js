'use strict';

const FindMaximumBinaryTree = require('./find-maximum-binary-tree.js');
const Node = require('../../../data-structures/trees/node.js');

describe('find-maximum-binary-tree', () => {
  let maxBTree = new FindMaximumBinaryTree();

  afterEach(() => {
    maxBTree = new FindMaximumBinaryTree();
  });

  it('can find a max value from a popular binary tree', () => {
    maxBTree.root = new Node(2);
    maxBTree.root.left = new Node(7);
    maxBTree.root.left.left = new Node(2);
    maxBTree.root.left.right = new Node(6);
    maxBTree.root.left.right.left = new Node(5);
    maxBTree.root.left.right.right = new Node(11);
    maxBTree.root.right = new Node(5);
    maxBTree.root.right.right = new Node(9);
    maxBTree.root.right.right.left = new Node(4);

    expect(maxBTree.findMaximumValue()).toBe(11);
  });

  it('can return null for an empty binary tree', () => {
    expect(maxBTree.findMaximumValue()).toBe(null);
  });

  it('can return the root val for a binary tree with only root node', () => {
    maxBTree.root = new Node(360);

    expect(maxBTree.findMaximumValue()).toBe(360);
  });

  it('can return the max val for a binary tree with two nodees', () => {
    maxBTree.root = new Node(555);
    maxBTree.root.left = new Node(420);

    expect(maxBTree.findMaximumValue()).toBe(555);
  });
});
