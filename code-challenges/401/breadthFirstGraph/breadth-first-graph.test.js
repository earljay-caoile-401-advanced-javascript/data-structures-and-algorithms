'use strict';

const BreadthFirstGraph = require('./breadth-first-graph.js');

describe('breadth first graph', () => {
  it('can perform breadth first search', () => {
    const testGraph = new BreadthFirstGraph();

    const firstNode = testGraph.addNode('A');
    const secondNode = testGraph.addNode('B');
    const thirdNode = testGraph.addNode('C');
    const fourthNode = testGraph.addNode('D');

    testGraph.addEdge(firstNode, secondNode);
    testGraph.addEdge(firstNode, thirdNode);
    testGraph.addEdge(firstNode, fourthNode);

    const breadthList = testGraph.breadthFirst(firstNode);
    expect(breadthList[0]).toBe(firstNode);
    expect(breadthList[1]).toBe(secondNode);
    expect(breadthList[2]).toBe(thirdNode);
    expect(breadthList[3]).toBe(fourthNode);

    const secondBreadth = testGraph.breadthFirst(secondNode);
    expect(secondBreadth[0]).toBe(secondNode);
    expect(secondBreadth[1]).toBe(firstNode);
  });

  it('can perform breadth first on the exmaple graph', () => {
    const testGraph = new BreadthFirstGraph();
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
    expect(exampleBreadth[0]).toBe(firstNode);
    expect(exampleBreadth[1]).toBe(secondNode);
    expect(exampleBreadth[2]).toBe(thirdNode);
    expect(exampleBreadth[3]).toBe(fourthNode);
    expect(exampleBreadth[4]).toBe(fifthNode);
    expect(exampleBreadth[5]).toBe(sixthNode);
  });
});
