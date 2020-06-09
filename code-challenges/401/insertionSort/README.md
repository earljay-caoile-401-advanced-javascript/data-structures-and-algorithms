# Insertion Sort

Implement insertion sort

## Challenge

1. Provide a visual step through for each of the sample arrays based on the provided pseudo code
2. Convert the pseudo-code into working code in your language
3. Present a complete set of working tests

## Approach & Efficiency

### Algorithm

1. iterate through array starting at index 1 (index i)
2. within the for loop, initialize another variable starting at the previous index (index j)
3. grab value at index i (variable tmp)
4. iterate with inner while loop to look for the proper spot for tmp
5. assign tmp to proper index and continue with for loop

### Big O:

- Time: O(n^2)
- Space: O(1)

## Solution

![Insertion Sort](../../../assets/insertion-sort.jpg)
