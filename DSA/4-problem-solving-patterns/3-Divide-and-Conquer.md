# Divide and Conquer Pattern

The Divide and Conquer Pattern is used to solve problems that involve dividing a data set into smaller chunks and then repeating a process with a subset of data. This pattern can tremendously decrease time complexity.

## Example:

```javascript
// Write a function called search that accepts a sorted array and a value and returns the index at which the value exists. If the value does not exist in the array, return -1.
```

### Naive Approach

1. Use a for loop to iterate over the array
2. For every number, check if it is equal to the value
3. If it is, return the index
4. If it is not, return -1

```javascript
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
```

### Divide and Conquer Approach

#### Understand the Problem

1. Restate
   > Write a function that takes a sorted array and a value and returns the index at which the value exists. If the value does not exist in the array, return -1.
2. Input
   > a sorted array and a value
3. Output
   > the index at which the value exists. If the value does not exist in the array, return -1.
4. are input and output related
   > Yes
5. Labels for useful fata
   > Let's call the input array as simply array and the value as value. Let the pointers be called left and right

#### Explore Concrete Examples

1. Simple Case:
   > [1, 2, 3, 4, 5, 6] val = 4 => 3<br>
   > the pointer should move towards each other until they cross each other
2. Boundary Case:
   > [1, 2, 3, 4, 5, 6] val = 6 => 5<br>
   > the pointer whose absolute value is higher should move
3. Empty case:
   > [] val = 4 => -1
4. Negative case:

#### Break It Down

    ```javascript
    function search(array, value) {
      // define pointers
      // while pointers dont cross:
      // compare numbers
      // if pair found return index
      // if pair not found move pointer
      // if no pair found return -1
    }
    ```

#### Solve or Simplify

    ```javascript
    function search(array, value) {
      let left = 0;
      let right = array.length - 1;
      while (left <= right) {
        let middle = Math.floor((left + right) / 2);
        if (array[middle] === value) {
          return middle;
        } else if (array[middle] < value) {
          left = middle + 1;
        } else {
          right = middle - 1;
        }
      }
      return -1;
    }
    ```

    > Insight: The informatin that the array is sorted is used

### Look Back and Refactor

1. Can you check the result?
   > Yes
2. Can you derive the result differently?
   > Yes
3. Can you understand it at a glance?
   > Yes
4. Can you use the result or method for some other problem?
   > Yes
5. Can you improve the performance of your solution?
   > Yes
6. Can you think of other ways to refactor?
   > Yes
7. How have other people solved this problem?
   > Yes

Divide the dataset into smaller parts and reapeating the process for the smaller parts.
Eg: Binary Search, Merge Sort, Quick Sort
