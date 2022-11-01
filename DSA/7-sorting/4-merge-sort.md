# Merge Sort

- in 1948, written by John Von Neumann
- combinations of splitting, sorting, and merging arrays.
- exploits the fact that arrays of 0 or 1 elements are always sorted.
- works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.

Works on divide and conquer algorithm. General strategy is to keep on splitting the arrays into halves then merging the halves one by one.

[VISIUALGO](https://visualgo.net/en/sorting)

## Algorithm

- Break up the array into halves until you have arrays that are empty or have one element
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
- Once the array has been merged back together, return the merged (and sorted!) array

## Merging Arrays Pseudocode

- Create an empty array, take a look at the smallest values in each input array
- While there are still values we haven't looked at...
  - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
  - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
  - Once we exhaust one array, push in all remaining values from the other array
- Return the merged array

## Complexity

1. Time

- All: O(nlog(n))
  > Suppose some set of data takes time t. Now if we double the data, we have to make one more splitting step. This is log(n) pattern. But for this additional step we have to make n comparisions as well in the merging step. Thus we get O(nlog(n))

2. Space

- All : O(n)
  > More double length of left and right arrays created as n doubles

> Coding Pattern: Avoid while true with breaks inside as it makes the code harder to understand.

### Implementation

```javascript
function mergeSort(array) {
  if (array.length <= 1) return array;
  let midpoint = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, midpoint));
  let right = mergeSort(array.slice(midpoint));
  return mergeArrays(left, right);
}

function mergeArrays(array1, array2) {
  // Given two functions, this function constructs a single sorted array
  let sortedArray = [],
    pointer1 = 0,
    pointer2 = 0;
  while (pointer1 != array1.length && pointer2 != array2.length)
    if (array1[pointer1] > array2[pointer2]) {
      sortedArray.push(array2[pointer2]);
      pointer2++;
    } else {
      sortedArray.push(array1[pointer1]);
      pointer1++;
    }
  if (pointer1 == array1.length)
    sortedArray = sortedArray.concat(array2.slice(pointer2));
  else sortedArray = sortedArray.concat(array1.slice(pointer1));
  return sortedArray;
}
```

## Understanding

- Merge sort is a recursive algorithm that continually splits a list in half. If the list is empty or has one item, it is sorted by definition (the base case). If the list has more than one item, we split the list and recursively invoke a merge sort on both halves. Once the two halves are sorted, the fundamental operation, called a merge, is performed. Merging is the process of taking two smaller sorted lists and combining them together into a single, sorted, new list.
  [10, 24, 73, 76]
  mergeSort([10, 24, 73, 76])
  mergeSort([10, 24]) + mergeSort([73, 76])
  mergeSort([10]) + mergeSort([24]) + mergeSort([73]) + mergeSort([76])
