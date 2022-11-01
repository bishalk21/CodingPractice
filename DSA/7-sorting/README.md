# Sorting Algorithms

Sorting is the process of rearranging the items in the collection (e.g., array) so that the items are in some kind of order.

Examples:

- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenue
- Sorting movies based on duration

## Why Sorting?

- Sorting is a common task in computer science
- Sorting is useful for many applications
- Sorting is a fundamental problem in computer science
- Sorting is a great way to learn about algorithm analysis, algorithm design, data structures, complexity of algorithms, the trade-offs between different approaches,
- Sorting is a great way to learn about the different types of algorithms

## Types of Sorting Algorithms

- Comparison Sorts
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
  - Merge Sort
  - Quick Sort
  - Heap Sort
  - Shell Sort
  - Comb Sort
  - Gnome Sort
  - Cocktail Sort
  - Pigeonhole Sort
  - Bitonic Sort
  - Cycle Sort
  - Strand Sort
  - Pancake Sort
  - Bogo Sort
  - Stooge Sort
  - Bogosort
  - Slow Sort
  - Smooth Sort
  - Spaghetti Sort
  - Odd-Even Sort
  - Bitonic Sort
  - Batcher Odd-Even Merge Sort
  - Batcher Odd-Even Sort
  - Batcher Odd-Even Transposition Sort
  - Batcher Odd-Even Mergesort
  - Batcher Odd-Even Transposition Mergesort
  - Batcher Odd-Even Transposition Mergesort with Batcher Odd-Even Transposition Sort
  - Batcher Odd-Even Transposition Mergesort with Batcher Odd-Even Sort
  - Batcher Odd-Even Transposition Mergesort with Batcher Odd-Even Transposition Mergesort
  - Batcher Odd-Even Transposition Mergesort with Batcher Odd-Even Transposition Mergesort with Batcher Odd-Even Transposition Sort
  - Batcher Odd-Even Transposition Mergesort with Batcher Odd-Even Transposition Mergesort with Batcher Odd-Even Sort
  - Batcher Odd-Even Transposition Mergesort with Batcher Odd-Even Transposition Mergesort with Batcher Odd-Even Transposition Mergesort
  - Batcher Odd-Even Transposition Mergesort with Batcher Odd-Even Transposition Mergesort with Batcher Odd-Even Transposition Mergesort with Batcher Odd-Even Transposition Sort
  - Batcher Odd-Even Transposition Mergesort with Batcher Odd-Even Transposition Mergesort with Batcher Odd-Even Transposition Mergesort with Batcher Odd-Even Sort
  - Batcher Odd-Even Transposition Mergesort with Batcher Odd-Even Transposition Mergesort with Batcher Odd-Even Transposition Mergesort with Batcher Odd
- Non-Comparison Sorts
  - Counting Sort
  - Radix Sort
  - Bucket Sort
  - Flash Sort
  - Pigeonhole Sort
  - Cube Sort
  - Library Sort
  - Tim Sort
  - Block Sort
  - Pancake Sort
  - Cycle Sort
  - Strand Sort
  - Smooth Sort
  - Spaghetti Sort
  - Odd-Even Sort
  - Bitonic Sort
  - Batcher Odd-Even Merge Sort
  - Batcher Odd-Even Sort
  - Batcher Odd-Even Transposition Sort
  - Batcher Odd-Even Mergesort
  - Batcher Odd-Even Transposition Mergesort
  - Batcher Odd-Even Transposition Mergesort with Batcher Odd-Even Transposition Sort
  - Batcher Odd-Even Transposition Mergesort with Batcher Odd-Even Sort
    - Batcher Odd-Even Transposition Mergesort with Batcher Odd-Even Transposition Mergesort

## Built-In JavaScript Sorting

- `Array.prototype.sort()` method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
- The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.
- The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
- The sort is not necessarily stable. The ECMAScript standard does not guarantee this behavior, thus, not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.

## Telling JavaScript how to sort

- The compare function should return a negative, zero, or positive value, depending on the arguments, like:

```js
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

[1, 30, 4, 21, 100000].sort(compare); // [1, 4, 21, 30, 100000]
```

- The sort method can take an optional compare function as a parameter. The compare function should return a negative, zero, or positive value, depending on the arguments, like:

```js
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}

[6, 4, 15, 10].sort(compare);
```

- The compare function is called with pairs of elements from the array being sorted, and should return a negative, zero, or positive value depending on the arguments. If the result is negative a is sorted before b. If the result is positive b is sorted before a. If the result is 0 no changes are done with the sort order of the two values.
- If no compare function is supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in Unicode code point order. For example, "Banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in Unicode order. All undefined elements are sorted to the end of the array.
- If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behaviour, and thus not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
- If compareFunction(a, b) is less than 0, sort a to an index lower than b (i.e. a comes first). If compareFunction(a, b) is greater than 0, sort b to an index lower than a (i.e. b comes first). If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behaviour, and thus not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
- If compareFunction is not supplied, all non-undefined array elements are sorted by converting them to strings and comparing strings in Unicode code point order. For example, "Banana" comes before "cherry". In a numeric sort, 9 comes before 80, but because numbers are converted to strings, "80" comes before "9" in Unicode order. All undefined elements are sorted to the end of the array. If compareFunction is supplied, the array elements are sorted according to the return value of the compare function: If compareFunction(a, b) is less than 0 for two elements a and b, then a will come before b. If compareFunction(a, b) is greater than 0 for two elements a and b, then b will come before a. If compareFunction(a, b) returns 0 for two elements a and b, then a and b will remain unchanged.
- The default sort order is according to string Unicode code points. If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". Because of this, the sort() method will produce an incorrect result when sorting numbers. You can fix this by providing a compare function:

```js
function compareNumbers(a, b) {
  return a - b;
}

[1, 30, 4, 21, 100000].sort(compareNumbers); // [1, 4, 21, 30, 100000]
```

- The built-in sort method accepts an optional comparator function.

```js
[1, 30, 4, 21, 100000].sort((a, b) => a - b); // [1, 4, 21, 30, 100000]
[1, 30, 4, 21, 100000].sort((a, b) => b - a); // [100000, 30, 21, 4, 1]
```

## Comparing Sorting Algorithms

- The best sorting algorithm for a given input depends on the number of elements to be sorted and on the expected values of the elements. For example, if the input is an array of integers, a sorting algorithm that is efficient for integers may be inefficient for strings, and vice versa. A sorting algorithm may require additional memory or have requirements that make it impractical to use. For example, a sorting algorithm may require a comparison function that is too expensive to compute. In such cases, it may be more practical to use a sorting algorithm that is less efficient but does not have these requirements.

| Sorting Algorithms  | Time Complexity best case | Time Complexity Worst Case | Time Complexity Average Case | Space Complexity |
| ------------------- | ------------------------- | -------------------------- | ---------------------------- | ---------------- |
| Bubble Sort         | O(n)                      | O(n^2)                     | O(n^2)                       | O(1)             |
| Selection Sort      | O(n^2)                    | O(n^2)                     | O(n^2)                       | O(1)             |
| Insertion Sort      | O(n)                      | O(n^2)                     | O(n^2)                       | O(1)             |
| Merge Sort          | O(n log(n))               | O(n log(n))                | O(n log(n))                  | O(n)             |
| Quick Sort          | O(n log(n))               | O(n^2)                     | O(n log(n))                  | O(log(n))        |
| Heap Sort           | O(n log(n))               | O(n log(n))                | O(n log(n))                  | O(1)             |
| Counting Sort       | O(n+k)                    | O(n+k)                     | O(n+k)                       | O(n+k)           |
| Radix Sort          | O(nk)                     | O(nk)                      | O(nk)                        | O(n+k)           |
| Bucket Sort         | O(n+k)                    | O(n^2)                     | O(n+k)                       | O(n+k)           |
| Shell Sort          | O(n log(n))               | O(n(log(n))^2)             | O(n(log(n))^2)               | O(1)             |
| Comb Sort           | O(n log(n))               | O(n^2)                     | O(n^2)                       | O(1)             |
| Pigeonhole Sort     | O(n+k)                    | O(n+k)                     | O(n+k)                       | O(n+k)           |
| Cycle Sort          | O(n^2)                    | O(n^2)                     | O(n^2)                       | O(1)             |
| Gnome Sort          | O(n)                      | O(n^2)                     | O(n^2)                       | O(1)             |
| Stooge Sort         | O(n(log(n))^2)            | O(n(log(n))^2)             | O(n(log(n))^2)               | O(log(n))        |
| Bitonic Sort        | O(n log(n))               | O(n log(n))                | O(n log(n))                  | O(1)             |
| Pancake Sort        | O(n)                      | O(n^2)                     | O(n^2)                       | O(1)             |
| Bogo Sort           | O(n)                      | O((n+1)!)                  | O((n+1)!)                    | O(1)             |
| Sleep Sort          | O(n)                      | O(n)                       | O(n)                         | O(1)             |
| Strand Sort         | O(n)                      | O(n)                       | O(n)                         | O(1)             |
| Tree Sort           | O(n log(n))               | O(n log(n))                | O(n log(n))                  | O(n)             |
| Cartesian Tree Sort | O(n log(n))               | O(n log(n))                | O(n log(n))                  | O(n)             |
| Cube Sort           | O(n)                      | O(n)                       | O(n)                         | O(n)             |
| Flash Sort          | O(n)                      | O(n)                       | O(n)                         | O(n)             |
| Odd-Even Sort       | O(n)                      | O(n^2)                     | O(n^2)                       | O(1)             |
| Quick3 Sort         | O(n log(n))               | O(n^2)                     | O(n log(n))                  | O(log(n))        |
| Smooth Sort         | O(n)                      | O(n log(n))                | O(n log(n))                  | O(1)             |
| Strand Sort         | O(n)                      | O(n)                       | O(n)                         | O(1)             |
| Tim Sort            | O(n)                      | O(n log(n))                | O(n log(n))                  | O(n)             |
| Tournament Sort     | O(n log(n))               | O(n log(n))                | O(n log(n))                  | O(n)             |
| Tree Sort           | O(n log(n))               | O(n log(n))                | O(n log(n))                  | O(n)             |

## Differences between O(n), O(log(n)) and O(n log(n))

- O(n) is linear time. This means that the time it takes to run the algorithm is proportional to the size of the input. For example, if it takes 1 second to run the algorithm on an input of size 1, it will take 2 seconds to run the algorithm on an input of size 2, 3 seconds to run the algorithm on an input of size 3, and so on.

```js
const linearTime = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
};

linearTime(5); // 0, 1, 2, 3, 4
```

- O(log(n)) is logarithmic time. This means that the time it takes to run the algorithm is proportional to the logarithm of the size of the input. For example, if it takes 1 second to run the algorithm on an input of size 1, it will take 0.5 seconds to run the algorithm on an input of size 2, 0.33 seconds to run the algorithm on an input of size 3, and so on.

```js
const logarithmicTime = (n) => {
  for (let i = 1; i < n; i *= 2) {
    console.log(i);
  }
};

logarithmicTime(5); // 1, 2, 4
```

- O(n log(n)) is linearithmic time. This means that the time it takes to run the algorithm is proportional to the size of the input times the logarithm of the size of the input. For example, if it takes 1 second to run the algorithm on an input of size 1, it will take 1 second to run the algorithm on an input of size 2, 1.66 seconds to run the algorithm on an input of size 3, and so on.

  ```js
  const linearithmicTime = (n) => {
    for (let i = 0; i < n; i++) {
      for (let j = 1; j < n; j *= 2) {
        console.log(i, j);
      }
    }
  };

  linearithmicTime(5); // 0 1, 0 2, 0 4, 1 1, 1 2, 1 4, 2 1, 2 2, 2 4, 3 1, 3 2, 3 4, 4 1, 4 2, 4 4
  ```
