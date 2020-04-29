const BreadthFirstBinaryTree = require('./breadth-first.js');
const { Node } = require('../../../data-structures/trees/tree.js');

describe('BreadthFirstBinaryTree', () => {
  let breadthFirstBTree;

  beforeEach(() => {
    breadthFirstBTree = new BreadthFirstBinaryTree();
  });

  it('can perform breadth first traversal and return a list of nodes in the proper order', () => {
    breadthFirstBTree.root = new Node(4);
    breadthFirstBTree.root.left = new Node(2);
    breadthFirstBTree.root.right = new Node(6);
    breadthFirstBTree.root.left.left = new Node(1);
    breadthFirstBTree.root.left.right = new Node(4);
    breadthFirstBTree.root.right.left = new Node(5);
    breadthFirstBTree.root.right.right = new Node(7);

    const expectedRes = [4, 2, 6, 1, 4, 5, 7];
    expect(breadthFirstBTree.breadthFirst()).toEqual(expectedRes);
  });

  it('can return an empty array for an empty binary tree', () => {
    expect(breadthFirstBTree.breadthFirst()).toEqual([]);
  });

  it('can return an array for a binary tree with only 1 element', () => {
    breadthFirstBTree.root = new Node(4);
    expect(breadthFirstBTree.breadthFirst()).toEqual([4]);
  });

  it('can return an array for a binary tree with values on only 1 side', () => {
    breadthFirstBTree.root = new Node(4);
    breadthFirstBTree.root.left = new Node(3);
    breadthFirstBTree.root.left.left = new Node(2);
    breadthFirstBTree.root.left.left.left = new Node(1);

    const expectedRes = [4, 3, 2, 1];
    expect(breadthFirstBTree.breadthFirst()).toEqual(expectedRes);
  });
});
