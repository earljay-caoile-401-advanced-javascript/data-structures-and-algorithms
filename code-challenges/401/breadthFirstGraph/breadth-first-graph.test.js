'use strict';

const BreadtFirstGraph = require('./breadth-first-graph.js');

describe('breadth first graph', () => {
  let testGraph = new BreadtFirstGraph();

  beforeEach(() => {
    testGraph = new BreadtFirstGraph();
  });

  it('can return an empty array if no root node is given', () => {
    const res = testGraph.breadthFirst();
    expect(res).toMatchObject([]);
  });

  it('can return a single node for a graph with only one node', () => {
    const root = testGraph.addNode('A');
    const res = testGraph.breadthFirst(root);
    expect(res).toMatchObject([root]);
  });

  it('can perform breadth first search', () => {
    const firstNode = testGraph.addNode('A');
    const secondNode = testGraph.addNode('B');
    const thirdNode = testGraph.addNode('C');
    const fourthNode = testGraph.addNode('D');

    testGraph.addEdge(firstNode, secondNode);
    testGraph.addEdge(firstNode, thirdNode);
    testGraph.addEdge(firstNode, fourthNode);

    const breadthList = testGraph.breadthFirst(firstNode);
    expect(breadthList).toMatchObject([
      firstNode,
      secondNode,
      thirdNode,
      fourthNode,
    ]);

    const secondBreadth = testGraph.breadthFirst(secondNode);
    expect(secondBreadth).toMatchObject([
      secondNode,
      firstNode,
      thirdNode,
      fourthNode,
    ]);
  });

  it('can perform breadth first on the exmaple graph', () => {
    const firstNode = testGraph.addNode('Pandora');
    const secondNode = testGraph.addNode('Arendelle');
    const thirdNode = testGraph.addNode('Metroville');
    const fourthNode = testGraph.addNode('Monstroplolis');
    const fifthNode = testGraph.addNode('Narnia');
    const sixthNode = testGraph.addNode('Naboo');

    testGraph.addEdge(firstNode, secondNode);
    testGraph.addEdge(secondNode, thirdNode);
    testGraph.addEdge(secondNode, fourthNode);
    testGraph.addEdge(thirdNode, fourthNode);
    testGraph.addEdge(thirdNode, fifthNode);
    testGraph.addEdge(thirdNode, sixthNode);
    testGraph.addEdge(fourthNode, sixthNode);

    const exampleBreadth = testGraph.breadthFirst(firstNode);
    expect(exampleBreadth).toMatchObject([
      firstNode,
      secondNode,
      thirdNode,
      fourthNode,
      fifthNode,
      sixthNode,
    ]);
  });

  it('can verify whether a path exists between two nodes (stretch goal)', () => {
    const firstNode = testGraph.addNode('Pandora');
    const secondNode = testGraph.addNode('Arendelle');
    const thirdNode = testGraph.addNode('Metroville');
    const fourthNode = testGraph.addNode('Monstroplolis');
    const fifthNode = testGraph.addNode('Narnia');
    const sixthNode = testGraph.addNode('Naboo');

    testGraph.addEdge(firstNode, secondNode);
    testGraph.addEdge(secondNode, thirdNode);
    testGraph.addEdge(secondNode, fourthNode);
    testGraph.addEdge(thirdNode, fourthNode);
    testGraph.addEdge(thirdNode, fifthNode);
    testGraph.addEdge(thirdNode, sixthNode);
    testGraph.addEdge(fourthNode, sixthNode);

    expect(testGraph.doesPathExist()).toBe(false);
    expect(testGraph.doesPathExist(secondNode)).toBe(false);

    expect(testGraph.doesPathExist(firstNode, sixthNode)).toBe(true);

    const dummyNode = testGraph.addNode('Dummy');
    expect(testGraph.doesPathExist(firstNode, dummyNode)).toBe(false);
  });
});
