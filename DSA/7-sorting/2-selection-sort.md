# Selection Sort

Works on divide and conquer algorithm. General strategy is to keep on splitting the arrays into halves then merging the halves one by one.

[VISIUALGO](https://visualgo.net/en/sorting)

We go thru the unsorted array and put the smallest value at the beginning and include it in the sorted array. The only place where selection sort is better than bubble is that it has less number of swaps.

## Complexity

1. Time

- Best: O(n)
- Avg: O(n<sup>2</sup>)
- Worst: O(n<sup>2</sup>)

2. Space

- All: O(1)

## Pseudocode

- Store the first element as the smallest value you've seen so far.
- Compare this item to the next item in the array until you find a smaller number.
- If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
- If the "minimum" is not the value (index) you initially began with, swap the two values.
- Repeat this with the next element until the array is sorted.

## Implementaion

```javascript
function selectionSort(array) {
  let minPosition;
  for (let i = 0; i < array.length - 1; i++) {
    //i represents the position to swap with
    minPosition = i;
    for (let j = i + 1; j < array.length; j++)
      if (array[j] < array[minPosition]) minPosition = j;
    [array[i], array[minPosition]] = [array[minPosition], array[i]];
  }
}

const array = [5, 3, 4, 1, 2];
selectionSort(array);
```

```js
function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) {
      //SWAP!
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}

selectionSort([34, 22, 10, 19, 17]); // [10,17,19,22,34]
```
