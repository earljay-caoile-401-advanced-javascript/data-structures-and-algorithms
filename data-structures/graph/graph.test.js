'use strict';

const Graph = require('./graph.js');

describe('graph', () => {
  it('can initialize an empty graph', () => {
    const testGraph = new Graph();
    expect(testGraph.vertices.length).toBe(0);
  });

  it('can add nodes', () => {
    const testGraph = new Graph();
    const firstNode = testGraph.addNode('A');
    expect(testGraph.vertices.includes(firstNode)).toBeTruthy();

    const secondNode = testGraph.addNode('B');
    expect(testGraph.vertices.includes(firstNode)).toBeTruthy();
    expect(testGraph.vertices.includes(secondNode)).toBeTruthy();
  });

  it('can add edges with or without weights', () => {
    const testGraph = new Graph();
    const firstNode = testGraph.addNode('A');
    const secondNode = testGraph.addNode('B');
    const thirdNode = testGraph.addNode('C');

    testGraph.addEdge(firstNode, secondNode, 7);

    expect(firstNode.neighbors[secondNode.val]).toMatchObject({
      node: secondNode,
      weight: 7,
    });
    expect(secondNode.neighbors[firstNode.val]).toMatchObject({
      node: firstNode,
      weight: 7,
    });

    testGraph.addEdge(firstNode, thirdNode);
    expect(firstNode.neighbors[thirdNode.val]).toMatchObject({
      node: thirdNode,
      weight: null,
    });
    expect(thirdNode.neighbors[firstNode.val]).toMatchObject({
      node: firstNode,
      weight: null,
    });
  });

  it('can get nodes', () => {
    const testGraph = new Graph();
    const firstNode = testGraph.addNode('A');
    const secondNode = testGraph.addNode('B');
    const thirdNode = testGraph.addNode('C');

    const graphNodes = testGraph.getNodes();
    expect(graphNodes[0]).toBe(firstNode);
    expect(graphNodes[1]).toBe(secondNode);
    expect(graphNodes[2]).toBe(thirdNode);
  });

  it('can get neighbors', () => {
    const testGraph = new Graph();
    const firstNode = testGraph.addNode('A');
    const secondNode = testGraph.addNode('B');
    const thirdNode = testGraph.addNode('C');

    testGraph.addEdge(firstNode, secondNode, 7);
    testGraph.addEdge(firstNode, thirdNode, 2);

    const firstNeighbors = testGraph.getNeighbors(firstNode);
    expect(firstNeighbors).toHaveLength(2);
    expect(firstNeighbors[0]).toMatchObject({
      node: secondNode,
      weight: 7,
    });
    expect(firstNeighbors[1]).toMatchObject({
      node: thirdNode,
      weight: 2,
    });

    const secondNeighbors = testGraph.getNeighbors(secondNode);
    expect(secondNeighbors).toHaveLength(1);

    expect(secondNeighbors[0]).toMatchObject({
      node: firstNode,
      weight: 7,
    });

    const thirdNeighbors = testGraph.getNeighbors(thirdNode);
    expect(thirdNeighbors).toHaveLength(1);
    expect(thirdNeighbors[0]).toMatchObject({
      node: firstNode,
      weight: 2,
    });
  });

  it('can get graph size', () => {
    const testGraph = new Graph();
    expect(testGraph.size()).toBe(0);

    testGraph.addNode('A');
    expect(testGraph.size()).toBe(1);

    testGraph.addNode('B');
    expect(testGraph.size()).toBe(2);

    testGraph.addNode('C');
    expect(testGraph.size()).toBe(3);
  });
});
