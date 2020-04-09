'use strict';

const { BinaryTree, BinarySearchTree } = require('./tree.js');

describe('binary search tree', () => {
  let binarySearchTree;
  const addSomeNodes = () => {
    binarySearchTree.add(4);
    binarySearchTree.add(3);
    binarySearchTree.add(5);
    binarySearchTree.add(2);
  };

  const silenceLogs = () => {
    jest.spyOn(global.console, 'log');
    console.log = jest.fn();
  };

  beforeEach(() => {
    binarySearchTree = new BinarySearchTree();
  });

  it('can add nodes in the correct location', () => {
    addSomeNodes();
    expect(binarySearchTree.root.val).toEqual(4);
    expect(binarySearchTree.root.left.val).toEqual(3);
    expect(binarySearchTree.root.left.left.val).toEqual(2);
    expect(binarySearchTree.root.right.val).toEqual(5);
  });

  it('can look at a BST to see if it contains a given value', () => {
    expect(binarySearchTree.contains(1)).toEqual(false);

    binarySearchTree.add(55);
    binarySearchTree.add(26);
    binarySearchTree.add(13);
    binarySearchTree.add(78);

    expect(binarySearchTree.contains(3)).toEqual(false);
    expect(binarySearchTree.contains(4)).toEqual(false);
    expect(binarySearchTree.contains(5)).toEqual(false);
    expect(binarySearchTree.contains(55)).toEqual(true);
    expect(binarySearchTree.contains(26)).toEqual(true);
    expect(binarySearchTree.contains(13)).toEqual(true);
    expect(binarySearchTree.contains(78)).toEqual(true);
  });

  it('can perform a pre-order traversal', () => {
    silenceLogs();
    binarySearchTree.preOrder(binarySearchTree.root);
    expect(console.log).not.toHaveBeenCalled();

    addSomeNodes();
    binarySearchTree.preOrder(binarySearchTree.root);
    expect(console.log).toHaveBeenCalled();
    jest.clearAllMocks();
  });

  it('can perform an in-order traversal', () => {
    silenceLogs();
    binarySearchTree.inOrder(binarySearchTree.root);
    expect(console.log).not.toHaveBeenCalled();

    addSomeNodes();
    binarySearchTree.inOrder(binarySearchTree.root);
    expect(console.log).toHaveBeenCalled();
    jest.clearAllMocks();
  });

  it('can perform a post-order traversal', () => {
    silenceLogs();
    binarySearchTree.postOrder(binarySearchTree.root);
    expect(console.log).not.toHaveBeenCalled();

    addSomeNodes();
    binarySearchTree.postOrder(binarySearchTree.root);
    expect(console.log).toHaveBeenCalled();
    jest.clearAllMocks();
  });
});
