'use strict';
const Node = require('./node.js');

const treeIntersection = require('./tree-intersection.js');

describe('tree insterection function', () => {
  it('can find common values in two populated binary trees', () => {
    const root1 = new Node(150);
    root1.left = new Node(100);
    root1.left.left = new Node(75);
    root1.left.right = new Node(160);
    root1.left.right.left = new Node(125);
    root1.left.right.right = new Node(175);
    root1.right = new Node(250);
    root1.right.left = new Node(200);
    root1.right.right = new Node(350);
    root1.right.right.left = new Node(300);
    root1.right.right.right = new Node(500);

    const root2 = new Node(42);
    root2.left = new Node(100);
    root2.left.left = new Node(15);
    root2.left.right = new Node(160);
    root2.left.right.left = new Node(125);
    root2.left.right.right = new Node(175);
    root2.right = new Node(600);
    root2.right.left = new Node(200);
    root2.right.right = new Node(350);
    root2.right.right.left = new Node(4);
    root2.right.right.right = new Node(500);

    expect(treeIntersection(root1, root2)).toMatchObject([
      100,
      160,
      125,
      175,
      200,
      350,
      500,
    ]);
  });

  it('can return an empty array if 1 tree is empty or both trees are empty', () => {
    const root1 = new Node(3);
    root1.left = new Node(1);
    root1.right = new Node(8);

    expect(treeIntersection(root1, null)).toMatchObject([]);
    expect(treeIntersection(null, root1)).toMatchObject([]);
    expect(treeIntersection(null, null)).toMatchObject([]);
  });
});
