'use strict';

const depthFirst = require('./depth-first.js');
const Graph = require('../../../data-structures/graph/graph.js');

describe('depth first function', () => {
  it('can provide path from populated graph', () => {
    const testGraph = new Graph();
    const aNode = testGraph.addNode('A');
    const bNode = testGraph.addNode('B');
    const cNode = testGraph.addNode('C');
    const dNode = testGraph.addNode('D');
    const eNode = testGraph.addNode('E');
    const fNode = testGraph.addNode('F');
    const gNode = testGraph.addNode('G');
    const hNode = testGraph.addNode('H');

    testGraph.addEdge(aNode, bNode);
    testGraph.addEdge(bNode, cNode);
    testGraph.addEdge(cNode, gNode);
    testGraph.addEdge(aNode, dNode);
    testGraph.addEdge(dNode, eNode);
    testGraph.addEdge(dNode, hNode);
    testGraph.addEdge(hNode, fNode);
    testGraph.addEdge(dNode, fNode);

    const res = depthFirst(aNode);
    expect(res.length).toBe(testGraph.size());
    expect(res).toMatchObject([
      aNode,
      bNode,
      cNode,
      gNode,
      dNode,
      eNode,
      hNode,
      fNode,
    ]);
  });

  it('can return an empty value for root', () => {
    expect(depthFirst()).toMatchObject([]);
  });

  it('can return a graph with a single value', () => {
    const testGraph = new Graph();
    const aNode = testGraph.addNode('A');
    expect(depthFirst(aNode)).toMatchObject([aNode]);
  });

  it('can return a single node for a graph with two nodes that are not connected', () => {
    const testGraph = new Graph();
    const aNode = testGraph.addNode('A');
    const bNode = testGraph.addNode('B');

    expect(depthFirst(aNode)).toMatchObject([aNode]);
    expect(depthFirst(bNode)).toMatchObject([bNode]);
  });
});
