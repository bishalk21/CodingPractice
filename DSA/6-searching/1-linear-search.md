# Linear Search

Compares every element one by one till target is reached.

## Complexity

1. Time

   Best: O(1)

   Average: O(n)

   Worst: O(n)

2. Space: O(1)

## Pseudocode

    ```pseudo
    function linearSearch(array, target) {
      // loop through the array
      // if the element is equal to the target, return the index
      // if the element is not equal to the target, return -1
    }
    ```

## Implementation

```javascript
function linearSearch(array, target) {
  for (index in array) {
    if (array[index] == target) return parseInt(index);
  }
  return -1;
}
```

## JavaScript inbuilt search functions

```javascript
let a = [3, 45, 65, 20, 1];
```

**1. find:**

Takes in a function and return the first value that satisfies the condition in function. The function should return true or false.

```javascript
a.find(function (value) {
  return value > 40;
});
//returns 45

// ES6 Version
a.find((value) => value > 40);
//returns 45
```

**2. findIndex:**

Same like find but instead of returning value, it returns index of the values that satisfies the condition

```javascript
a.findIndex(function (value) {
  return value > 40;
});
// returns 1

// ES6 version
a.findIndex((value) => value > 40);
// returns 1
```

**3. indexOf**

Returns the index of first occurance of the given value

```javascript
a.indexOf(45);
// returns 1
```

**4. includes**

Returns tru if the given value exists in the array else returns false

```javascript
a.includes(45);
// returns true

a.includes(455);
// returns false
```

```js
// write a function called linearSearch which takes an array and a value, returns the index at which the values exists.
// If the value doesnot exist then return -1.

function linearSearch(arr, val) {
  for (let index in arr) {
    if (arr[index] === val) return parseInt(index);
  }
  return -1;
}

linearSearch([1, 4, 56, 32, 546, 234], 546); // 4
```

# Linear SearcH BIG O

BIG O
