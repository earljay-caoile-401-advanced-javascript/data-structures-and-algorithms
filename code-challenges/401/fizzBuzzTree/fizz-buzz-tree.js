'use strict';
const Node = require('../../../data-structures/trees/node.js');

const fizzBuzzTree = (node) => {
  if (!node) {
    return null;
  }

  let newVal;
  if (typeof node.val === 'number') {
    const canDivByThree = node.val % 3 === 0;
    const canDivByFive = node.val % 5 === 0;

    if (canDivByThree && canDivByFive) {
      newVal = 'FizzBuzz';
    } else if (canDivByThree) {
      newVal = 'Fizz';
    } else if (canDivByFive) {
      newVal = 'Buzz';
    } else {
      newVal = node.val.toString();
    }
  } else {
    newVal = node.val;
  }

  const newRoot = new Node(newVal);
  newRoot.left = fizzBuzzTree(node.left);
  newRoot.right = fizzBuzzTree(node.right);
  return newRoot;
};

module.exports = fizzBuzzTree;
