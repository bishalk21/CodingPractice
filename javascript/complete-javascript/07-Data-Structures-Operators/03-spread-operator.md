# Spread Operator in JavaScript

The spread operator is a new feature in ES6. It allows us to expand an iterable object into a list of arguments. It is also used to copy arrays and objects.

- basically expand an array into all of its elements

## Syntax

```js
[...iterableObj, "4", "five", 6];
```

- The spread operator (`...`) expands, or spreads, iterable objects into multiple elements.

```js
const primes = new Set([2, 3, 5, 7]);
console.log(...primes);
// 2 3 5 7
```

- This operator is useful for combining arrays.

```js
const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];
```

## Examples

### Spread Operator with Arrays

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
```

### Spread Operator with Objects

```js
const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

const clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }
```

### Spread Operator with Functions

```js
const arr = [7, 8, 9];
// using variable
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// [1, 2, 7, 8, 9]

// using spread operator
const newArr = [1, 2, ...arr];
// [1, 2, 7, 8, 9]

const newMenu = [...restaurant.mainMenu, "Gnocci"];
// ["Pizza", "Pasta", "Risotto", "Gnocci"]
```

### Spread Operator with Strings

```js
const str = "Bishal";
const letters = [...str, " ", "S."];
// ["B", "i", "s", "h", "a", "l", " ", "S."]
```

### Spread Operator with Iterables

Iterables are arrays, strings, maps, sets. But not objects.

```js
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3?"),
];

restaurant.orderPasta(...ingredients);
```

### Spread Operator with Objects

```js
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
// {foundedIn: 1998, name: "Classico Italiano", location: "Via Angelo Tavanti 23, Firenze, Italy", categories: Array(4), starterMenu: Array(4), mainMenu: Array(3), …}
```

### Spread Operator with Arrays

```js
const mainMenuCopy = [...restaurant.mainMenu];

// This is how to make a proper copy of an array
const mainMenuCopy = [...restaurant.mainMenu];
```

## Importance of Spread Operator

- to make shallow copies of arrays and objects
- to merge arrays or objects
- to pass elements of an array as arguments to a function
- to expand an iterable object into a list of arguments

## Shallow Copy

```js
const arr = [1, 2, 3];
const badNewArr = arr;
badNewArr.push(4);
// [1, 2, 3, 4]

// This is how to make a proper copy of an array
const newArr = [...arr];
newArr.push(4);
// [1, 2, 3]
```

## Merge Arrays

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArr = [...arr1, ...arr2];
```

[]
