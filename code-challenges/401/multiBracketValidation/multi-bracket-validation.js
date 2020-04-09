'use strict';

const multiBracketValidation = input => {
  const dict = { '{': '}', '(': ')', '[': ']' };
  const parens = new Set(['{', '}', '(', ')', '[', ']']);
  const stack = new Array();

  for (let i in input) {
    if (!parens.has(input[i])) {
      continue;
    }

    const rightVal = dict[input[i]];
    if (rightVal) {
      stack.push(rightVal);
    } else {
      if (!stack.length || input[i] !== stack.pop()) {
        return false;
      }
    }
  }

  return !stack.length;
};

module.exports = multiBracketValidation;
