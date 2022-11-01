# Bubble Sort

[VISUALGO](https://visualgo.net/en/sorting)

In Bubble sort, the largest value bubbles up to the top in the array.

Uses two for loop. In every pass, the largest value of the unsorted array is added to the sorted array.

## Complexity

1. Time

- Normal Version

  - All: O(n<sup>2</sup>)

- Optimized Version
  - Best: O(n)
  - Avg: O(n<sup>2</sup>)
  - Worst: O(n<sup>2</sup>)

2. Space

- All: O(1)

## Pseudocode

- start looping from the variable called i the end of the array towards beginning.
- start an inner loop with a variable called j from the beginning until i - 1
- if arr[j] is greater than arr[j + 1], swap those two values!
- return the sorted array

## Implemantation

Many sorting algorithms involve some type of swapping functionality (e.g., swapping numbers to put them in order)

```js
// ES5
function swap(arr, i1, i2) {
  var temp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = temp;
}

// ES2015
const swap = (arr, i1, i2) => {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
};
```

```javascript
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++)
    for (j = array.length - 1; j > i; j--)
      if (array[j] < array[j - 1])
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
  // ES6 Swap ^
}
```

```javascript
// Optimized
function bubbleSort(array) {
  let didDoSwapping = false;
  for (let i = 0; i < array.length; i++) {
    didDoSwapping = false;
    for (j = array.length - 1; j > i; j--) {
      if (array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
        didDoSwapping = true;
      }
    }
    if (!didDoSwapping) break;
  }
}
```

```js
// write a function called bubbleSort that takes an array and return the sorted array.

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Optimized
function bubbleSort(arr) {
  let didDoSwapping = false;
  for (let i = 0; i < arr.length; i++) {
    didDoSwapping = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        didDoSwapping = true;
      }
    }
    if (!didDoSwapping) break;
  }
  return arr;
}
```

```js
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// optimized
function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// optimized
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```
