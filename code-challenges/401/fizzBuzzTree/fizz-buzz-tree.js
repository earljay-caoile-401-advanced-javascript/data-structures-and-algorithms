'use strict';

const fizzBuzzTree = (bTree) => {
  if (bTree && bTree.root) {
    fizzBuzzHelper(bTree.root);
  }

  return bTree;
};

const fizzBuzzHelper = (node) => {
  if (node) {
    if (typeof node.val === 'number') {
      const canDivByThree = node.val % 3 === 0;
      const canDivByFive = node.val % 5 === 0;

      if (canDivByThree && canDivByFive) {
        node.val = 'FizzBuzz';
      } else if (canDivByThree) {
        node.val = 'Fizz';
      } else if (canDivByFive) {
        node.val = 'Buzz';
      } else {
        node.val = node.val.toString();
      }
    }

    fizzBuzzHelper(node.left);
    fizzBuzzHelper(node.right);
  }
};

module.exports = fizzBuzzTree;
