'use strict';

const Node = require('../../../data-structures/trees/node.js');
const fizzBuzzTree = require('./fizz-buzz-tree.js');
const { BinaryTree } = require('../../../data-structures/trees/tree.js');

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
    const fizzRoot = fizzBuzzTree(binaryTree.root);

    expect(fizzRoot.val).toEqual('Buzz');
    expect(fizzRoot.left.val).toEqual('Fizz');
    expect(fizzRoot.right.val).toEqual('FizzBuzz');
    expect(fizzRoot.right.right.val).toEqual('Fizz');
    expect(fizzRoot.left.left.val).toEqual('1');
    expect(fizzRoot.left.left.right.val).toEqual('Fizz');
    expect(fizzRoot.left.right.val).toEqual('2');
  });

  it('can handle an empty binary tree', () => {
    const fizzRoot = fizzBuzzTree(binaryTree.root);
    expect(fizzRoot).toEqual(null);
  });

  it('can deal with a tree that has non-numbers', () => {
    binaryTree.root = new Node('not a number');
    const fizzRoot = fizzBuzzTree(binaryTree.root);
    expect(fizzRoot.val).toEqual(binaryTree.root.val);
  });
});
