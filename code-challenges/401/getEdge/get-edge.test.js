'use strict';

const Graph = require('../../../data-structures/graph/graph.js');
const getEdge = require('./get-edge.js');

describe('get edge', () => {
  let testGraph = new Graph();

  beforeEach(() => {
    testGraph = new Graph();
  });

  it('can return true with price for a valid flight and false for invalid flight', () => {
    const firstNode = testGraph.addNode('Pandora');
    const secondNode = testGraph.addNode('Arendelle');
    const thirdNode = testGraph.addNode('Metroville');
    const fourthNode = testGraph.addNode('New Monstropolis');
    const fifthNode = testGraph.addNode('Narnia');
    const sixthNode = testGraph.addNode('Naboo');

    testGraph.addEdge(firstNode, secondNode, 150);
    testGraph.addEdge(firstNode, thirdNode, 82);
    testGraph.addEdge(secondNode, thirdNode, 99);
    testGraph.addEdge(secondNode, fourthNode, 42);
    testGraph.addEdge(thirdNode, fourthNode, 105);
    testGraph.addEdge(thirdNode, fifthNode, 37);
    testGraph.addEdge(thirdNode, sixthNode, 26);
    testGraph.addEdge(fourthNode, sixthNode, 73);

    expect(getEdge(testGraph, ['Metroville', 'Pandora'])).toMatchObject([
      true,
      82,
    ]);

    expect(
      getEdge(testGraph, ['Arendelle', 'New Monstropolis', 'Naboo'])
    ).toMatchObject([true, 115]);

    expect(getEdge(testGraph, ['Naboo', 'Pandora'])).toMatchObject([false, 0]);

    expect(getEdge(testGraph, ['Narnia', 'Arendelle', 'Naboo'])).toMatchObject([
      false,
      0,
    ]);
  });

  it('can return a false return for an empty city array or a city name not in the graph', () => {
    testGraph.addNode('Pandora');

    expect(getEdge(testGraph)).toMatchObject([false, 0]);
    expect(getEdge(testGraph, [])).toMatchObject([false, 0]);
    expect(getEdge(testGraph, ['Gainsville'])).toMatchObject([false, 0]);
    expect(
      getEdge(testGraph, ['Arendelle', 'New Monstropolis', 'Naboo'])
    ).toMatchObject([false, 0]);
  });
});
