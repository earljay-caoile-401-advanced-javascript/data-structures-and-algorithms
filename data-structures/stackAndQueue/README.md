# Stack and Queue

## Stack

This is a data structure that contains a group of values that are added and removed with the last in first out approach.

## Queue

This is a data structure that contains a group of values that are added and removed with the first in first out approach.

## Challenge

1. Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
2. Create a Stack class that has a top property. It creates an empty Stack when instantiated.

- This object should be aware of a default empty value assigned to top when the stack is created.
- Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
- Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
- Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
- Define a method called isEmpty that does not take an argument, and returns a boolean indicating whether or not the stack is empty.

3. Create a Queue class that has a front property. It creates an empty Queue when instantiated.

- This object should be aware of a default empty value assigned to front when the queue is created.
- Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
- Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
- Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
- Define a method called isEmpty that does not take an argument, and returns a boolean indicating whether or not the queue is empty.

4. Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.
5. Be sure to follow your languages best practices for naming conventions.
6. You have access to the Node class and all the properties on the Linked List class.

## Approach & Efficiency

### Approach

- initialize array
- do enqueue and push with array.push()
- handle stack pop with array.pop()
- handle queue dequeue with array.shift()

### Efficiency

#### Stack

**push()**: O(1)
**pop()**: O(1)
**peek()**: O(1)
**isEmpty()**: O(1)
**print()**: O(N)

#### Queue

**enqueue()**: O(1)
**dequeue()**: O(1)
**peek()**: O(1)
**isEmpty()**: O(1)
**print()**: O(N)

## API

### Stack

**push()**: takes any value as an argument and adds a new node with that value to the head of the list with an O(1) time performance
**pop()**: takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list
**peek()**: takes no arguments and returns the value of the node located on top of the stack, without removing it from the stack
**isEmpty()**: takes no arguments, and returns a boolean indicating whether or not the stack is empty.
**print()**: takes in no arguments and console logs all of the values one by one while popping them off the stack

### Queue

**enqueue()**: akes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance
**dequeue()**: does not take any argument, removes the node from the front of the queue, and returns the node’s value\
**peek()**: does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue
**isEmpty()**: does not take an argument, and returns a boolean indicating whether or not the queue is empty
**print()**: takes in no arguments and console logs all of the values one by one while dequeueing them from the queue
