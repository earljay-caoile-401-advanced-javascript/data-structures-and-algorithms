# Trees

Binary tree and binary search tree consists of a series of nodes containing a value and possible left or right node connections. A root exists at the top and is the first node added onto a tree.

## Challenge

Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
Create a BinaryTree class

- Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
- Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

Create a BinarySearchTree class

- Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
- Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

## Approach & Efficiency

- recursion for console logged trversals and contains method (depth first traversal)
- queue for add method (breadth first traversal)

### Efficiency

1. **preOrder()**: O(N)
2. **inOrder()**: O(N)
3. **postOrder()**: O(N)
4. **add()**: O(h), where h = tree height (worst case O(N))
5. **contains()**: O(h), where h = tree height (worst case O(N))

## API

1. **preOrder()**: traverses tree in the order of root, left, right
2. **inOrder()**: traverses tree in the order of left, root, right
3. **postOrder()**: traverses tree in the order of left, right, root
4. **add()**: adds a node to the BST containing a given value (further left for smaller and right for larger values)
5. **contains()**: traverses tree to find a given value
