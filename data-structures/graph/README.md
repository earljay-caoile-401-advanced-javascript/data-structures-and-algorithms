# Graphs

This is a data structure that's more of a parent of stuff like binary trees and k-ary trees. It coonsists of a series of connected nodes with none of them being a "root" node.

## Challenge

```
Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:
    AddNode()
        Adds a new node to the graph
        Takes in the value of that node
        Returns the added node
    AddEdge()
        Adds a new edge between two nodes in the graph
        Include the ability to have a “weight”
        Takes in the two nodes to be connected by the edge
            Both nodes should already be in the Graph
    GetNodes()
        Returns all of the nodes in the graph as a collection (set, list, or similar)
    GetNeighbors()
        Returns a collection of edges connected to the given node
        Takes in a given node
        Include the weight of the connection in the returned collection
    Size()
        Returns the total number of nodes in the graph
```

## Approach & Efficiency

- create graph class that initializes with an empty array to store vertices
- for every value added to graph, create a node and add it to the vertices array
- each node will contain a value, neighbors array, and a visited boolean flag
- for every edge, add to the neighbors neighbors array with an object containing the node and an optional weight

## API

- **addNode(val)**: initializes a node with the value and adds it to the vertices array
- **addEdge(firstNode, secondNode, weight)**: takes in two nodes and an optional weight, assigns the nodes as neighbors of each, and adds either a given value for weight or if none is provided
- **getNeighbors(node)**: returns the neighbors array of a given node
- **getNodes()**: returns the array of vertices
- **size()**: returns the length of the array of vertices
