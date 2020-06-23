# Hash Tables

Hash tables are this cool and cryptic way of storing key value pairs and accessing them later. You get the same functionality in JavaScript with the `Map` class and almost the same functionality with objects.

## Challenge

Implement a Hashtable with the following methods:

    add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
    get: takes in the key and returns the value from the table.
    contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
    hash: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency

### Approach

- create class that initializes an empty array of a certain length
- create hash algorithm choose index to assign key/value pair
- create algorithm to handle collisions (using linked lists for this one)
- add key value pairs to hash table by hashing an index and then assigning pair to a linked list at that index

### Efficiency

1. **add()**: O(1) - assuming no collision (potentially worse depending on hash algorithm for collisions)
2. **get()**: O(1) - assuming no collision (potentially worse depending on hash algorithm for collisions)
3. **contains()**: O(1) - assuming no collision (potentially worse depending on hash algorithm for collisions)
4. **hash()**: O(1) - assuming no collision (potentially worse depending on hash algorithm for collisions)

## API

1. **add()**: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
2. **get()**: takes in the key and returns the value from the table.
3. **contains()**: takes in the key and returns a boolean, indicating if the key exists in the table already.
4. **hash()**: takes in an arbitrary key and returns an index in the collection.
