# Singly Linked List
This is a data structures consisting of a series of nodes, each with a value and a reference to the next node in the list. The last node's next reference points to null.

## Challenge
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.

## Approach & Efficiency
### Approach
- create a current variable holding a reference to head when traversal is required
- traverse through linked list with a while loop
- re-assign references to head, current, and .next as needed

### Efficiency
**insert()**: Time: O(1), Space: O(1)
**includes()**: Time: O(N), Space: O(1)
**toString()**: Time: O(N), Space: O(n^2)

## API
**insert()**: takes any value as an argument and adds a new node with that value to the head of the list with an O(1) time performance
**includes()**: takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list
**toString()**: takes in no arguments and returns a string representing all the values in the Linked List, formatted as: `"{ a } -> { b } -> { c } -> NULL"`