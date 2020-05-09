'use strict';
const Node = require('../../../data-structures/trees/node.js');

const fizzBuzzTree = (node) => {
  if (!node) {
    return null;
  }

  let newRoot;
  if (typeof node.val === 'number') {
    const canDivByThree = node.val % 3 === 0;
    const canDivByFive = node.val % 5 === 0;

    if (canDivByThree && canDivByFive) {
      newRoot = new Node('FizzBuzz');
    } else if (canDivByThree) {
      newRoot = new Node('Fizz');
    } else if (canDivByFive) {
      newRoot = new Node('Buzz');
    } else {
      newRoot = new Node(node.val.toString());
    }
  }

  newRoot.left = fizzBuzzTree(node.left);
  newRoot.right = fizzBuzzTree(node.right);
  return newRoot;
};

module.exports = fizzBuzzTree;
