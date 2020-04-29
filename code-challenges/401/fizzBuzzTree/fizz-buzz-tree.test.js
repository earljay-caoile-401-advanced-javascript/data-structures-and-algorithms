const fizzBuzzTree = require('./fizz-buzz-tree.js');
const { Node, BinaryTree } = require('../../../data-structures/trees/tree.js');

describe('fizzBuzzTree', () => {
  let binaryTree = new BinaryTree();

  beforeEach(() => {
    binaryTree = new BinaryTree();
  });

  it('can convert numbers to fizz, buzz, and fizzbuzz accordingly', () => {
    binaryTree.root = new Node(5);
    binaryTree.root.left = new Node(3);
    binaryTree.root.right = new Node(15);
    binaryTree.root.right.right = new Node(6);
    binaryTree.root.left.left = new Node(1);
    binaryTree.root.left.left.right = new Node(9);
    binaryTree.root.left.right = new Node(2);
    fizzBuzzTree(binaryTree);

    expect(binaryTree.root.val).toEqual('Buzz');
    expect(binaryTree.root.left.val).toEqual('Fizz');
    expect(binaryTree.root.right.val).toEqual('FizzBuzz');
    expect(binaryTree.root.right.right.val).toEqual('Fizz');
    expect(binaryTree.root.left.left.val).toEqual('1');
    expect(binaryTree.root.left.left.right.val).toEqual('Fizz');
    expect(binaryTree.root.left.right.val).toEqual('2');
  });

  it('can handle an empty binary tree', () => {
    fizzBuzzTree(binaryTree);
    expect(binaryTree.root).toEqual(null);
  });
});
