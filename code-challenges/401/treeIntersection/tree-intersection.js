'use strict';
const Hashtable = require('../../../data-structures/hashTable/hashtable.js');

const treeIntersection = (root1, root2) => {
  const res = [];

  if (!root1 || !root2) {
    return res;
  }

  const hTable = new Hashtable(555);

  traverseAdd(root1, hTable);
  traverseCompare(root2, hTable, res);

  return res;
};

const traverseAdd = (root, table) => {
  if (!root) {
    return;
  }

  table.add(root.val, root.val);
  traverseAdd(root.left, table);
  traverseAdd(root.right, table);
};

const traverseCompare = (root, table, arr) => {
  if (!root) {
    return;
  }

  if (table.contains(root.val)) {
    arr.push(root.val);
  }

  traverseCompare(root.left, table, arr);
  traverseCompare(root.right, table, arr);
};

module.exports = treeIntersection;
