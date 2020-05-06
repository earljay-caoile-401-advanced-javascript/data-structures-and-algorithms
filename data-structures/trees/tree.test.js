'use strict';

const { BinarySearchTree } = require('./tree.js');

describe('binary search tree', () => {
  let binarySearchTree;
  const addSomeNodes = () => {
    binarySearchTree.add(4);
    binarySearchTree.add(3);
    binarySearchTree.add(5);
    binarySearchTree.add(2);
    binarySearchTree.add(8);
    binarySearchTree.add(7);
  };

  // const silenceLogs = () => {
  //   jest.spyOn(global.console, 'log');
  //   console.log = jest.fn();
  // };

  beforeEach(() => {
    binarySearchTree = new BinarySearchTree();
  });

  it('can add nodes in the correct location', () => {
    addSomeNodes();
    expect(binarySearchTree.root.val).toEqual(4);
    expect(binarySearchTree.root.left.val).toEqual(3);
    expect(binarySearchTree.root.left.left.val).toEqual(2);
    expect(binarySearchTree.root.right.val).toEqual(5);
    expect(binarySearchTree.root.right.right.val).toEqual(8);
    expect(binarySearchTree.root.right.right.left.val).toEqual(7);
  });

  it('can handle returning out when adding an existing value to a binary search tree', () => {
    addSomeNodes();
    binarySearchTree.add(4);
    expect(binarySearchTree.root.val).toEqual(4);
  });

  it('can look at a BST to see if it contains a given value', () => {
    expect(binarySearchTree.contains(1)).toEqual(false);

    binarySearchTree.add(55);
    binarySearchTree.add(26);
    binarySearchTree.add(13);
    binarySearchTree.add(78);
    binarySearchTree.add(111);

    expect(binarySearchTree.contains(3)).toEqual(false);
    expect(binarySearchTree.contains(4)).toEqual(false);
    expect(binarySearchTree.contains(5)).toEqual(false);
    expect(binarySearchTree.contains(123)).toEqual(false);
    expect(binarySearchTree.contains(55)).toEqual(true);
    expect(binarySearchTree.contains(26)).toEqual(true);
    expect(binarySearchTree.contains(13)).toEqual(true);
    expect(binarySearchTree.contains(78)).toEqual(true);
    expect(binarySearchTree.contains(111)).toEqual(true);
  });

  it('can initialize a binary search tree with a value', () => {
    const datTree = new BinarySearchTree(3);
    expect(datTree.root.val).toEqual(3);
  });

  it('can perform a pre-order traversal', () => {
    expect(binarySearchTree.preOrder()).toEqual([]);

    addSomeNodes();
    expect(binarySearchTree.preOrder()).toEqual([4, 3, 2, 5, 8, 7]);
  });

  it('can perform an in-order traversal', () => {
    expect(binarySearchTree.inOrder()).toEqual([]);

    addSomeNodes();
    expect(binarySearchTree.inOrder()).toEqual([2, 3, 4, 5, 7, 8]);
  });

  it('can perform a post-order traversal', () => {
    expect(binarySearchTree.postOrder()).toEqual([]);

    addSomeNodes();
    expect(binarySearchTree.postOrder()).toEqual([2, 3, 7, 8, 5, 4]);
  });
});
