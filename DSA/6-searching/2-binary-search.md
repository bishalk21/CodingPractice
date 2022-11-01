# Binary Search

Requires sorted array. Unlike linear search which eliminates one number at a time, binary search eliminates half of the array at a time. Works on _divide and conquer._

## Complexity

1. Time

   Best: O(1)

   Average: O(log(n))

   Best: O(log(n))

2. Space: O(1)

### Explanation

Suppose we have 16 length array. Is we perform binary search, we half the array overtime repeatedly. So in the worst case 16=>8=>4=>2=>1. Now if we doubled the size of array we will require one extra step. 32=>16=>8=>4=>2=>1. Thus by if complexity is f(n), by doubling n the steps increase by one. Thus f(n) = log(n). Thus O(log(n))

## Pseudocode

```pseudo
function binarySearch(array, target) {
  // create a left pointer at the start of the array, and a right pointer at the end of the array
  // while the left pointer comes before the right pointer:
    // create a pointer in the middle
    // if you find the value you want, return the index
    // if the value is too small, move the left pointer up
    // if the value is too large, move the right pointer down
  // if you never find the value, return -1
}
```

## Implementation

```javascript
//Using recursion
function binarySearch(array, target, left = 0, right = array.length - 1) {
  // find the middle index
  let middle = Math.floor((left + right) / 2);
  if (array[middle] == target) {
    return middle;
  } else if (right == left) {
    return -1;
  } else if (target < array[middle]) {
    // target is in the left array
    return binarySort(array, target, left, middle - 1);
  } else {
    // target is in the right array
    return binarySort(array, target, middle + 1, right);
  }
}

//Using While Loop
function binarySearch(array, target) {
  // Set inital pointers
  let left = 0;
  let right = array.length;
  while (true) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] === target) return middle;
    if (array.length === 1) return -1;
    if (array[middle] < target) {
      // target belongs to the right;
      left = middle + 1;
    } else {
      // target belongs to the left
      right = middle - 1;
    }
  }
}
```

```js
// write a function called binarySearch which accepts a sorted array, and a value and returns the index at which the value exists. Otherwise return -1.

function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);
  while (arr[middle] !== val && left <= right) {
    if (val < arr[middle]) right = middle - 1;
    else left = middle + 1;
    middle = Math.floor((left + right) / 2);
  }
  return arr[middle] === val ? middle : -1;
}

// using recursion
function binarySearch(arr, target, left = 0, right = arr.length - 1) {
  let middle = Math.floor((left + right) / 2);
  if (arr[middle] === target) return middle;
  else if (right == left) return -1;
  else if (target < arr[middle])
    return binarySearch(arr, target, left, middle - 1);
  else return binarySearch(arr, target, middle + 1, right);
}

binarySearch([1, 3, 56, 7, 8, 65, 4, 435637, 7, 67, 6], 4); // -1
```
