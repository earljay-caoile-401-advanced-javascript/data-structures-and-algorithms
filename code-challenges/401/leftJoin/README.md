# Left Join

Implement a simplified LEFT JOIN for 2 Hashmaps.

## Challenge

1. Write a function that LEFT JOINs two hashmaps into a single data structure.
2. The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
3. The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
4. Combine the key and corresponding values (if they exist) into a new data structure according to LEFT JOIN logic.
5. LEFT JOIN means all the values in the first hashmap are returned, and if values exist in the “right” hashmap, they are appended to the result row. If no values exist in the right hashmap, then some flavor of NULL should be appended to the result row.
6. The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic.
7. Avoid utilizing any of the library methods available to your language.

## Approach & EFficiency

### Algorithm

- add keys method to existing hashtable class (return array of all keys)
- modify add to push key to key array
- grab key from 1 table to get values from both tables
- add to array

### EFficiency

- Time: O(n)
- Space: O(n)

## Solution

![Left Join](../../../assets/left-join.jpg)
