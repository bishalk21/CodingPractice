# Sets

Sets are a new data structure introduced in ES6. Sets are similar to arrays, but they don't allow duplicate values. Sets are a great way to remove duplicate values from an array.

Sets are basically collections of unique values. You can add values to a set, remove values from a set, and check if a set contains a value. You can also iterate over a set's values.

## Creating a Set

To create a set, you can use the `Set` constructor. The constructor takes an iterable object as an argument. An iterable object is an object that has a `Symbol.iterator` method. Arrays and strings are iterable objects.

```js
const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set("Hello");
```

## Adding Values to a Set

To add a value to a set, you can use the `add` method.

```js
const set = new Set();
set.add(1);
set.add(2);

console.log(set); // Set { 1, 2 }
```

## Removing Values from a Set

To remove a value from a set, you can use the `delete` method.

```js
const set = new Set([1, 2, 3, 4, 5]);
set.delete(1);

console.log(set); // Set { 2, 3, 4, 5 }
```

## Checking if a Set Contains a Value

To check if a set contains a value, you can use the `has` method.

```js
const set = new Set([1, 2, 3, 4, 5]);
console.log(set.has(1)); // true
console.log(set.has(6)); // false
```

## Iterating Over a Set

To iterate over a set, you can use a `for...of` loop.

```js
const set = new Set([1, 2, 3, 4, 5]);
for (const value of set) {
  console.log(value);
}
// 1 2 3 4 5
```

## Converting a Set to an Array

To convert a set to an array, you can use the `Array.from` method.

```js
const set = new Set([1, 2, 3, 4, 5]);
const array = Array.from(set);
console.log(array); // [ 1, 2, 3, 4, 5 ]
```

## Converting an Array to a Set

To convert an array to a set, you can use the `Set` constructor.

```js
const array = [1, 2, 3, 4, 5];
const set = new Set(array);
console.log(set); // Set { 1, 2, 3, 4, 5 }
```

## Removing Duplicate Values from an Array

To remove duplicate values from an array, you can convert the array to a set and then convert the set back to an array.

```js
const array = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
const set = new Set(array);
const uniqueArray = Array.from(set);
console.log(uniqueArray); // [ 1, 2, 3, 4, 5 ]
```

## Getting Unique Values from Multiple Arrays

To get unique values from multiple arrays, you can use the spread operator to convert the arrays to sets and then convert the sets back to arrays.

```js
const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const uniqueArray = Array.from(new Set([...array1, ...array2, ...array3]));
console.log(uniqueArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
```

## Clearing a Set

To clear a set, you can use the `clear` method.

```js
const set = new Set([1, 2, 3, 4, 5]);
set.clear();
console.log(set); // Set {}
```

## Getting the Size of a Set

To get the size of a set, you can use the `size` property.

```js
const set = new Set([1, 2, 3, 4, 5]);
console.log(set.size); // 5
```

## Checking if a Set is Empty

To check if a set is empty, you can check if the size of the set is 0.

```js
const set = new Set();
console.log(set.size === 0); // true
```

## Use Cases for Sets

- Removing duplicate values from an array
- Checking if a value is in a collection
- Getting the unique values from two arrays

```js
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // [ 'Waiter', 'Chef', 'Manager' ]

//size
console.log(new Set(staff).size); // 3
console.log(new Set("jonasschmedtmann").size); // 11
```

## Summary

Sets are a new data structure introduced in ES6. Sets are similar to arrays, but they don't allow duplicate values. Sets are a great way to remove duplicate values from an array.
