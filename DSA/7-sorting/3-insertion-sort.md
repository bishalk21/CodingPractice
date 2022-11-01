# Insertion Sort

Insertion sort is a simple sorting algorithm that works the way we sort playing cards in our hands.

It is an in-place, stable sorting algorithm that is inefficient on large input arrays and is more useful for sorting small arrays.

- builds up the sort by gradually creating a larger left half which is always sorted.

[VISIUALGO](https://visualgo.net/en/sorting)

## Algorithm

1. Iterate from arr[1] to arr[n] over the array.
2. Compare the current element (key) to its predecessor.
3. If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element.

We take one element and insert it in the right place in the sorted part. One advantage over bubble and selection sort is that the it is good when data is getting appended over time.

## Pseudocode

- start by picking the second element in the array
- now compare the second element with the one before it and swap if necessary
- continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
- repeat until the array is sorted
- return the sorted array

## Complexity

1. Time

- Best: O(n)
- Avg: O(n<sup>2</sup>)
- Worst: O(n<sup>2</sup>)

2. Space

- All: O(1)

## Implementation

```javascript
function insertionSort(array) {
  for (let i = 0; i < array.length - 1; i++)
    for (let j = i + 1; j > 0; j--)
      if (array[j] < array[j - 1])
        [array[j - 1], array[j]] = [array[j], array[j - 1]];
      else break;
}
```
