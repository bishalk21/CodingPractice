# Sliding Window Pattern

Sliding Window Pattern is used to solve problems that involve finding a subset of data that meets a certain condition. The pattern involves creating a window which can either be an array or number from one position to another. Depending on a certain condition, the window either increases or closes (and a new window is created). Very useful for keeping track of a subset of data in an array/string etc.'

## Example:

```javascript
// Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
```

### Naive Approach

1. Use a for loop to iterate over the array
2. For every number, iterate over the array again and find a partner number with sum zero

> Insight: The informatin that the array is sorted is not used

```javascript
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
```

### Sliding Window + General Approach

#### Understand the Problem

1. Restate
   > Write a function that takes an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
2. Input
   > an array of integers and a number called n
3. Output

   > maximum sum of n consecutive elements in the array

4. are input and output related
   > Yes
5. Labels for useful fata
   > Let's call the input array as simply array and the maximum sum as maxSum. Let the pointers be called left and right

#### Explore Concrete Examples

1. Simple Case:
   > [1, 2, 5, 2, 8, 1, 5] n = 2 => 10<br>
   > the pointer should move towards each other until they cross each other
2. Boundary Case:
   > [1, 2, 5, 2, 8, 1, 5] n = 4 => 17<br>
   > the pointer whose absolute value is higher should move
3. Empty case:
   > [] n = 4 => null
4. Invalid Case:
   > array assured

#### Break Down the Problem

    ```javascript
    function maxSubarraySum(array, n) {
      // define pointers and counter
      //while pointers dont cross:
      // compare numbers
      // if pair found move both pointers, counter++
      // if pair not found move only the pointer with higher absolute value
      // return counter
    }
    ```

#### Solve/Simplify

    ```javascript
    function maxSubarraySum(array, n) {
      let maxSum = 0;
      let tempSum = 0;
      if (array.length < n) return null;
      for (let i = 0; i < n; i++) {
        maxSum += array[i];
      }
      tempSum = maxSum;
      for (let i = n; i < array.length; i++) {
        tempSum = tempSum - array[i - n] + array[i];
        maxSum = Math.max(maxSum, tempSum);
      }
      return maxSum;
    }
    ```

#### Look Back and Refactor

    ```javascript
    function maxSubarraySum(array, n) {
      let maxSum = 0;
      let tempSum = 0;
      if (array.length < n) return null;
      for (let i = 0; i < n; i++) {
        maxSum += array[i];
      }
      tempSum = maxSum;
      for (let i = n; i < array.length; i++) {
        tempSum = tempSum - array[i - n] + array[i];
        maxSum = Math.max(maxSum, tempSum);
      }
      return maxSum;
    }
    ```

```javascript
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function. Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not. maxSubarraySum([100,200,300,400], 2) // 700 maxSubarraySum([1,4,2,10,23,3,1,0,20], 4) // 39 maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5 maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2) // 5 maxSubarraySum([2,3], 3) // null

function maxSubarraySum(array, n) {
  let maxSum = 0;
  let tempSum = 0;
  if (array.length < n) return null;
  for (let i = 0; i < n; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;
  for (let i = n; i < array.length; i++) {
    tempSum = tempSum - array[i - n] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```

```javascript
function maxSubarraySum(array, n) {
  if (array.length < n) return null;

  let total = 0;
  for (let i = 0; i < n; i++) {
    total += array[i];
  }

  let currentTotal = total;
  for (let i = n; i < array.length; i++) {
    currentTotal += array[i] - array[i - n];
    total = Math.max(total, currentTotal);
  }
  return total;
}
```

```javascript
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer. This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead. minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52 minSubArrayLen([1,4,16,22,5,7,8,9,10], 39) // 3 minSubArrayLen([1,4,16,22,5,7,8,9,10], 55) // 5 minSubArrayLen([4,3,3,8,1,2,3], 11) // 2 minSubArrayLen([1,4,16,22,5,7,8,9,10], 95) // 0

function minSubArrayLen(array, num) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < array.length) {
    if (total < num && end < array.length) {
      total += array[end];
      end++;
    } else if (total >= num) {
      minLen = Math.min(minLen, end - start);
      total -= array[start];
      start++;
    } else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}
```

```javascript

```
