# Array Shift

Add a number to the middle of an array!

## Challenge

Write a function called insertShiftArray which takes in an array and the value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

## Approach & Efficiency

### Algorithm

- find midpoint by dividing array length by 2
- save value to variable
- for loop through second half of array
- create tmp value to hold current value at current index
- replace current value in array with outside value
- repeat above 2 steps until end of array
- push last element to end of array

### Big O:

- Time: O(N)
- Space: O(1)

## Solution

![Array Shift](../../../assets/array-shift.jpg "array shift")
