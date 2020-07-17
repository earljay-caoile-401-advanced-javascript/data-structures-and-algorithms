'use strict';

const getEdge = (graph, cityNames) => {
  if (!cityNames || !cityNames.length || !graph.vertices[cityNames[0]]) {
    return [false, 0];
  }

  let total = 0,
    rootNode = graph.vertices[cityNames[0]];

  for (let i = 1; i < cityNames.length; i++) {
    const currCity = cityNames[i];
    const nodeObj = rootNode.neighbors[currCity];
    if (nodeObj && graph.vertices[currCity]) {
      rootNode = nodeObj.node;
      total += nodeObj.weight;
    } else {
      return [false, 0];
    }
  }

  return [true, total];
};

module.exports = getEdge;
