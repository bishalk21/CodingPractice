# Quick Sort

[VISUALGO](https://visualgo.net/en/sorting)

Quick sort is a divide and conquer algorithm. General strategy is to keep on splitting the arrays into halves then merging the halves one by one.

Sorts elements one by one by placing a pivot element in its correct place and then repeating for the left and right elements recursively.

## Algorithm

1. Pick an element, called a pivot, from the array.
2. Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.
3. Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.

## Pivot Pseudocode

1. It will help to accept three arguments: an array, a start index, and an end index (these can default to 0 and the array length minus 1, respectively)
2. Grab the pivot from the start of the array.
3. Store the current pivot index in a variable (this will keep track of where the pivot should end up).
4. Loop through the array from the start until the end.
5. If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
6. Swap the starting element (i.e. the pivot) with the pivot index.
7. Return the pivot index.

## Quick Sort Pseudocode

1. Call the pivot helper on the array.
2. When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the right of that index.
3. Your base case occurs when you consider a subarray with less than 2 elements.

## Complexity

1. Time

- Best, Avg: O(nlog(n))
- Worst: O(n<sup>2</sup>)

> If certain data takes time t and we double the data, we need to make one morebreaking od array into left and right and for that one extra array we need to compare n times. Thus O(nlog(n)). Worst case comes when the array is already sorted. The pivot will be at its position and we will make n comparisions to move to the next postion which will be at its postion as well and so on for n times. Thus we get O(n<sup>2</sup>). I way to avoid this is by using `isSorted(array)` which checks if an array is sorted.

2. Space

- All: O(log(n))

> When array size is doubled, call stack increases by one (Not satisfied with the answer coz this reasoning fails at merge sort)

## Implementation

```js
function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }
  [arr[start], arr[swapIdx]] = [arr[swapIdx], arr[start]];
  return swapIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log(quickSort([1, 234, 45, 324, 435, 2, 1, 3, 4, 5])); // [1, 1, 3, 4, 5,
```

```javascript
function quickSort(array) {
  if (array.length <= 1) return array;
  let pivot = array[0];
  let pivotPosition = 0;
  for (let i = 1; i < array.length; i++)
    if (array[i] < pivot) {
      pivotPosition++;
      [array[pivotPosition], array[i]] = [array[i], array[pivotPosition]];
    }
  [array[0], array[pivotPosition]] = [array[pivotPosition], array[0]];
  let left = quickSort(array.slice(0, pivotPosition));
  let right = quickSort(array.slice(pivotPosition + 1));
  return [...left, pivot, ...right];
}
```
