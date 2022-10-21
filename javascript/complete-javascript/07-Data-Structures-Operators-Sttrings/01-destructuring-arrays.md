# Destructuring

## What is Destructuring in JavaScript?

**Destructuring** is act of unpacking element in an array of object. <br>
It not only allow you to npack but also manipulate and switch elements according to your demand.

# Destructuring Arrays

Destructuring is a convenient way of extracting multiple values from data stored in (possibly nested) arrays or objects, into distinct variables.

Destructuring is an ES6 feature, and is basically an expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

In simple words, destructuring means breaking down a complex structure into simpler parts and assigning them to variables.

```js
const arr = [1, 2, 3, 4, 5];
// one way
const a = arr[0];
const b = arr[1];
const c = arr[2];

// destructuring
const [a, b, c, d, e] = arr;
console.log(a, b, c, d, e); // 1 2 3 4 5
```

## Eliminating and swiping elements

```js
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const [first, second] = restaurant.categories;
console.log(first, second); // Italian Pizzeria

// eleminate the second element
const [first, , third] = restaurant.categories;
console.log(first, third); // Italian Vegetarian

// switch the first and second element
// let's use a temporary variable
let [first, second] = restaurant.categories;
const temp = first;
first = second;
second = temp;
console.log(first, second); // Pizzeria Italian

// destructuring
[first, second] = [second, first];
console.log(first, second); // Pizzeria Italian

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse); // Garlic Bread Pizza
// console.log(restaurant.order(2, 0)); // [ 'Garlic Bread', 'Pizza' ]
```

## Nested destructuring

```js
// nested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // 2 [ 5, 6 ]

const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6
```

## Default values

```js
const [p, q, r] = [8, 9];
console.log(p, q, r); // 8 9 undefined

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1
```

```js
function createGrid([width = 5, height = 5]) {
  return `Generates a ${width} x ${height} grid`;
}

createGrid([]); // Generates a 5 x 5 grid
createGrid([2]); // Generates a 2 x 5 grid
createGrid([2, 3]); // Generates a 2 x 3 grid
createGrid([undefined, 3]); // Generates a 5 x 3 grid
```

- The `createGrid()` function expects an array to be passed to it.
- It uses destructuring to set the first and second items in the array.
- If the array is empty or if it has only one item in it, then the default parameters kick in.

```js
createGrid(); // throws an error

function createGrid([width = 5, height = 5] = []) {
  return `Generates a ${width} x ${height} grid`;
}

createGrid(); // Generates a 5 x 5 grid
```

- The function expects an array to be passed in for destructuring.
  - Pass in non-array arguments will result in error.
  - Pass in an array, and then other arguments is fine.
- When no parameter is passed in, it throws an error.
- With `= []`, if `createGrid()` is called without any argument, it will use this default empty array.
