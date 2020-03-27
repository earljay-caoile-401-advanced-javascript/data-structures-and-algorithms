# Linked List Merge
Merge two linked lists.

## Challenge
Write a function called mergeLists which takes two linked lists as arguments. Zip the two linked lists together into one so that the nodes alternate between the two lists and return a reference to the head of the zipped list. Try and keep additional space down to O(1). You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Approach & Efficiency
### Algorithm
- create two pointers starting at each of the linked list heads
- iterate through while loop with condition that neither pointer is null
- re-attach pointers so that values are alternating
- handle case for first LL not having nodes to iterate through but second LL having nodes left
- return first linked list

### Big O:
- Time: O(n)
- Space: O(1)

## Solution
![Linked List Merge](../../../assets/ll-merge.jpg "linked list merge")