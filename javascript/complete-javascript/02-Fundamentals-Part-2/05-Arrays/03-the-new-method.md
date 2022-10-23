# The New Method

The New Method is used to create an array with a specific length. It is used to create an empty array and then fill it with values.

## Syntax

```js
new Array(length);
```

## Example

```js
const arr = [1, 2, 3];
console.log(arr[0]); // 1
console.log(arr.at(0)); // 1

// getting last element of array
console.log(arr[arr.length - 1]); // 3
console.log(arr.at(-1)); // 3
console.log(arr.slice(-1)[0]); // [3] // [0] is used to get the element from the array - 3
```
